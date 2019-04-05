<?php

    function persianNumber($value)
    {
        $number = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9'
        ];
        $persian = [
            '۰',
            '۱',
            '۲',
            '۳',
            '۴',
            '۵',
            '۶',
            '۷',
            '۸',
            '۹'
        ];

        return str_replace($number, $persian, $value);
    }

    function latinNumber($value)
    {
        $number = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9'
        ];
        $persian = [
            '۰',
            '۱',
            '۲',
            '۳',
            '۴',
            '۵',
            '۶',
            '۷',
            '۸',
            '۹'
        ];

        return str_replace($persian, $number, $value);
    }

    function convertTime($time)
    {
        if ($time < 10) {
            return 'لحظاتی';
        } else if ($time < 60) {
            return $time . ' ثانیه';
        } else if ($time < 3600) {
            return round($time / 60) . ' دقیقه';
        } else if ($time < 86400) {
            return round($time / 3600) . ' ساعت';
        } else if ($time < 604800) {
            return round($time / 86400) . ' روز';
        } else if ($time < 2592000) {
            return round($time / 604800) . ' هفته';
        } else if ($time < 31536000) {
            return round($time / 2592000) . ' ماه';
        } else if ($time < 94608000) {
            return round($time / 31536000) . ' سال';
        } else {
            return ' مدت زیادی';
        }
    }

    function alphabetNumber($number)
    {
        $numbers = [
            'صفر',
            'یک',
            'دو',
            'سه',
            'چهار',
            'پنج',
            'شش',
            'هفت',
            'هشت',
            'نه',
            'ده',
            'یازده',
            'دوازده',
            'سیزده',
            'چهارده',
            'پانزده',
            'شانزده',
            'هفده',
            'هجده',
            'نوزده',
            'بیست'
        ];

        return isset($numbers[$number]) ? $numbers[$number] : $number;
    }

    function randomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomString;
    }

    function createRandomToken($len = 3)
    {
        $str = randomString($len);

        return substr(md5($str), 0, $len) . $str;
    }

    function convertSecond($second)
    {
        if ($second > 3600) {
            return str_pad(intval($second / 3600), 2, '0', STR_PAD_LEFT) . ':' . convertSecond($second % 3600);
        } else {
            return str_pad(intval($second / 60), 2, '0', STR_PAD_LEFT) . ':' . str_pad($second % 60, 2, '0', STR_PAD_LEFT);
        }
    }

    function QmeryVideo($file)
    {
        $out = '<iframe src="about:blank" data-src="http://www.qmery.com/v/' . $file . '?lan=fa&mobile=false" ';
        $out .= 'allowtransparency="true" ';
        $out .= 'scrolling="no" ';
        $out .= 'name="qmery_embed_video" ';
        $out .= 'mozallowfullscreen="" webkitallowfullscreen="" oallowfullscreen="" msallowfullscreen=""';
        $out .= 'frameborder="0"';
        $out .= '></iframe>';

        return $out;
    }
