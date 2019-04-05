<?= $this->module('topSlider') ?>
<?= $this->module('service') ?>
<div id="portfolio" class="text-center">
  <h2 class="slide">ویدئو های رایگان ولی حرفه ای!</h2>
  <h4 class="slide">توضیحات بخش ویدئو های رایگان</h4>
  <?= $this->module('freeVideoList') ?>
</div>
<div class="jumbotron about-box text-center slideanim">
  <div id="about" class="carousel text-center" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="item active jumpanim">
        <h2>درباره فرهاد</h2>
        <p>
          <span>فرهاد هستم</span>
          <br />
          <span> توضیحات بیشتر را در اینجا بخوانید!</span>
        </p>
        <a class="btn btn-info">بیشتر بخوانید</a>
      </div>
    </div>
  </div>
</div>
<?= $this->module('commentList', ['commentTitle' => 'نظر اعضای سایت']) ?>
<div class="container-fluid free-signup">
  <div class="container">
    <div class="cell slideanim">
      <h3>شروع کنید</h3>
      <p>
        اگر نیازمند فراگیری تکنیک های خاص و به روز در زمینه گرافیک هستید، هم اکنون شروع کنید.
      </p>
    </div>
    <div class="cell">
      <a href="#" class="btn btn-danger jumpanim">ثبت نام رایگان</a>
    </div>
  </div>
</div>
