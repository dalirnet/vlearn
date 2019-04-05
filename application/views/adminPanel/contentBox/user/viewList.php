<div class="col-xs-12">
    <? if (isset($this->queryString['status'])) : ?>
        <? if ($this->queryString['status'] == 'success') : ?>
            <div role="alert" class="alert alert-success alert-dismissible">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                <span class="icon mdi mdi-check"></span><strong>موفق!</strong> تغییرات با موفقیت انجام شد.
            </div>
        <? endif; ?>
        <? if ($this->queryString['status'] == 'error') : ?>
            <div role="alert" class="alert alert-danger alert-dismissible">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> اشکال در پردازش درخواست.
            </div>
        <? endif; ?>
    <? endif; ?>
    <? if (empty($this->data)) : ?>
        <div class="panel panel-border-color panel-border-color-warning">
            <div class="panel-heading xs-pb-20">
                <span>بدون داده</span>
                <div class="tools">
                    <a href="">
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
                        <thead>
                        <tr>
                            <th style="max-width:30%;">نام</th>
                            <th style="max-width:30%;">پست الکترونیک</th>
                            <th>تلفن همراه</th>
                            <th class="actions"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <? foreach ($this->data as $user) : ?>
                            <tr<?= ($user['active'] == 1 ? '' : ' class="warning"') ?>>
                                <td class="user-avatar" style="width: 30%;">
                                    <img src="http://gravatar.com/avatar/<?= md5(strtolower($user['mail'])); ?>?s=30&r=g" width="30" height="30" alt="Avatar">
                                    <span class="xs-mr-5">
                                        <span><?= $user['firstName'] . ' ' . $user['lastName']; ?></span>
                                        <? if ($user['active'] == 0) : ?>
                                            <span class="badge badge-danger xs-mr-5" style="padding-top: 4px;">غیر فعال</span>
                                        <? endif; ?>
                                    </span>
                                </td>
                                <td><?= $user['mail']; ?></td>
                                <td><?= persianNumber($user['phone']); ?></td>
                                <td class="actions xs-pt-20 xs-pl-20" style="text-align: left;">
                                    <? if ($user['active'] == 1): ?>
                                        <a href="<?= $this->_adminLink('user/view/' . $user['id']); ?>" class="icon md-ml-10">
                                            <i class="mdi mdi-eye"></i>
                                        </a>
                                        <a href="<?= $this->_adminLink('user/edit/' . $user['id']); ?>" class="icon md-ml-30">
                                            <i class="mdi mdi-edit"></i>
                                        </a>
                                        <a href="<?= $this->_adminLink('user/status/inactive/' . $user['id'] . '/' . $this->_addQueryString(['return' => $this->url])); ?>"
                                           class="icon">
                                            <i class="mdi mdi-delete"></i>
                                        </a>
                                    <? else: ?>
                                        <a href="<?= $this->_adminLink('user/status/active/' . $user['id'] . '/' . $this->_addQueryString(['return' => $this->url])); ?>" class="icon">
                                            <i class="mdi mdi-undo"></i>
                                        </a>
                                    <? endif; ?>
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