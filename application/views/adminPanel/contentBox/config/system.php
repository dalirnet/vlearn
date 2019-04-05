<div class="col-md-12">
    <? if ($this->pageAlert['success']) : ?>
        <div role="alert" class="alert alert-success alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-check"></span><strong>موفق!</strong> تنظیمات با موفقیت ذخیره شد.
        </div>
    <? endif; ?>
    <? if ($this->pageAlert['error']) : ?>
        <div role="alert" class="alert alert-warning alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> خطا در ذخیره تنظیمات.
        </div>
    <? endif; ?>
    <div class="panel panel-default panel-border-color panel-border-color-primary">
        <div class="panel-heading panel-heading-divider">تنظیمات ویدئو<span class="panel-subtitle">تنظیمات سایت Qmery</span></div>
        <div class="panel-body md-pl-30 md-pr-30">
            <form action="<?= $this->_adminLink('config/save'); ?>" method="post" data-parsley-validate>
                <div class="row xs-pt-10">
                    <div class="col-md-4 form-group">
                        <label>توکن سایت Qmery</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-lock"></i>
                            </span>
                            <input type="text" name="qmeryToken" placeholder="Qmery Token" value="<?= $this->load->data['qmeryToken']; ?>" class="form-control text-left" style="direction: ltr;"
                                   autocomplete="off">
                        </div>
                    </div>
                </div>
                <div class="row xs-pt-15 xs-mt-50">
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