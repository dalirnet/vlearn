<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class CallBack extends CI_Controller
    {
        public function load($action = '')
        {
            switch ($action) {
                case 'QmeryDone':
                    $this->_QmeryVideoDone();
                    break;
            }
        }

        public function _QmeryVideoDone()
        {
            $videoId = $this->input->post('videoId');
            $encoderCallback = $this->input->post('encoderCallback');
            /*
              in localhost manual set
              [START]
            */
            $sampleUrl = 'http://vlearn.local/callBack/QmeryDone/a92DEY';
            $videoId = 132031;
            $encoderCallback = 'encodeIsDone';
            /*
              [END]
            */
            if (is_numeric($videoId)) {
                if ($encoderCallback == 'encodeIsDone') {
                    $check = $this->db->get_where('_video', ['QmeryId' => $videoId])->row_array();
                    if (!empty($check)) {
                        if ($check['endEncode'] == '0') {
                            $this->load->library('curl');
                            $config = $this->db->get_where('_config', ['name' => 'qmeryToken'])->row_array();
                            $this->curl->get($this->curl->Qmery('videos/' . $check['QmeryHash'], $config['value']));
                            foreach ($this->curl->response->thumbnail as $image) {
                                $this->db->insert('_video_screenShot', [
                                    'videoId' => $videoId,
                                    'image'   => $image
                                ]);
                            }
                            foreach ($this->curl->response->link as $link) {
                                $this->db->insert('_video_link', [
                                    'videoId' => $videoId,
                                    'format'  => $link->format,
                                    'quality' => $link->quality,
                                    'link'    => $link->link,
                                ]);
                            }
                            $this->db->where('QmeryId', $videoId)->update('_video', ['endEncode' => time(), 'time' => $this->curl->response->length]);
                        }
                    }
                }
            }
        }
    }
