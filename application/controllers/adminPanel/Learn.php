<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Learn extends MY_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->_userLogin();
            $this->load->activeMenu(2);
            $this->load->model('learnMd');
        }

        public function list_()
        {
            $this->load->data = $this->learnMd->_view();
            $this->load->_addSrcStyle('public/admin/lib/dropzone/dist/dropzone.css');
            $this->load->_addSrcScript('public/admin/lib/dropzone/dist/dropzone.js');
            $this->load->_addScript('Dropzone.options.myAwesomeDropzone = {acceptedFiles : ".jpg,.png"};');
            $this->load->adminPanelView('learn/list', 'لیست آموزش ها');
        }

        public function new_()
        {
            $this->_httpMethod(function () {
                $this->load->_addDefaultHead();
                $this->load->adminPanelView('learn/new', 'آموزش جدید');
            }, function () {
                if ($this->learnMd->_new()) {
                    $this->pageAlert['success'] = true;
                } else {
                    $this->pageAlert['error'] = true;
                }
                $this->load->_addDefaultHead();
                $this->load->adminPanelView('learn/new', 'آموزش جدید');
            });
        }

        public function edit_()
        {
            $this->_httpMethod(function () {
                $this->load->data = $this->learnMd->_view($this->uri->segment(5));
                $this->load->data['category'] = json_decode($this->load->data['category'], true);
                $this->load->adminPanelView('learn/edit', 'ویرایش آموزش');
            }, function () {
                if ($this->learnMd->_edit()) {
                    $this->pageAlert['success'] = true;
                } else {
                    $this->pageAlert['error'] = true;
                }
                $this->load->data = $this->learnMd->_view($this->uri->segment(5));
                $this->load->data['category'] = json_decode($this->load->data['category'], true);
                $this->load->adminPanelView('learn/edit', 'ویرایش آموزش');
            });
        }
    }
