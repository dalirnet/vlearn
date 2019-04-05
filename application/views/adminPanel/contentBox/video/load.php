<div class="col-xs-12">
    <? if (isset($this->queryString['status'])) : ?>
        <? if ($this->queryString['status'] == 'deleteSuccess') : ?>
            <div role="alert" class="alert alert-success alert-dismissible">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                <span class="icon mdi mdi-check"></span><strong>موفق!</strong> فایل با موفقیت حذف شد.
            </div>
        <? endif; ?>
        <? if ($this->queryString['status'] == 'processSuccess') : ?>
            <div role="alert" class="alert alert-success alert-dismissible">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                <span class="icon mdi mdi-check"></span><strong>موفق!</strong> پردازش با موفقیت انجام شد.
            </div>
        <? endif; ?>
        <? if ($this->queryString['status'] == 'error') : ?>
            <div role="alert" class="alert alert-danger alert-dismissible">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> اشکال در پردازش درخواست.
            </div>
        <? endif; ?>
    <? endif; ?>
    <? if (empty($this->data['file'])) : ?>
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
                            <th style="max-width:30%;">فایل</th>
                            <th style="width:250px;">گروه در Qmery</th>
                            <th style="width: 30%;">وضعیت پردازش</th>
                            <th class="actions">انتقال به Qmery</th>
                        </tr>
                        </thead>
                        <tbody>
                        <? foreach ($this->data['file'] as $file) : ?>
                            <tr class="fileQmeryPending" data-fileSize="<?= floor($file['size'] / 1000); ?>">
                                <td style="text-align: right;direction: ltr;">
                                    <span class="xs-mr-5">
                                        <span><?= $file['name'] ?></span>
                                    </span>
                                </td>
                                <td style="padding-left: 50px;">
                                    <div class="input-group">
                                        <span class="input-group-addon xs-pt-15">
                                            <i class="icon mdi mdi-collection-video"></i>
                                        </span>
                                        <select class="form-control" autocomplete="off">
                                            <? foreach ($this->data['QmeryGroup'] as $group) : ?>
                                                <option value="<?= $group['id']; ?>"><?= $group['title']; ?></option>
                                            <? endforeach; ?>
                                        </select>
                                    </div>
                                </td>
                                <td class="milestone">
                                    <span class="completed">pending</span>
                                    <span class="version"><?= round($file['size'] / 1000000, 2); ?>MB</span>
                                    <div class="progress">
                                        <div style="width: 0%" class="progress-bar progress-bar-warning progress-bar-striped active"></div>
                                    </div>
                                </td>
                                <td class="actions xs-pt-20 xs-pl-20">
                                    <a href="javascript:void(0);" class="icon" data-fileName="<?= base64_encode($file['name']) ?>">
                                        <i class="mdi mdi-cloud-upload"></i>
                                    </a>
                                </td>
                            </tr>
                        <? endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    <? endif; ?>
</div>