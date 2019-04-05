<div class="col-xs-12">
    <?php if (empty($this->data)) : ?>
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
                            <th style="max-width:20%;">عنوان</th>
                            <th>قیمت</th>
                            <th>دسته بندی</th>
                            <th>تاریخ ثبت</th>
                            <th class="actions"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($this->data as $learn) : ?>
                            <tr>
                                <td>
                                  <span style="display: block;margin-bottom: 10px;">
                                    <span class="icon mdi mdi-videocam" style="position: relative;top: 1px;"></span>
                                    <span><?= $learn['name'] ?></span>
                                  </span>
                                  <?php foreach ($this->db->get_where('_video', ['learnId' => $learn['id']])->result_array() as $value) : ?>
                                      <div style="display: block;" class="very-small xs-mt-5 xs-pr-5 text-success">
                                        <span class="icon mdi mdi-long-arrow-return" style="position: relative;top: 2px;"></span>
                                        <span><?= $value['title'] ?></span>
                                        <span class="icon mdi mdi-long-arrow-left" style="position: relative;top: 2px;padding: 5px;"></span>
                                        <span><?= persianNumber(convertSecond($value['time'])) ?></span>
                                      </div>
                                  <?php endforeach; ?>
                                </td>
                                <td class="text-success">
                                  <?php if ($learn['price'] == 0) : ?>
                                    <span>رایگان</span>
                                  <?php else : ?>
                                    <span><?= number_format($learn['price']) ?></span>
                                  <?php endif; ?>
                                </td>
                                <td>
                                  <?php foreach (json_decode($learn['category'], true) as $item) : ?>
                                    <span class="badge badge-danger"><?= $this->lang->line('learnCategory_'.$item) ?></span>
                                  <?php endforeach; ?>
                                </td>
                                <td>
                                    <span class="small"><?= persianNumber($this->jdate->date('l j F', $learn['insertTime'])); ?></span>
                                </td>
                                <td class="actions xs-pt-20 xs-pl-20" style="text-align: left;">
                                    <a href="javascript:void(0);" class="icon md-ml-10" data-toggle="modal" data-target="#leran-<?= $learn['id'] ?>">
                                      <i class="mdi mdi-cloud-upload"></i>
                                    </a>
                                    <a href="<?= $this->_adminLink('video/list/where/' . $learn['id']); ?>" class="icon md-ml-10">
                                        <i class="mdi mdi-collection-video"></i>
                                    </a>
                                    <a href="<?= $this->_adminLink('learn/edit/' . $learn['id']); ?>" class="icon md-ml-10">
                                        <i class="mdi mdi-edit"></i>
                                    </a>
                                    <div id="leran-<?= $learn['id'] ?>" tabindex="-1" role="dialog" class="modal fade colored-header colored-header-danger">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" data-dismiss="modal" aria-hidden="true" class="close md-close"><span class="mdi mdi-close"></span></button>
                                                    <h3 class="modal-title">پیشنمایش ویدیو</h3>
                                                </div>
                                                <div class="modal-body abs-pos" style="height: 565px;">
                                                  <form id="my-awesome-dropzone" action="<?= $this->_adminLink('media/upload/learnImage/'.$learn['id']); ?>" class="dropzone" style="position:relative; height: 100%;padding: 10px;">
                                                      <div class="dz-message">
                                                          <div class="icon"><span class="mdi mdi-cloud-upload"></span></div>
                                                          <h2>انتخاب تصاویر</h2>
                                                          <p class="note">تصاویر بازنویسی خواهند شد!</p>
                                                          <br />
                                                          <div style="direction: ltr;">
                                                            <h6 class="note">scale = 6 x 2 <strong>~</strong> min size = 1500px x 500px <strong>~</strong> name = 62.jpg</h6>
                                                            <h6 class="note">scale = 3 x 2 <strong>~</strong> min size = 750px x 500px <strong>~</strong> name = 32.jpg</h6>
                                                            <h6 class="note">scale = 2 x 2 <strong>~</strong> min size = 500px x 500px <strong>~</strong> name = 22.jpg</h6>
                                                          </div>
                                                      </div>
                                                  </form>
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
