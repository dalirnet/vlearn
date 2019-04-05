<div class="col-md-12">
    <? if ($this->pageAlert['success']) : ?>
        <div role="alert" class="alert alert-success alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-check"></span><strong>موفق!</strong> کاربر با موفقیت ذخیره شد.
        </div>
    <? endif; ?>
    <? if ($this->pageAlert['error']) : ?>
        <div role="alert" class="alert alert-warning alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> پست الکترونیک وارد شده تکراری میباشد.
        </div>
    <? endif; ?>
    <div class="panel panel-default panel-border-color panel-border-color-primary">
        <div class="panel-heading panel-heading-divider">کاربر جدید<span class="panel-subtitle">از طریق فرم زیر، میتوانید نسبت به ثبت کاربر جدید در هر سه سطح دسترسی اقدام کنید.</span></div>
        <div class="panel-body md-pl-30 md-pr-30">
            <form action="<?= $this->_adminLink('user/new'); ?>" method="post" data-parsley-validate>
                <div class="row xs-pt-10">
                    <div class="col-md-6 form-group">
                        <label>پست الکترونیک</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-email"></i>
                            </span>
                            <input type="email" name="mail" placeholder="@" value="<?= ($this->pageAlert['error'] ? $this->input->post('mail') : '') ?>" class="form-control text-left" style="direction: ltr;"
                                   autocomplete="off" required="">
                        </div>
                    </div>
                    <div class="col-md-2 form-group">
                        <label>نام</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-account-box"></i>
                            </span>
                            <input type="text" name="firstName" placeholder="نام" value="<?= ($this->pageAlert['error'] ? $this->input->post('firstName') : '') ?>" class="form-control" autocomplete="off"
                                   required="">
                        </div>
                    </div>
                    <div class="col-md-4 form-group">
                        <label>نام خانوادگی</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-account-box"></i>
                            </span>
                            <input type="text" name="lastName" placeholder="نام خانوادگی" value="<?= ($this->pageAlert['error'] ? $this->input->post('lastName') : '') ?>"
                                   class="form-control"
                                   autocomplete="off"
                                   required="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 form-group">
                        <label>تلفن همراه</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-smartphone-android"></i>
                            </span>
                            <input type="text" name="phone" placeholder="تلفن همراه" value="<?= ($this->pageAlert['error'] ? $this->input->post('phone') : '') ?>" class="form-control" autocomplete="off"
                                   required="">
                        </div>
                    </div>
                    <div class="col-md-3 form-group">
                        <label>سطح دسترسی</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-card"></i>
                            </span>
                            <select class="form-control" name="groupAccess" autocomplete="off" required="">
                                <option value="2"<?= (($this->pageAlert['error'] and ($this->input->post('groupAccess') == 2)) ? ' selected' : '') ?>>مدیریت</option>
                                <option value="1"<?= (($this->pageAlert['error'] and ($this->input->post('groupAccess') == 1)) ? ' selected' : '') ?>>نویسنده</option>
                                <option value="0"<?= (($this->pageAlert['error'] and ($this->input->post('groupAccess') == 0)) ? ' selected' : '') ?>>کاربر سایت</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 form-group">
                        <label>رمز عبور</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-lock"></i>
                            </span>
                            <input type="text" name="password" placeholder="رمز عبور" value="<?= ($this->pageAlert['error'] ? $this->input->post('password') : rand(111, 999) . substr(md5(time()), 15, 3)) ?>"
                                   class="form-control text-left" style="direction: ltr;" readonly>
                        </div>
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