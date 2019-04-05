<div class="row">
    <div class="col-xs-12 xs-mt-50">
        <div class="user-display panel-border-color panel-border-color-primary">
            <div class="user-display-bottom">
                <div class="user-display-avatar">
                    <img src="http://gravatar.com/avatar/<?= md5(strtolower($this->data['userInfo']['mail'])); ?>?s=110&r=g" width="110" height="110" alt="Avatar">
                </div>
                <div class="user-display-info">
                    <div class="name">
                        <span><?= $this->data['userInfo']['firstName'] . ' ' . $this->data['userInfo']['lastName']; ?></span>
                        <span class="badge" style="padding-top: 4px;color: #fff;background: #4285f4;border: none;">
                            <?= $this->lang->line('userGroupCode_' . $this->data['userInfo']['groupAccess']); ?>
                        </span>
                    </div>
                    <div class="nick" style="font-size: 80%;"><?= $this->data['userInfo']['mail']; ?></div>
                </div>
                <div class="row user-display-details">
                    <div class="col-xs-6 col-md-1">
                        <div class="title">خرید ها</div>
                        <div class="counter">۰</div>
                    </div>
                    <div class="col-xs-6 col-md-1">
                        <div class="title">نظرات</div>
                        <div class="counter">۰</div>
                    </div>
                    <div class="col-xs-12 col-md-4 md-pr-50">
                        <div class="title">آخرین ورود</div>
                        <div class="counter">
                            <span style="direction: ltr;"><?= persianNumber(convertTime(time() - $this->data['userInfo']['lastLogin'])); ?></span>
                            <span> پیش</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-4">
        <div class="panel panel-default panel-table panel-border-color panel-border-color-warning">
            <div class="panel-heading">
                <span>فعالیت های مرتبط</span>
                <div class="tools">
                    <span class="badge" style="padding-top: 4px;color: #fbbc05;background: none;">۵ فعالیت اخیر</span>
                </div>
            </div>
            <div class="panel-body">
                <div class="table-responsive noSwipe">
                    <table class="table table-striped table-hover">
                        <tbody>
                        <? foreach ($this->data['userActivity'] as $row) : ?>
                            <tr>
                                <td class="cell-detail">
                                    <span><?= $this->lang->line('notification_' . $row['mode']); ?></span>
                                    <span class="cell-detail-description">
                                            <span><?= $row['comment']; ?></span>
                                    </span>
                                </td>
                                <td class="cell-detail">
                                    <span><?= persianNumber($this->jdate->date('l j F', $row['time'])); ?></span>
                                    <span class="cell-detail-description"><?= persianNumber($this->jdate->date('G:i', $row['time'])); ?></span>
                                </td>
                            </tr>
                        <? endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="panel panel-default panel-table panel-border-color panel-border-color-success">
            <div class="panel-heading">
                <span>خرید ها</span>
                <div class="tools">
                    <span class="badge" style="padding-top: 4px;color: #34a853;background: none;">۵ خرید اخیر</span>
                </div>
            </div>
            <div class="panel-body">
                <div class="table-responsive noSwipe">
                    <table class="table table-striped table-hover">
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>