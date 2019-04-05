<div class="col-xs-12">
    <?php if (isset($this->queryString['status'])) : ?>
        <?php if ($this->queryString['status'] == 'success') : ?>
            <div role="alert" class="alert alert-success alert-dismissible">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                <span class="icon mdi mdi-check"></span><strong>موفق!</strong> تغییرات با موفقیت انجام شد.
            </div>
        <?php endif; ?>
        <?php if ($this->queryString['status'] == 'error') : ?>
            <div role="alert" class="alert alert-danger alert-dismissible">
                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true" class="mdi mdi-close"></span></button>
                <span class="icon mdi mdi-alert-triangle"></span><strong>خطا!</strong> اشکال در پردازش درخواست.
            </div>
        <?php endif; ?>
    <?php endif; ?>
    <?php if (empty($this->data['list'])) : ?>
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
    <?php else : ?>
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
                            <th style="max-width:20%;">فایل</th>
                            <th>QmeryId</th>
                            <th>حجم</th>
                            <th>مدت ویدئو</th>
                            <th>مدت آپلود</th>
                            <th>مدت تبدیل</th>
                            <th>زمان</th>
                            <th class="actions"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($this->data['list'] as $file) : ?>
                            <tr>
                                <td style="text-align: right;direction: ltr;">
                                    <span style="display: block;margin-bottom: 5px;">
                                      <?php if ($file['learnId'] > 0) : ?>
                                        <span class="badge badge-success small"><?= $file['learnName'] ?></span>
                                      <?php else : ?>
                                        <span class="badge badge-dafault small">هیچکدام</span>
                                      <?php endif; ?>
                                    </span>
                                    <span class="xs-mr-5">
                                        <span><?= $file['name'] ?></span>
                                    </span>
                                </td>
                                <td>
                                    <span><?= $file['QmeryHash'] ?></span>
                                </td>
                                <td>
                                    <span class="label label-default xs-pb-0"><?= round($file['size'] / 1000000, 2); ?>MB</span>
                                </td>
                                <td>
                                    <span class="label label-info xs-pb-0"><?= convertSecond($file['time']) ?></span>
                                </td>
                                <td>
                                    <span class="label label-success xs-pb-0"><?= convertSecond($file['endUpload'] - $file['startUpload']) ?></span>
                                </td>
                                <td>
                                     <span class="label label-danger xs-pb-0"><?php
                                             if ($file['endEncode'] > 0) {
                                                 echo convertSecond($file['endEncode'] - $file['endUpload']);
                                             } else {
                                                 echo '<i class="icon mdi mdi-spinner"></i>';
                                             }
                                         ?></span>
                                </td>
                                <td>
                                    <span><?= persianNumber($this->jdate->date('l j F', $file['startUpload'])); ?></span>
                                </td>
                                <td class="actions xs-pt-15 xs-pl-20">
                                    <a href="javascript:void(0);" class="icon" data-toggle="modal" data-target="#setting-<?= $file['QmeryHash'] ?>">
                                        <i class="mdi mdi-settings"></i>
                                    </a>
                                    <a href="javascript:void(0);" class="icon xs-mr-5" data-toggle="modal" data-target="#video-<?= $file['QmeryHash'] ?>"
                                       onclick="OB.action.setQumeryIframe('<?= $file['QmeryHash'] ?>')">
                                        <i class="mdi mdi-play-circle"></i>
                                    </a>
                                    <a href="javascript:void(0);" class="icon xs-mr-5" data-toggle="modal" data-target="#image-<?= $file['QmeryHash'] ?>">
                                        <i class="mdi mdi-image"></i>
                                    </a>
                                    <div id="video-<?= $file['QmeryHash'] ?>" tabindex="-1" role="dialog" class="modal fade colored-header colored-header-danger">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" data-dismiss="modal" aria-hidden="true" class="close md-close"><span class="mdi mdi-close"></span></button>
                                                    <h3 class="modal-title">پیشنمایش ویدیو</h3>
                                                </div>
                                                <div class="modal-body abs-pos" style="height: 400px;">
                                                    <span><i class="icon mdi mdi-spinner mdi-refresh-animate"></i></span>
                                                    <?= QmeryVideo($file['QmeryHash']) ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="image-<?= $file['QmeryHash'] ?>" tabindex="-1" role="dialog" class="modal fade colored-header colored-header-danger">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" data-dismiss="modal" aria-hidden="true" class="close md-close"><span class="mdi mdi-close"></span></button>
                                                    <h3 class="modal-title">تصاویر ویدیو</h3>
                                                </div>
                                                <div class="modal-body img-pos">
                                                    <?php foreach ($this->db->get_where('_video_screenshot', ['videoId' => $file['QmeryId']])->result_array() as $image) : ?>
                                                        <img src="<?= $image['image'] ?>">
                                                    <?php endforeach; ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="setting-<?= $file['QmeryHash'] ?>" tabindex="-1" role="dialog" class="modal fade colored-header colored-header-danger">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" data-dismiss="modal" aria-hidden="true" class="close md-close"><span class="mdi mdi-close"></span></button>
                                                    <h3 class="modal-title">اطلاعات ویدیو</h3>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row xs-pt-10">
                                                        <div class="col-md-8 form-group">
                                                            <label>عنوان ویدئو</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon xs-pt-15">
                                                                    <i class="icon mdi mdi-videocam"></i>
                                                                </span>
                                                                <input type="hidden" value="<?= $file['QmeryHash'] ?>" class="form-video-id">
                                                                <input type="text" placeholder="عنوان ویدئو" value="<?= $file['title'] ?>" class="form-control form-video-title" autocomplete="off">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 form-group">
                                                          <label>انتخاب آموزش</label>
                                                          <div class="input-group">
                                                            <span class="input-group-addon xs-pt-15">
                                                              <i class="icon mdi mdi-book"></i>
                                                            </span>
                                                            <select class="form-control form-video-learn">
                                                              <option value="0">هیچکدام</option>
                                                              <?php foreach ($this->data['leranItem'] as $value) : ?>
                                                                <option value="<?= $value['id'] ?>"><?= $value['name'] ?></option>
                                                              <?php endforeach; ?>
                                                            </select>
                                                          </div>
                                                        </div>
                                                    </div>
                                                    <div class="row xs-pt-10">
                                                        <div class="col-md-12 form-group">
                                                            <label>توضیحات ویدئو</label>
                                                            <textarea class="form-control form-video-comment" placeholder="توضیحات"><?= $file['comment'] ?></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row xs-pt-10">
                                                        <div class="col-md-12 form-group">
                                                            <p class="xs-m-0">
                                                                <label>این ویدئو رایگان است؟</label>
                                                            </p>
                                                            <div class="be-radio-icon bg-color inline">
                                                                <input <?= ($file['free'] == 1 ? 'checked="checked" ' : '') ?>name="free-video-<?= $file['QmeryHash'] ?>"
                                                                       id="free-video-1-<?= $file['QmeryHash'] ?>" type="radio" class="form-video-free">
                                                                <label for="free-video-1-<?= $file['QmeryHash'] ?>">
                                                                    <span class="mdi mdi-money-off"></span>
                                                                    <span>بله</span>
                                                                </label>
                                                            </div>
                                                            <div class="be-radio-icon bg-color inline">
                                                                <input <?= ($file['free'] == 0 ? 'checked="checked" ' : '') ?>name="free-video-<?= $file['QmeryHash'] ?>"
                                                                       id="free-video-2-<?= $file['QmeryHash'] ?>" type="radio">
                                                                <label for="free-video-2-<?= $file['QmeryHash'] ?>">
                                                                    <span class="mdi mdi-money"></span>
                                                                    <span>خیر</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row xs-pt-15">
                                                        <div class="col-md-12 text-left">
                                                            <button type="button" class="btn btn-space btn-success btn-lg" onclick="OB.action.setVideoInformation(this);">
                                                                <span>ذخیره</span>
                                                                <i class="icon icon-right mdi mdi-check"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <?= $this->pagination->create_links(); ?>
            </div>
        </div>
    <?php endif; ?>
</div>
