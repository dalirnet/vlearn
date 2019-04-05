<?php
  $demoData = [
    [
      'userMail' => 'dalirnet@gmail.com',
      'userName' => 'امیر رضا دلیر',
      'source' => 'aparat.com',
      'comment' => 'محتوای آموزش ها به خوبی منتقل میشه همراه با اینکه سطح بندی آموزش ها نیز مناسب و دقیق هستند.تشکر میکنم از فرهاد عزیز بابت این آموزش ها'
    ],
    [
      'userMail' => 'dalirnet@gmail.com',
      'userName' => 'امیر رضا دلیر',
      'comment' => 'محتوای آموزش ها به خوبی منتقل میشه همراه با اینکه سطح بندی آموزش ها نیز مناسب و دقیق هستند.تشکر میکنم از فرهاد عزیز بابت این آموزش ها'
    ]
  ];
  if (!isset($commentTitle)) {
      $commentTitle = $this->lang->line('comment-box-default-title');
  }
  if (!isset($data)) {
      $data = $demoData;
  }
?>
<div class="comment-box text-center slideanim">
  <h2 class="xs-mt-50"><?= $commentTitle ?></h2>
  <div id="commentSlider" class="carousel slideanim text-center" data-ride="carousel">
    <ol class="carousel-indicators">
      <?php for ($i = 0;$i < count($data);$i++) : ?>
        <li data-target="#commentSlider" data-slide-to="<?= $i ?>" <?= ($i == 0 ? 'class="active"':'')?>></li>
      <?php endfor; ?>
    </ol>
    <div class="carousel-inner" role="listbox">
      <?php foreach ($data as $key => $value) : ?>
        <div class="item<?= ($key == 0 ? ' active' :'') ?>">
          <div class="row">
            <div class="avatar">
              <img src="http://2.gravatar.com/avatar/<?= md5($value['userMail']) ?>?s=128&r=g" />
            </div>
          </div>
          <div class="row">
            <p><?= $value['comment'] ?></p>
          </div>
          <div class="xs-mb-50<?= (array_key_exists('source', $value) ? '':' user-name') ?>">
            <span><?= $value['userName'] ?></span>
            <?php if (array_key_exists('source', $value)) : ?>
              <span><?= $this->lang->line('comment-box-text-from') ?></span>
              <a href="<?= $this->lang->line('source-link-'.$value['source']) ?>"><?= $this->lang->line('source-title-'.$value['source']) ?></a>
            <?php endif; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
  <a class="left carousel-control hidden-xs" href="#commentSlider" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  </a>
  <a class="right carousel-control hidden-xs" href="#commentSlider" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  </a>
</div>
