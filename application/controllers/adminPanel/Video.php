<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class Video extends MY_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->_userLogin();
            $this->load->activeMenu(2);
            $this->load->model('videoMd');
        }

        public function load_()
        {
            $this->load->data['file'] = [];
            foreach (directory_map(VIDEOPATH, 1) as $file) {
                $fileInfo = get_file_info(VIDEOPATH . $file);
                $check = $this->db->get_where('_video', ['name' => $file])->result_array();
                if (empty($check)) {
                    $this->load->data['file'][] = [
                        'name' => $file,
                        'size' => $fileInfo['size']
                    ];
                }
            }
            if (!empty($this->load->data['file'])) {
                $config = $this->db->get_where('_config', ['name' => 'qmeryToken'])->row_array();
                $this->load->library('curl');
                $this->curl->get($this->curl->Qmery('groups', $config['value']));
                $this->load->data['QmeryGroup'] = json_decode($this->curl->rawResponse, true);
            }
            $this->load->adminPanelView('video/load', 'پردازش ویدئو');
        }

        public function list_()
        {
            $this->load->data['list'] = $this->videoMd->_view();
            $this->load->data['leranItem'] = $this->db->select('id,name')->order_by('insertTime')->get('_learn')->result_array();
            $this->load->adminPanelView('video/list', 'لیست ویدئو ها');
        }

        public function new_()
        {
            $this->load->_addDefaultHead();
            $this->load->_addSrcStyle('public/admin/lib/dropzone/dist/dropzone.css');
            $this->load->_addSrcScript('public/admin/lib/dropzone/dist/dropzone.js');
            $this->load->_addScript('Dropzone.options.myAwesomeDropzone = {acceptedFiles : ".mp4,.mkv,.flv,.avi,.mov"};');
            $this->load->adminPanelView('video/new', 'بارگذاری ویدئو');
        }

        public function edit_()
        {
            $this->db->where('QmeryHash', $this->input->post('id'));
            $update = [
                'free'    => $this->input->post('free'),
                'learnId' => $this->input->post('learn'),
                'title'   => $this->input->post('title'),
                'comment' => $this->input->post('comment')
            ];
            if ($this->db->update('_video', $update)) {
                echo 'ok';
            }
        }

        public function upload_()
        {
            $config['upload_path'] = VIDEOPATH;
            $config['allowed_types'] = 'mp4|mkv|flv|avi|mov';
            $this->load->library('upload', $config);
            if ($this->upload->do_upload('file')) {
                echo 'ok';
            } else {
                echo $this->upload->display_errors($open = '', $close='');
            }
        }

        public function send_()
        {
            $startTime = time();
            $this->load->library('curl');
            $file = VIDEOPATH . base64_decode($this->uri->segment(5));
            $check = $this->db->get_where('_video', ['name' => base64_decode($this->uri->segment(5))])->result_array();
            if (empty($check)) {
                $fileInfo = get_file_info($file);
                $config = $this->db->get_where('_config', ['name' => 'qmeryToken'])->row_array();
                $this->curl->post($this->curl->Qmery('videos', $config['value']), [
                    'video'        => '@' . $file,
                    'title'        => base64_decode($this->uri->segment(5)),
                    'callback_url' => base_url('callBack/QmeryDone/' . createRandomToken()),
                    'group_id'     => $this->uri->segment(6)
                ]);
                $data = [
                    'name'        => $this->curl->response->title,
                    'QmeryId'     => $this->curl->response->id,
                    'QmeryHash'   => $this->curl->response->hash_id,
                    'QmeryGroup'  => $this->curl->response->group_id,
                    'size'        => $fileInfo['size'],
                    'startUpload' => $startTime,
                    'endUpload'   => time()
                ];
                $this->db->insert('_video', $data);
                echo json_encode(['id' => $data['QmeryHash']]);
            }
        }

        public function status_()
        {
            $this->load->library('curl');
            $config = $this->db->get_where('_config', ['name' => 'qmeryToken'])->row_array();
            $this->curl->get($this->curl->Qmery('videos/' . $this->uri->segment(5), $config['value']));
            echo json_encode(['progress' => floor($this->curl->response->progress * 100)]);
        }
    }
