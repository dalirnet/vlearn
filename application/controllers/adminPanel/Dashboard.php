<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Dashboard extends MY_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->_userLogin();
        }

        public function load()
        {
            $this->load->activeMenu(1)->adminPanelView('dashboard', 'داشبورد');
        }
    }
