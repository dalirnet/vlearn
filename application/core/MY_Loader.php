<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class MY_Loader extends CI_Loader
    {
        public $style = [];
        public $script = [];
        public $srcStyle = [];
        public $srcScript = [];
        public $bodyClass = [];
        public $description = '';
        public $title = 'vLearn';
        public $loadDefault = false;
        public $adminPanelTitle = '';
        public $activeMenu = 0;
        public $data = [];

        public function __construct()
        {
            parent::__construct();
        }

        public function module($module, $data = [])
        {
            return $this->view('clientArea/contentBox/module/'.$module, $data, true);
        }

        public function _addQueryString($parameter)
        {
            $queryString = [];
            foreach ($parameter as $key => $param) {
                $param = explode('?', $param);
                $parameter[$key] = array_shift($param);
            }

            return '?' . http_build_query($parameter);
        }

        public function _addTitle($title, $prefix = true)
        {
            $this->title = ($prefix ? $this->title . ' - ' . $title : $title);

            return $this;
        }

        public function _addDescription($description)
        {
            $this->description = $description;

            return $this;
        }

        public function _addDefaultHead($type = 'admin')
        {
            if ($this->loadDefault) {
                return;
            }
            if ($type == 'admin') {
                // add default src style
                $this->_addSrcStyle('public/admin/lib/perfect-scrollbar/css/perfect-scrollbar.min.css');
                $this->_addSrcStyle('public/admin/lib/material-design-icons/css/material-design-iconic-font.min.css');
                $this->_addSrcStyle('public/admin/css/style.css');
                $this->_addSrcStyle('public/admin/css/custom.css');
                // add default src script
                $this->_addSrcScript('public/admin/lib/jquery/jquery.min.js');
                $this->_addSrcScript('public/admin/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js');
                $this->_addSrcScript('public/admin/lib/bootstrap/dist/js/bootstrap.min.js');
                $this->_addSrcScript('public/admin/js/main.js');
                $this->_addSrcScript('public/admin/lib/parsley/parsley.min.js');
                $this->_addSrcScript('public/admin/js/action.js');
            } else {
                // add default src style
                $this->_addSrcStyle('public/client/lib/bootstrap/dist/css/bootstrap.min.css');
                $this->_addSrcStyle('public/client/css/space.css');
                $this->_addSrcStyle('public/client/css/style.css');
                $this->_addSrcStyle('public/client/css/font.css');
                // add default src script
                $this->_addSrcScript('public/client/lib/jquery/dist/jquery.min.js');
                $this->_addSrcScript('public/client/lib/bootstrap/dist/js/bootstrap.min.js');
                $this->_addSrcScript('public/client/js/action.js');
            }
            $this->loadDefault = true;

            return $this;
        }

        public function _addBodyClass($class = [])
        {
            if (is_array($class)) {
                $this->bodyClass = array_merge($this->bodyClass, $class);
            } else {
                $this->bodyClass[] = $class;
            }

            return $this;
        }

        public function _addStyle($style)
        {
            $this->style[] = $style;

            return $this;
        }

        public function _addSrcStyle($file)
        {
            $this->srcStyle[] = base_url($file);

            return $this;
        }

        public function _addScript($script)
        {
            $this->script[] = $script;

            return $this;
        }

        public function _addSrcScript($file)
        {
            $this->srcScript[] = base_url($file);

            return $this;
        }

        public function adminView($view, $vars = [])
        {
            $this->_addDefaultHead();
            $this->_addHeaderBox('adminPanel');
            $this->view($view, $vars);
            $this->_addFooterBox('adminPanel');
        }

        public function clientView($view, $vars = [])
        {
            $this->_addDefaultHead('client');
            $this->_addHeaderBox('clientArea');
            $this->view('clientArea/contentBox/'.$view, $vars);
            $this->_addFooterBox('clientArea');
        }

        public function landingView($view, $vars = [])
        {
            $this->bodyClass[] = 'show-scroll-bar';
            $this->_addDefaultHead('client');
            $this->_addHeaderBox('landing');
            $this->view('landing/contentBox/'.$view, $vars);
            $this->_addFooterBox('landing');
        }


        public function _addHeaderBox($path)
        {
            $this->view($path.'/baseView/headerBox', [
                'title'       => $this->title,
                'description' => $this->description,
                'bodyClass'   => $this->bodyClass,
                'srcStyle'    => $this->srcStyle,
                'style'       => $this->style,
            ]);
        }

        public function _addFooterBox($path)
        {
            $this->view($path.'/baseView/footerBox', [
                'srcScript' => $this->srcScript,
                'script'    => $this->script
            ]);
        }

        public function activeMenu($id)
        {
            $this->activeMenu = $id;

            return $this;
        }

        public function adminPanelView($view, $title = '', $activeMenu = 0, $vars = [])
        {
            if ($activeMenu > 0) {
                $this->activeMenu($activeMenu);
            }
            $this->adminPanelTitle = $title;
            $this->_addDefaultHead();
            $this->_addTitle($title);
            $this->_addHeaderBox('adminPanel');
            $this->view('adminPanel/adminPanelHeader');
            $this->view('adminPanel/contentBox/' . $view, $vars);
            $this->view('adminPanel/adminPanelFooter');
            $this->_addFooterBox('adminPanel');
        }

        public function _adminLink($link, $isAction = true)
        {
            return base_url('admin/' . ($isAction ? 'action/' : '') . $link);
        }
    }
