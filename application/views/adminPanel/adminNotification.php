<li class="dropdown">
    <a href="javascript:void(0);" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle">
        <span class="icon mdi mdi-notifications"></span>
        <? $notification = $this->coreData->_getLastNotification($this->session->userGroupAccess); ?>
        <? if (!empty($notification)): ?>
            <span class="indicator"></span>
        <? endif; ?>
    </a>
    <ul class="dropdown-menu be-notifications">
        <li>
            <div class="title">
                <span>اعلانات سیستم</span>
                <span class="badge" style="padding-top: 4px;">۲۴ ساعت گذشته</span>
            </div>
            <div class="list">
                <div class="be-scroller">
                    <div class="content">
                        <ul>
                            <? foreach ($notification as $row) : ?>
                                <li class="notification">
                                    <a href="<?= $this->_adminLink('user/view/' . $row['id']); ?>">
                                        <div class="image">
                                            <img src="http://gravatar.com/avatar/<?= md5(strtolower($row['mail'])); ?>?s=64&r=g" width="32" height="32" alt="Avatar">
                                        </div>
                                        <div class="notification-info">
                                            <div class="text">
                                                <span class="user-name"><?= $row['firstName'] . ' ' . $row['lastName']; ?></span>
                                                <span class="xs-mr-5"><?= $this->lang->line('notification_' . $row['mode']); ?></span>
                                            </div>
                                            <span class="date">
                                                <span style="direction: ltr;"><?= persianNumber(convertTime(time() - $row['time'])); ?></span>
                                                <span> پیش</span>
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            <? endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer"><a href="<?= $this->_adminLink('notification/view'); ?>">مشاهده همه</a></div>
        </li>
    </ul>
</li>