<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Access extends MY_Controller
    {
        public function status()
        {
            $this->_userLogin(false, true);
        }

        public function login()
        {
            $this->_userLogin(false, true);
            $this->_httpMethod(function () {
                $this->_loginForm();
            }, function () {
                $this->_loginAction();
            });
        }

        public function _loginForm()
        {
            $this->load->_addTitle('login')->_addBodyClass('be-splash-screen');
            $this->load->adminView('adminPanel/loginPage');
        }

        public function _loginAction()
        {
            if ($userData = $this->coreData->_checkUserLogin($this->input->post('mail'), md5($this->input->post('password')))) {
                $time = time();
                $this->session->set_userdata([
                    'userLogin'       => true,
                    'userId'          => $userData['id'],
                    'userFirstName'   => $userData['firstName'],
                    'userLastName'    => $userData['lastName'],
                    'userMail'        => $userData['mail'],
                    'userPhone'       => $userData['phone'],
                    'userGroupAccess' => $userData['groupAccess'],
                    'userLastLogin'   => $time,
                ]);
                $this->db->where('id', $userData['id'])->update('_users', ['lastLogin' => $time]);
                $this->_setActivity('login', 'admin', $userData['id'], $this->agent->platform() . ', ' . $this->agent->browser());
                $this->_redirect('admin/dashboard');
            } else {
                $this->pageAlert['error'] = true;
                $this->_loginForm();
            }
        }

        public function logout()
        {
            if (isset($this->session->userLogin) and $this->session->userLogin) {
                $this->pageAlert['success'] = true;
            }
            $this->session->sess_destroy();
            $this->_loginForm();
        }

        public function forgotPassword()
        {
            $this->_userLogin(false, true);
            $this->_httpMethod(function () {
                $this->_forgotPasswordForm();
            }, function () {
                $this->_forgotPasswordAction();
            });
        }

        public function _forgotPasswordForm()
        {
            $this->load->_addTitle('forgot Password')->_addBodyClass('be-splash-screen');
            $this->load->adminView('adminPanel/forgotPasswordPage');
        }

        public function _forgotPasswordAction()
        {
            if ($userData = $this->coreData->_checkUserLogin($this->input->post('mail'))) {
                $data = [
                    'name'      => $userData['firstName'],
                    'tokenLink' => base_url('admin/resetPassword/' . $this->_createResetPassword($userData['id'], $userData['mail']))
                ];
                if ($this->send->email($userData['mail'], 'reset Password', 'resetPassword', $data)) {
                    $this->pageAlert['success'] = true;
                } else {
                    $this->pageAlert['danger'] = true;
                }
            } else {
                $this->pageAlert['error'] = true;
            }
            $this->_forgotPasswordForm();
        }

        public function _createResetPassword($id, $mail)
        {
            $db = $this->db->get_where('_resetPassword', [
                'userId'        => $id,
                'insertTime >=' => (time() - 7200)
            ])->row_array();
            if (!empty($db)) {
                return $db['token'];
            } else {
                $time = time();
                $token = md5($time . $mail . ($time - 7200));
                $token .= md5($token);
                $this->db->insert('_resetPassword', [
                    'userId'     => $id,
                    'token'      => $token,
                    'insertTime' => time()
                ]);

                return $token;
            }
        }

        public function resetPasswordForm()
        {
            $this->_userLogin(false, true);
            $validToken = $this->_validResetCode($this->uri->segment(3));
            $user = $this->coreData->_getUser($validToken['userId']);
            $this->load->_addBodyClass('be-splash-screen');
            $this->load->adminView('adminPanel/resetPasswordPage', [
                'token'    => $this->uri->segment(3),
                'userMail' => $user['mail']
            ]);
        }

        public function resetPasswordAction()
        {
            $validToken = $this->_validResetCode($this->input->post('token'));
            $this->db->where('id', $validToken['userId'])->update('_users', ['password' => md5($this->input->post('password'))]);
            $this->db->where('token', $this->input->post('token'))->update('_resetPassword', ['status' => 1]);
            $this->pageAlert['success_type2'] = true;
            $this->_loginForm();
        }

        public function _validResetCode($token)
        {
            $db = $this->db->get_where('_resetPassword', [
                'token'         => $token,
                'status'        => 0,
                'insertTime >=' => (time() - 7200)
            ])->row_array();
            if (empty($db)) {
                $this->_show_404();
            }

            return $db;
        }
    }
