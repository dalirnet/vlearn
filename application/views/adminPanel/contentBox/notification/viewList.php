<div class="col-xs-12">
    <? if (empty($this->data)) : ?>
        <div class="panel panel-border-color panel-border-color-warning">
            <div class="panel-heading xs-pb-20">
                <span>بدون داده</span>
                <div class="tools">
                    <a href="<?= $this->_adminLink('notification/view'); ?>">
                        <span class="icon mdi mdi-refresh"></span>
                    </a>
                </div>
            </div>
        </div>
    <? else : ?>
        <div class="panel panel-default panel-table panel-border-color panel-border-color-success">
            <div class="panel-heading">
                <?= $this->load->adminPanelTitle; ?>
                <div class="tools">
                    <a href="">
                        <span class="icon mdi mdi-refresh"></span>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="table-responsive noSwipe">
                    <table class="table table-striped table-hover">
                        <tbody>
                        <? foreach ($this->data as $row) : ?>
                            <tr>
                                <td class="user-avatar cell-detail user-info">
                                    <img src="http://gravatar.com/avatar/<?= md5(strtolower($row['mail'])); ?>?s=30&r=g" width="30" height="30" alt="Avatar">
                                    <span><?= $row['firstName'] . ' ' . $row['lastName']; ?></span>
                                    <span class="cell-detail-description"><?= $row['mail']; ?></span>
                                </td>
                                <td class="cell-detail">
                                    <span><?= $this->lang->line('notification_' . $row['mode']); ?></span>
                                    <span class="cell-detail-description">
                                            <span style="display: inline-block;"><?= persianNumber(convertTime(time() - $row['time'])); ?></span>
                                            <span style="display: inline-block;"> پیش</span>
                                    </span>
                                </td>
                                <td class="cell-detail">
                                    <span><?= persianNumber($this->jdate->date('l j F', $row['time'])); ?></span>
                                    <span class="cell-detail-description"><?= persianNumber($this->jdate->date('G:i', $row['time'])); ?></span>
                                </td>
                                <td class="actions xs-pt-20 xs-pl-20" style="text-align: left;">
                                    <a href="<?= $this->_adminLink('user/view/' . $row['id']); ?>" class="icon md-pl-5">
                                        <i class="mdi mdi-chart"></i>
                                    </a>
                                </td>
                            </tr>
                        <? endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <?= $this->pagination->create_links(); ?>
            </div>
        </div>
    <? endif; ?>
</div>