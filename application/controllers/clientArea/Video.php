<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Video extends MY_Controller
    {
        public function freeVideo($id = 0)
        {
            if ($id> 0) {
                $this->_loadFreeVideoItem($id);
            } else {
                $this->_loadFreeVideoList();
            }
        }

        public function _loadFreeVideoList()
        {
            $this->load->clientView('video/freeVideo/list');
        }

        public function _loadFreeVideoItem($id)
        {
            $this->load->clientView('video/freeVideo/item');
        }
    }
