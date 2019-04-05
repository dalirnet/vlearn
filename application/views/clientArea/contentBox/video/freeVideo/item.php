<div id="video-box">
  <div class="container">
    <div class="width-cn">
      <div class="inner-box">
        <img src="<?= base_url('public/client/img/video/1.jpg') ?>" />
        <iframe src="#http://www.qmery.com/v/2WXb5BD9AV?lan=fa&mobile=false" allowtransparency="true" scrolling="no" name="qmery_embed_video" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" oallowfullscreen="" msallowfullscreen="" width="100%" height="100%" frameborder="0"></iframe>
        <span class="br-action br-lt jump"></span>
        <span class="br-action br-lb jump"></span>
        <span class="br-action br-rt jump"></span>
        <span class="br-action br-rb jump"></span>
      </div>
      <h3>عنوان ویدئوی آموزشی</h3>
      <a href="#" class="btn btn-danger">دانلود فایل های تمرینی</a>
      <p>
        <span>متن توضیحات این ویدئو، درباره این ویدئو، در این ویدئو چه مورادی را خواهید آموخت!</span>
        <span>متن توضیحات این ویدئو، درباره این ویدئو، در این ویدئو چه مورادی را خواهید آموخت!</span>
        <span>متن توضیحات این ویدئو، درباره این ویدئو، در این ویدئو چه مورادی را خواهید آموخت!</span>
        <span>متن توضیحات این ویدئو، درباره این ویدئو، در این ویدئو چه مورادی را خواهید آموخت!</span>
        <span>متن توضیحات این ویدئو، درباره این ویدئو، در این ویدئو چه مورادی را خواهید آموخت!</span>
        <span>متن توضیحات این ویدئو، درباره این ویدئو، در این ویدئو چه مورادی را خواهید آموخت!</span>
      </p>
      <div class="other-video">
        <h3 class="slideanim">ویدئو های آموزشی حرفه ای</h3>
        <?= $this->module('suggestItem') ?>
      </div>
    </div>
    <?= $this->module('commentList', ['commentTitle' => 'نظر کاربران در مورد این ویدئو']) ?>
    <div class="width-cn">
        <?= $this->module('userComment') ?>
    </div>
  </div>
</div>
