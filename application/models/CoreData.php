<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class coreData extends MY_Model
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function _checkUserLogin($mail, $password = false, $accessGroup = 1)
        {
            $where = [
                'mail'           => $mail,
                'groupAccess >=' => $accessGroup,
                'active'         => 1
            ];
            if ($password !== false) {
                $where['password'] = $password;
            }
            $db = $this->db->get_where('_users', $where)->row_array();
            if (empty($db)) {
                return false;
            }

            return $db;
        }

        public function _getUser($where)
        {
            if (is_numeric($where)) {
                $this->db->where('id', $where);
            } else {
                $this->db->where('mail', $where);
            }

            return $this->db->get('_users')->row_array();
        }

        public function _getLastNotification($level = 2)
        {
            if ($level != 2) {
                $this->db->where('level', ($level == 1 ? 'publisher' : 'user'));
            }
            $this->db->where('_activity.time > ', time() - 86400);
            $this->db->join('_users', '_users.id = _activity.userId');
            $this->db->order_by('_activity.time DESC');

            return $this->db->get('_activity')->result_array();
        }
    }
