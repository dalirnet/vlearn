<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class videoMd extends MY_Model
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function _view()
        {
            $where = 0;
            $result = $this->_limitQuery(function () use ($where) {
                $this->db->select('_video.*,_learn.name as learnName,_learn.id as learnId');
                $this->db->from('_video')->order_by('startUpload');
                $this->db->join('_learn', '_learn.id = _video.learnId', 'left');
                if (is_numeric($this->uri->segment(6))) {
                    $where = $this->uri->segment(6);
                }
                $this->db->where('learnId', $where);
            }, 'admin/action/user/view/all/');

            return $result;
        }
    }
