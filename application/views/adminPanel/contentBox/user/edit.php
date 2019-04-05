<div class="col-md-12">
    <? if ($this->pageAlert['success']) : ?>
        <div role="alert" class="alert alert-success alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-check"></span><strong>موفق!</strong> اطلاعات کاربر با موفقیت ویرایش شد.
        </div>
    <? endif; ?>
    <? if ($this->pageAlert['error']) : ?>
        <div role="alert" class="alert alert-warning alert-dismissible">
            <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
            <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> تلفن همراه وارد شده تکراری میباشد.
        </div>
    <? endif; ?>
    <div class="panel panel-default panel-border-color panel-border-color-primary">
        <div class="panel-heading panel-heading-divider">ویرایش کاربر<span class="panel-subtitle">از طریق فرم زیر، میتوانید نسبت به ویرایش اطلاعات کاربر در هر سه سطح دسترسی اقدام کنید.</span></div>
        <div class="panel-body md-pl-30 md-pr-30">
            <form action="<?= $this->_adminLink('user/edit'); ?>" method="post" data-parsley-validate>
                <div class="row xs-pt-10">
                    <div class="col-md-6 form-group">
                        <label>پست الکترونیک</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-email"></i>
                            </span>
                            <input type="text" name="mail" placeholder="@" value="<?= $this->load->data['mail']; ?>" class="form-control text-left" style="direction: ltr;"
                                   autocomplete="off" readonly>
                            <input type="hidden" name="id" value="<?= $this->load->data['id']; ?>">
                        </div>
                        <div class="col-xs-12">
                            <h5 class="text-danger" style="line-height: 32px;margin: 5px 0px;">غیر قابل تفییر</h5>
                        </div>
                    </div>
                    <div class="col-md-2 form-group">
                        <label>نام</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-account-box"></i>
                            </span>
                            <input type="text" name="firstName" placeholder="نام" value="<?= $this->load->data['firstName']; ?>" class="form-control" autocomplete="off"
                                   required="">
                        </div>
                    </div>
                    <div class="col-md-4 form-group">
                        <label>نام خانوادگی</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-account-box"></i>
                            </span>
                            <input type="text" name="lastName" placeholder="نام خانوادگی" value="<?= $this->load->data['lastName']; ?>"
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
                            <input type="text" name="phone" placeholder="تلفن همراه" value="<?= $this->load->data['phone']; ?>" class="form-control" autocomplete="off"
                                   required="">
                        </div>
                        <div class="col-xs-12">
                            <h5 class="text-danger" style="line-height: 32px;margin: 5px 0px;">این مقدار نباید در دیتابیس موجود باشد</h5>
                        </div>
                    </div>
                    <div class="col-md-3 form-group">
                        <label>سطح دسترسی</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-card"></i>
                            </span>
                            <select class="form-control" name="groupAccess" autocomplete="off" required="">
                                <option value="2"<?= ($this->load->data['groupAccess'] == 2 ? ' selected' : '') ?>>مدیریت</option>
                                <option value="1"<?= ($this->load->data['groupAccess'] == 1 ? ' selected' : '') ?>>نویسنده</option>
                                <option value="0"<?= ($this->load->data['groupAccess'] == 0 ? ' selected' : '') ?>>کاربر سایت</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 form-group">
                        <label>رمز عبور جدید</label>
                        <div class="input-group">
                            <span class="input-group-addon xs-pt-15">
                                <i class="icon mdi mdi-lock"></i>
                            </span>
                            <input type="text" name="password" placeholder="رمز عبور جدید" value=""
                                   class="form-control text-right" style="direction: ltr;">
                        </div>
                        <div class="col-xs-12">
                            <h5 class="text-success" style="line-height: 32px;margin: 5px 0px;">در صورتی که مقداری وارد نشود رمز عبور تغییر نخواهد کرد</h5>
                        </div>
                    </div>
                </div>
                <div class="row xs-pt-15">
                    <div class="col-md-12 text-left">
                        <button type="reset" class="btn btn-space btn-default btn-lg">انصراف</button>
                        <button type="submit" class="btn btn-space btn-primary btn-lg">
                            <span>ویرایش</span>
                            <i class="icon icon-right mdi mdi-check"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>