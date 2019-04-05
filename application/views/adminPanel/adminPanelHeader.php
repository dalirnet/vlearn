<div class="be-wrapper">
    <nav class="navbar navbar-default navbar-fixed-top be-top-header">
        <div class="container-fluid">
            <div class="be-right-navbar">
                <?php $this->load->view('adminPanel/adminUserCard'); ?>
                <div class="page-title">
                    <div class="navbar-header"><a href="javascript:void(0);" class="navbar-brand"></a></div>
                    <span><?= $this->load->adminPanelTitle; ?></span>
                </div>
                <ul class="nav navbar-nav navbar-right be-icons-nav">
                    <?php $this->load->view('adminPanel/adminNotification'); ?>
                    <li class="dropdown"><a href="javascript:void(0);" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle"><span
                                    class="icon mdi mdi-apps"></span></a>
                        <ul class="dropdown-menu be-connections">
                            <li>
                                <div class="list">
                                    <div class="content">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <a href="#" class="connection-item">
                                                    <i class="icon mdi mdi-videocam" style="font-size: 40px;"></i>
                                                    <span>آموزش جدید</span>
                                                </a>
                                            </div>
                                            <div class="col-xs-4">
                                                <a href="#" class="connection-item">
                                                    <i class="icon mdi mdi-comment-text-alt" style="font-size: 40px;"></i>
                                                    <span>نظرات</span>
                                                </a>
                                            </div>
                                            <div class="col-xs-4">
                                                <a href="#" class="connection-item">
                                                    <i class="icon mdi mdi-shopping-cart" style="font-size: 40px;"></i>
                                                    <span>خرید ها</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="be-left-sidebar">
        <div class="left-sidebar-wrapper"><a href="javascript:void(0);" class="left-sidebar-toggle">منوی کاربری</a>
            <div class="left-sidebar-spacer">
                <div class="left-sidebar-scroll">
                    <div class="left-sidebar-content">
                        <ul class="sidebar-elements">
                            <li class="divider">مدیریت</li>
                            <li<?= ($this->load->activeMenu == 1 ? ' class="active"' : '') ?>>
                                <a href="<?= $this->_adminLink('dashboard', false); ?>">
                                    <i class="icon mdi mdi-layers"></i><span>داشبورد</span>
                                </a>
                            </li>
                            <li class="parent<?= ($this->load->activeMenu == 2 ? ' active open' : '') ?>">
                                <a href="">
                                    <i class="icon mdi mdi-videocam"></i><span>آموزش ها</span>
                                </a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="<?= $this->_adminLink('learn/new'); ?>">افزدون جدید</a>
                                    </li>
                                    <li>
                                        <a href="<?= $this->_adminLink('learn/list'); ?>">لیست آموزش ها</a>
                                    </li>
                                    <li class="divider">ویدئو ها</li>
                                    <li>
                                        <a href="<?= $this->_adminLink('video/new'); ?>">
                                          <span class="small" style="color:#999;">اول / </span>
                                          <span>بارگذاری</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?= $this->_adminLink('video/load'); ?>">
                                          <span class="small" style="color:#999;">دوم / </span>
                                          <span>پردازش</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?= $this->_adminLink('video/list'); ?>">
                                          <span class="small" style="color:#999;">سوم / </span>
                                          <span>لیست ویدئو ها</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="parent<?= ($this->load->activeMenu == 3 ? ' active open' : '') ?>">
                                <a href="#">
                                    <i class="icon mdi mdi-accounts"></i><span>کاربران</span>
                                </a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="<?= $this->_adminLink('user/new'); ?>">کاربر جدید</a>
                                    </li>
                                    <li class="divider">مشاهده</li>
                                    <li>
                                        <a href="<?= $this->_adminLink('user/view/all/admin'); ?>">مدیر</a>
                                    </li>
                                    <li>
                                        <a href="<?= $this->_adminLink('user/view/all/publisher'); ?>">نویسنده</a>
                                    </li>
                                    <li>
                                        <a href="<?= $this->_adminLink('user/view/all/member'); ?>">کاربران سایت</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="parent<?= ($this->load->activeMenu == 4 ? ' active open' : '') ?>">
                                <a href="#">
                                    <i class="icon mdi mdi-file"></i><span>صفحات</span>
                                </a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="">صفحه جدید</a>
                                    </li>
                                    <li>
                                        <a href="">لیست صفحات</a>
                                    </li>
                                </ul>
                            </li>
                            <li<?= ($this->load->activeMenu == 5 ? ' class="active"' : '') ?>>
                                <a href="">
                                    <i class="icon mdi mdi-chart"></i><span>آمار بازدید</span>
                                </a>
                            </li>
                            <li class="parent"<?= ($this->load->activeMenu == 6 ? ' active open' : '') ?>>
                                <a href="#">
                                    <i class="icon mdi mdi-view-quilt"></i><span>ماژول ها</span>
                                </a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="">ماژول جدید</a>
                                    </li>
                                    <li>
                                        <a href="">لیست ماژول ها</a>
                                    </li>
                                </ul>
                            </li>
                            <li<?= ($this->load->activeMenu == 7 ? ' class="active"' : '') ?>>
                                <a href="">
                                    <i class="icon mdi mdi-shopping-cart"></i><span>خرید ها</span>
                                </a>
                            </li>
                            <li<?= ($this->load->activeMenu == 8 ? ' class="active"' : '') ?>>
                                <a href="">
                                    <i class="icon mdi mdi-comment-text-alt"></i><span>نظرات</span>
                                </a>
                            </li>
                            <li class="divider">بیشتر</li>
                            <li<?= ($this->load->activeMenu == 9 ? ' class="active"' : '') ?>>
                                <a href="<?= $this->_adminLink('config/load'); ?>">
                                    <i class="icon mdi mdi-settings"></i><span>تنظیمات سیستم</span>
                                </a>
                            </li>
                            <li<?= ($this->load->activeMenu == 10 ? ' class="active"' : '') ?>>
                                <a href="">
                                    <i class="icon mdi mdi-notifications-active"></i><span>اعلانات</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="be-content">
        <div class="page-head">
            <h2 class="page-head-title"><?= $this->load->adminPanelTitle; ?></h2>
        </div>
        <div class="main-content container-fluid">
