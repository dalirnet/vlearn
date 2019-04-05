<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class LearnMd extends MY_Model
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function _view($id = 0)
        {
            if ($id == 0) {
                $result = $this->_limitQuery(function () {
                    $this->db->from('_learn')->order_by('insertTime');
                }, 'admin/action/learn/list/');
            } else {
                $result= $this->db->get_where('_learn', ['id' => $id])->row_array();
            }
            return $result;
        }

        public function _new()
        {
            $category = [];
            foreach ($this->input->post('checkCategory') as $key => $value) {
                $category[] = (string)$key;
            }
            if ($this->db->insert('_learn', [
              'name'      => $this->input->post('name'),
              'comment'   => $this->input->post('comment'),
              'category'  => json_encode($category),
              'point'     => $this->input->post('point'),
              'price'     => $this->input->post('price'),
              'insertTime' => time()
            ])) {
                return true;
            }

            return false;
        }

        public function _edit()
        {
            $category = [];
            foreach ($this->input->post('checkCategory') as $key => $value) {
                $category[] = (string)$key;
            }
            $this->db->where('id', $this->input->post('id'));
            if ($this->db->update('_learn', [
              'name'      => $this->input->post('name'),
              'comment'   => $this->input->post('comment'),
              'category'  => json_encode($category),
              'point'     => $this->input->post('point'),
              'price'     => $this->input->post('price')
            ])) {
                return true;
            }

            return false;
        }
    }
