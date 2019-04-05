<div class="be-wrapper be-login">
    <div class="be-content">
        <div class="main-content container-fluid">
            <div class="splash-container">
                <div class="panel panel-default panel-border-color panel-border-color-primary">
                    <div class="panel-heading">
                        <img src="<?= base_url('public/admin/img/logo-xx.png') ?>" alt="logo" width="102" height="27" class="logo-img">
                        <p class="splash-description">رمز عبور جدید خود را وارد نمایید.</p>
                    </div>
                    <div class="panel-body">
                        <form action="<?= base_url('admin/resetPassword') ?>" method="post" data-parsley-validate>
                            <div class="form-group">
                                <input name="token" type="hidden" value="<?= $token; ?>">
                                <input id="mail" name="mail" type="txet" value="<?= $userMail; ?>" class="form-control" style="text-align: left;" disabled>
                            </div>
                            <div class="form-group">
                                <input id="password" name="password" type="password" placeholder="رمز عبور" class="form-control" data-parsley-minlength="4" autocomplete="off"
                                       required="">
                            </div>
                            <div class="form-group">
                                <input id="password2" type="password" placeholder="تکرار رمز عبور" class="form-control" data-parsley-equalto="#password" autocomplete="off"
                                       required="">
                            </div>
                            <div class="form-group login-submit">
                                <button data-dismiss="modal" type="submit" class="btn btn-primary btn-xl">ذخیره رمز عبور جدید</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="splash-footer"><span>ورود به سیستم از <a href="<?= base_url('admin/login') ?>">اینجا</a></span></div>
            </div>
        </div>
    </div>
</div>