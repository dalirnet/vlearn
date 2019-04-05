<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class notificationMd extends MY_Model
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function _view($level = 2)
        {
            $result = $this->_limitQuery(function () use ($level) {
                $this->db->from('_activity');
                if ($level != 2) {
                    $this->db->where('level', ($level == 1 ? 'publisher' : 'user'));
                }
                $this->db->join('_users', '_users.id = _activity.userId');
                $this->db->order_by('_activity.time DESC');
            }, 'admin/action/notification/view');

            return $result;
        }

    }
