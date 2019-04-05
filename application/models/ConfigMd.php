<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class configMd extends MY_Model
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function _get()
        {
            $config = [];
            foreach ($this->db->get('_config')->result_array() as $row) {
                $config[$row['name']] = $row['value'];
            }

            return $config;
        }
    }
