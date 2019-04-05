<ul class="nav navbar-nav navbar-right be-user-nav">
    <li class="dropdown">
        <a href="javascript:void(0);" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle">
            <img src="http://gravatar.com/avatar/<?= md5(strtolower($this->session->userMail)); ?>?s=64&r=g" width="32" height="32" alt="Avatar">
            <span class="user-name"><?= $this->session->userMail; ?></span>
        </a>
        <ul role="menu" class="dropdown-menu">
            <li>
                <div class="user-info">
                    <div class="user-name"><?= $this->session->userFirstName; ?></div>
                    <div class="user-position online">
                        <span style="direction: ltr;"><?= persianNumber(convertTime(time() - $this->session->userLastLogin)); ?></span>
                        <span> پیش</span>
                    </div>
                </div>
            </li>
            <li>
                <a href="<?= base_url(); ?>" target="_blank">
                    <span class="icon mdi mdi-globe"></span>
                    <span> نمایش سایت</span>
                </a>
            </li>
            <li>
                <a href="<?= $this->_adminLink('user/view/' . $this->session->userId); ?>">
                    <span class="icon mdi mdi-account-circle"></span>
                    <span> اطلاعات کاربری</span>
                </a>
            </li>
            <li>
                <a href="<?= $this->_adminLink('logout', false); ?>">
                    <span class="icon mdi mdi-power"></span>
                    <span> خروج از سیستم</span>
                </a>
            </li>
        </ul>
    </li>
</ul>