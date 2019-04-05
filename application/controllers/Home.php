<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Home extends MY_Controller
    {
        public function load()
        {
            $this->load->clientView('home/load');
        }
    }
