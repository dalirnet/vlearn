<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class userMd extends MY_Model
    {
        public function __construct()
        {
            parent::__construct();
        }

        public $userGroupCode = [
            0           => 'member',
            1           => 'publisher',
            2           => 'admin',
            'member'    => 0,
            'publisher' => 1,
            'admin'     => 2
        ];

        public function _new($groupAccess = 0)
        {
            $mail = $this->input->post('mail');
            if (empty($this->db->get_where('_users', ['mail' => $mail])->row_array())) {
                $this->db->insert('_users', [
                    'firstName'   => $this->input->post('firstName'),
                    'lastName'    => $this->input->post('lastName'),
                    'mail'        => $this->input->post('mail'),
                    'phone'       => latinNumber($this->input->post('phone')),
                    'password'    => md5($this->input->post('password')),
                    'groupAccess' => $groupAccess
                ]);
                $thisId = $this->db->insert_id();
                $comment = 'توسط: ';
                if (isset($this->session->userLogin) and $this->session->userLogin) {
                    $comment .= $this->session->userFirstName . ' ' . $this->session->userLastName;
                } else {
                    $comment .= $this->input->post('firstName') . ' ' . $this->input->post('lastName');
                }
                $this->CI->_setActivity('signUp', 'admin', $thisId, $comment);

                return true;
            }

            return false;
        }

        public function _edit($userId)
        {
            $phone = latinNumber($this->input->post('phone'));
            $phoneIsset = $this->db->get_where('_users', ['phone' => $phone])->row_array();
            if (!empty($phoneIsset)) {
                if ($phoneIsset['id'] != $userId) {
                    return false;
                }
            }
            $update = [
                'firstName'   => $this->input->post('firstName'),
                'lastName'    => $this->input->post('lastName'),
                'phone'       => $phone,
                'groupAccess' => $this->input->post('groupAccess')
            ];
            if ($this->input->post('password')) {
                $update['password'] = md5($this->input->post('password'));
            }
            if ($this->db->where('id', $userId)->update('_users', $update)) {
                return true;
            }


            return false;
        }

        public function _view($where = [], $limit = false)
        {
            if (array_key_exists('id', $where)) {
                return $this->db->get_where('_users', $where)->row_array();
            } else {
                $result = $this->_limitQuery(function () use ($where) {
                    $this->db->from('_users');
                    $this->db->where($where);
                }, 'admin/action/user/view/all/' . $this->userGroupCode[$where['groupAccess']], $limit);

                return $result;
            }
        }

        public function _getUserLastActivity()
        {
            $this->db->where('userId', $this->uri->segment(5))->limit(5)->order_by('_activity.time DESC');

            return $this->db->get('_activity')->result_array();
        }

        public function _changeUserStatus($user, $status)
        {
            return $this->db->where('id', $user)->update('_users', ['active' => $status]);
        }
    }
