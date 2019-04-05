<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Media extends MY_Controller
    {
        public $sourceId = 0;
        public function __construct()
        {
            parent::__construct();
            $this->_userLogin();
            $this->load->activeMenu(2);
        }

        public function upload_()
        {
            $this->sourceId = $this->uri->segment(6);
            switch ($this->uri->segment(5)) {
            case 'learnImage':
              $this->_leranImage();
              break;
          }
        }
        public function _leranImage()
        {
            $dir = PUBLICPATH.'media'.DIRECTORY_SEPARATOR.'DL-'.$this->sourceId;
            if (!file_exists($dir)) {
                mkdir($dir, 0777, true);
            }
            $config['upload_path'] = $dir;
            $config['allowed_types'] = 'jpg|png';
            $config['overwrite'] = true;
            $this->load->library('upload', $config);
            $doUpload = true;
            $validName = [
              '62.jpg',
              '62.png',
              '32.jpg',
              '32.png',
              '22.jpg',
              '22.png',
            ];
            foreach ($_FILES as $value) {
                if (!in_array($value['name'], $validName)) {
                    $doUpload = false;
                    break;
                }
            }
            if ($doUpload) {
                if ($this->upload->do_upload('file')) {
                    echo 'ok';
                } else {
                    echo $this->upload->display_errors($open = '', $close='');
                }
            } else {
                echo 'error';
            }
        }
    }
