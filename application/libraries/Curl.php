<?php

    include 'Curl/Curl.php';
    include 'Curl/ArrayUtil.php';
    include 'Curl/CaseInsensitiveArray.php';


    class Curl extends \Curl\Curl
    {
        public $addressList = [
            'qmery' => 'http://api.qmery.com/v1/{{ACTION}}.json?api_token={{TOKEN}}'
        ];

        public function __construct()
        {
            parent::__construct();
        }

        public function Qmery($action, $token)
        {
            return str_replace(['{{ACTION}}', '{{TOKEN}}'], [$action, $token], $this->addressList['qmery']);
        }
    }
