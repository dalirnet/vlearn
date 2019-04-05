<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Notification extends MY_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->_userLogin();
            $this->load->activeMenu(10);
            $this->load->model('notificationMd');
        }

        public function view_()
        {
            $this->load->data = $this->notificationMd->_view($this->session->userGroupAccess, 0);
            $this->load->adminPanelView('notification/viewList', 'اعلانات');
        }
    }
