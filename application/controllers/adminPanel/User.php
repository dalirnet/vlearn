<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class User extends MY_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->_userLogin();
            $this->load->activeMenu(3);
            $this->load->model('userMd');
        }

        public function view_()
        {
            if ($this->uri->segment(5) == 'all') {
                $where = [];
                $title = 'مشاهده ';
                switch ($this->uri->segment(6)) {
                    case 'member':
                        $where = ['groupAccess' => 0];
                        $title .= $this->lang->line('userGroupCode_s0');
                        break;
                    case 'publisher':
                        $where = ['groupAccess' => 1];
                        $title .= $this->lang->line('userGroupCode_s1');
                        break;
                    default:
                        $where = ['groupAccess' => 2];
                        $title .= $this->lang->line('userGroupCode_s2');
                }
                $this->load->data = $this->userMd->_view($where);
                $this->load->adminPanelView('user/viewList', $title);
            } else {
                $this->load->data['userInfo'] = $this->userMd->_view(['id' => $this->uri->segment(5)]);
                $this->load->data['userActivity'] = $this->userMd->_getUserLastActivity();
                $this->load->adminPanelView('user/viewOne', $this->load->data['userInfo']['firstName'] . ' ' . $this->load->data['userInfo']['lastName']);
            }
        }

        public function new_()
        {
            $this->_httpMethod(function () {
                $this->load->adminPanelView('user/new', 'ثبت کاربر جدید');
            }, function () {
                if ($this->userMd->_new($this->input->post('groupAccess'))) {
                    $this->pageAlert['success'] = true;
                } else {
                    $this->pageAlert['error'] = true;
                }
                $this->load->adminPanelView('user/new', 'ثبت کاربر جدید');
            });
        }

        public function edit_()
        {
            $this->_httpMethod(function () {
                $this->load->data = $this->userMd->_view(['id' => $this->uri->segment(5)]);
                $this->load->adminPanelView('user/edit', 'ویرایش کاربر');
            }, function () {
                if ($this->userMd->_edit($this->input->post('id'))) {
                    $this->pageAlert['success'] = true;
                } else {
                    $this->pageAlert['error'] = true;
                }
                $this->load->data = $this->userMd->_view(['id' => $this->input->post('id')]);
                $this->load->adminPanelView('user/edit', 'ویرایش کاربر');
            });
        }

        public function status_()
        {
            if ($this->userMd->_changeUserStatus($this->uri->segment(6), ($this->uri->segment(5) == 'active' ? 1 : 0))) {
                $this->_redirect($this->queryString['return'] . $this->load->_addQueryString(['status' => 'success']));
            } else {
                $this->_redirect($this->queryString['return'] . $this->load->_addQueryString(['status' => 'error']));
            }
            $this->view_();
        }

        public function find_()
        {
            echo 'find';
        }
    }
