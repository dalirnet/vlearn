<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class MY_Controller extends CI_Controller
    {
        public $pageAlert = [
            'success'       => false,
            'success_type2' => false,
            'success_type3' => false,
            'error'         => false,
            'error_type2'   => false,
            'error_type3'   => false,
            'danger'        => false,
            'danger_type2'  => false,
            'danger_type3'  => false,
            'notice'        => false,
            'notice_type2'  => false,
            'notice_type3'  => false
        ];
        public $url;
        public $queryString;

        public $jsonObject = [];

        public function __construct()
        {
            parent::__construct();
            $this->url = str_replace('/vLearn', '', $_SERVER['REQUEST_URI']);
            parse_str($_SERVER['QUERY_STRING'], $this->queryString);
        }

        public function _userLogin($ajaxConnection = false, $redirectDashboard = false)
        {
            if (isset($this->session->userLogin) and $this->session->userLogin) {
                if ($redirectDashboard) {
                    $this->_redirect('admin/dashboard');
                }
            } else {
                if ($ajaxConnection) {
                    $this->_json(['status' => false]);
                } else {
                    if ($this->uri->rsegment(1) != 'access' || ($this->uri->rsegment(1) == 'access' && $this->uri->rsegment(2) == 'status')) {
                        $this->_redirect('admin/login');
                    }
                }
            }
        }

        public function _redirect($url, $baseUrl = true)
        {
            $this->output->set_header('Location: ' . ($baseUrl ? base_url($url) : $url))->_display();
        }

        public function _json($object = [])
        {
            $this->output->set_content_type(' application/json')->set_output(json_encode(array_merge($this->jsonObject, $object)))->_display();
        }

        public function _httpMethod($getAction, $postAction)
        {
            switch ($this->input->method()) {
                case 'get':
                    $getAction();
                    break;
                case 'post':
                    $postAction();
                    break;
            }
        }

        public function _show_404()
        {
            $this->load->_addTitle('404!')->_addBodyClass('be-splash-screen');
            $this->load->adminView('adminPanel/404Page');
        }

        public function _setActivity($mode, $level = 'admin', $id = 0, $comment = '')
        {
            $this->db->insert('_activity', [
                'userId'  => ($id > 0 ? $id : $this->session->userId),
                'mode'    => $mode,
                'comment' => $comment,
                'level'   => $level,
                'time'    => time()
            ]);
        }
    }
