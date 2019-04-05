<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Send
    {
        public $CI;
        public $config = [
            'email'      => [
                'protocol'  => 'smtp',
                'smtp_host' => 'mail.dalir.me',
                'smtp_user' => 'vlearn@dalir.me',
                'smtp_pass' => 'vLearn2229550',
                'mailtype'  => 'html',
            ],
            'emailTitle' => 'vLearn System'
        ];

        public function __construct()
        {
            $this->CI = &get_instance();
        }

        public function email($to, $title, $file, $data)
        {
            $this->CI->load->library('email');
            $this->CI->email->initialize($this->config['email']);
            $this->CI->email->from($this->config['email']['smtp_user'], $this->config['emailTitle'])->subject($this->config['emailTitle'] . ', ' . $title);
            $content = $this->CI->load->view('mailTemplate/baseView/headerBox', [], true);
            $content .= $this->CI->load->view('mailTemplate/' . $file, $data, true);
            $content .= $this->CI->load->view('mailTemplate/baseView/footerBox', [], true);
            $this->CI->email->message($content)->to($to);
            return $this->CI->email->send();
        }
    }


