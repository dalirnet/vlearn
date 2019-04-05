<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Landing extends MY_Controller
    {
        public function load($name)
        {
            $path = VIEWPATH.implode(DIRECTORY_SEPARATOR, ['landing','contentBox']);
            if (file_exists($path.DIRECTORY_SEPARATOR.$name.'.php')) {
                $this->load->data['fileName'] = $name;
                $this->load->_addScript('OB.helper.setContinerHeight();');
                $this->load->landingView($name);
            } else {
                $this->_show_404();
            }
        }
    }
