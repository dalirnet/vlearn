<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class MY_Model extends CI_Model
    {
        public $CI;

        public function __construct()
        {
            parent::__construct();
            $this->CI = &get_instance();
        }

        public function _limitQuery($before, $method, $limit = false)
        {
            if ($limit === false) {
                $count = count($this->CI->uri->segment_array());
                $limit = $this->CI->uri->segment($count);
                if (in_array('where', $this->CI->uri->segment_array())) {
                    if (!is_numeric($this->CI->uri->segment($count - 1))) {
                        $limit = 0;
                    }
                }
            }
            if ($limit < 0) {
                $limit = 0;
            }
            $query = [];
            $before();
            $query[0] = preg_replace('/SELECT(.*?)FROM/s', 'SELECT COUNT(*) AS `numrows` FROM', $this->db->get_compiled_select('', false));
            $this->db->limit(10, $limit);
            $query[1] = $this->db->get_compiled_select();
            $db = $this->db->query($query[0])->row_array();
            $this->pagination->initialize([
                'base_url'   => base_url($method),
                'total_rows' => $db['numrows'],
                'per_page'   => 10,
            ]);

            return $this->db->query($query[1])->result_array();
        }
    }
