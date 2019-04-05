<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Handler extends MY_Controller
    {
        public function show_404()
        {
            $this->_show_404();
        }
    }
