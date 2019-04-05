<div class="col-md-12">
    <?php if ($this->pageAlert['success']) : ?>
        <div role="alert" class="alert alert-success alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-check"></span><strong>موفق!</strong> آموزش با موفقیت ذخیره شد.
        </div>
    <?php endif; ?>
    <?php if ($this->pageAlert['error']) : ?>
        <div role="alert" class="alert alert-warning alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> خطا در فرایند ثبت آموزش.
        </div>
    <?php endif; ?>
    <div class="panel panel-default panel-border-color panel-border-color-primary">
        <div class="panel-heading panel-heading-divider">آموزش جدید<span class="panel-subtitle">از طریق فرم زیر، میتوانید نسبت به ثبت آموزش جدید اقدام کنید.</span></div>
        <div class="panel-body md-pl-30 md-pr-30">
            <form action="<?= $this->_adminLink('learn/new'); ?>" method="post" data-parsley-validate>
                <div class="row xs-pt-10">
                    <div class="col-md-8 form-group">
                        <label>نام آموزش</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-videocam"></i>
                            </span>
                            <input type="text" name="name" placeholder="نام آموزش" value="" class="form-control" autocomplete="off" required="">
                        </div>
                    </div>
                    <div class="col-md-4 form-group">
                        <label>قیمت دوره ی آموزش</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-money"></i>
                            </span>
                            <input type="text" name="price" placeholder="قیمت به تومان" value="" class="form-control" autocomplete="off" required="">
                        </div>
                    </div>
                </div>
                <div class="row xs-pt-10">
                    <div class="col-md-6 form-group">
                        <label>توضیحات آموزش</label>
                        <textarea class="form-control" name="comment" placeholder="توضیحات"></textarea>
                    </div>
                    <div class="col-md-6 form-group">
                        <label>نکات کلیدی</label>
                        <textarea class="form-control" name="point" placeholder="نکات کلیدی آموزش"></textarea>
                        <div class="col-xs-12">
                            <h5 class="text-success" style="line-height: 32px;margin: 5px 0px;">هر نکته در یک خط با استفاده از کلید [Enter]</h5>
                        </div>
                    </div>
                </div>
                <div class="row xs-pt-15">
                    <div class="col-md-12 form-group">
                        <p class="xs-m-0">
                            <label>دسته بندی</label>
                        </p>
                        <?php for ($i = 0;$i <= 9;$i++) : ?>
                          <div class="be-checkbox inline">
                              <input id="checkCategory-<?= $i ?>" <?= ($i == 0 ? 'checked="" ': '') ?>type="checkbox" name="checkCategory[<?= $i ?>]">
                              <label for="checkCategory-<?= $i ?>"><?= $this->lang->line('learnCategory_'.$i) ?></label>
                          </div>
                        <?php endfor; ?>
                    </div>
                </div>

                <div class="row xs-pt-15">
                    <div class="col-md-12 text-left">
                        <button type="reset" class="btn btn-space btn-default btn-lg">انصراف</button>
                        <button type="submit" class="btn btn-space btn-primary btn-lg">
                            <span>ذخیره</span>
                            <i class="icon icon-right mdi mdi-check"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
