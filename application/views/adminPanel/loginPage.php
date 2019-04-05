<div class="be-wrapper be-login">
    <div class="be-content">
        <div class="main-content container-fluid">
            <div class="splash-container">
                <? if ($this->pageAlert['success']) : ?>
                    <div role="alert" class="alert alert-success alert-dismissible">
                        <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                        <span class="icon mdi mdi-check"></span><strong>موفق!</strong> شما با موفقیت از سیستم خارج شدید.
                    </div>
                <? endif; ?>
                <? if ($this->pageAlert['success_type2']) : ?>
                    <div role="alert" class="alert alert-success alert-dismissible">
                        <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                        <span class="icon mdi mdi-check"></span><strong>موفق!</strong> رمز عبور شما با موفقیت ذخیره شد.
                    </div>
                <? endif; ?>
                <? if ($this->pageAlert['error']) : ?>
                    <div role="alert" class="alert alert-warning alert-dismissible">
                        <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                        <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> اطلاعات وارد شده صحیح نیست.
                    </div>
                <? endif; ?>
                <div class="panel panel-default panel-border-color panel-border-color-primary">
                    <div class="panel-heading">
                        <img src="<?= base_url('public/admin/img/logo-xx.png') ?>" alt="logo" width="102" height="27" class="logo-img">
                        <p class="splash-description">لطفا اطلاعات کاربری خود را وارد نمایید.</p>
                    </div>
                    <div class="panel-body">
                        <form action="<?= base_url('admin/login') ?>" method="post" data-parsley-validate>
                            <div class="form-group">
                                <input id="mail" name="mail" type="email" placeholder="پست الکترونیک" autocomplete="off" class="form-control" required="">
                            </div>
                            <div class="form-group">
                                <input id="password" name="password" type="password" placeholder="رمز عبور" class="form-control" data-parsley-minlength="4" required="">
                            </div>
                            <div class="form-group login-submit">
                                <button data-dismiss="modal" type="submit" class="btn btn-primary btn-xl">ورود</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="splash-footer"><a href="<?= base_url('admin/forgotPassword') ?>">فراموشی رمز عبور؟</a></div>
            </div>
        </div>
    </div>
</div>