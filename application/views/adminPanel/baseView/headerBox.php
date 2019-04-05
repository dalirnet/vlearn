<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="<?= $description; ?>">
<meta name="author" content="AmirRezaDalir">
<link rel="shortcut icon" href="<?= base_url('public/admin/img/logo-fav.png') ?>">
<title><?= $title; ?></title>
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
<?= implode("\n", array_map(function ($index) {
    return '<link rel="stylesheet" type="text/css" href="' . $index . '"/>';
}, $srcStyle)) . (!empty($style) ? "\n" .'<style>' . implode("\n", $style) . '</style>' : '') ?>
</head>
<body<?= (!empty($bodyClass) ? ' class="' . implode(' ', $bodyClass) . '"' : '') ?>>