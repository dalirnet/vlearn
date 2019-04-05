<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Config extends MY_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->_userLogin();
            $this->load->activeMenu(9);
            $this->load->model('configMd');
        }

        public function load_()
        {
            $this->load->data = $this->configMd->_get();
            $this->load->adminPanelView('config/system', 'تنظیمات سیستم');
        }

        public function save_()
        {
            $error = false;
            foreach ($this->input->post() as $key => $value) {
                if (!$this->db->where('name', $key)->update('_config', ['value' => $value])) {
                    $error = true;
                }
            }
            if (!$error) {
                $this->pageAlert['success'] = true;
            } else {
                $this->pageAlert['error'] = true;
            }
            $this->load->data = $this->configMd->_get();
            $this->load->adminPanelView('config/system', 'تنظیمات سیستم');
        }
    }
