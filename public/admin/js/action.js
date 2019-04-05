var OB = {
  helper: {
    URL: ''
  },
  event: function() {
    $('.fileQmeryPending a').click(function() {
      OB.action.sendVideoToQmery(this);
    });
    $('.modal').on('hidden.bs.modal', function(e) {
      $(e.target).find('iframe').attr('src', 'about:blank');
    })
  },
  action: {
    sendVideoToQmery: function(e) {
      if ($('body').hasClass('actionIsRun') || $(e).hasClass('disable')) {
        return false;
      }
      $('body').addClass('actionIsRun');
      $(e).addClass('disable');
      var parent = $(e).parents('tr');
      parent.find('.completed').text('uploading');
      $.getJSON(OB.helper.URL + 'admin/action/video/send/' + $(e).attr('data-fileName') + '/' + parent.find('select').val(), function(data) {
        parent.find('.completed').text('encoding');
        OB.action.QmeryGetVideoStatus(parent, data.id);
      });
      parent.find('.progress-bar').css({
        width: '5%'
      }).delay(1000).animate({
        width: '50%'
      }, Number(parent.attr('data-fileSize')));
    },
    QmeryGetVideoStatus: function(e, id) {
      setTimeout(function() {
        $.getJSON(OB.helper.URL + 'admin/action/video/status/' + id, function(encoding) {
          if (encoding.progress < 100) {
            e.find('.progress-bar').finish().css({
              width: (50 + (encoding.progress / 2)) + '%'
            });
            OB.action.QmeryGetVideoStatus(e, id);
          } else {
            $('body').removeClass('actionIsRun');
            e.find('.progress-bar').finish().css({
              width: '100%'
            }).addClass('progress-bar-success').removeClass('progress-bar-warning progress-bar-striped active');
            e.find('.completed').text('done');
            e.find('td.actions a').find('i').addClass('mdi-check text-success');
          }
        });
      }, 3000);
    },
    setQumeryIframe: function(id) {
      var iFrame = $('#video-' + id).find('iframe');
      iFrame.attr('src', iFrame.attr('data-src'));
    },
    setVideoInformation: function(e) {
      var parent = $(e).parents('.modal-body');
      OB.action.changeBtnStatus(e, 0);

      $.ajax({
        url: OB.helper.URL + 'admin/action/video/edit',
        method: 'POST',
        data: {
          id: parent.find('.form-video-id').val(),
          free: Number(parent.find('.form-video-free').prop('checked')),
          title: parent.find('.form-video-title').val(),
          learn: parent.find('.form-video-learn').val(),
          comment: parent.find('.form-video-comment').val()
        },
        success: function(result) {
          if (result == 'ok') {
            OB.action.changeBtnStatus(e, 1);
          } else {
            OB.action.changeBtnStatus(e, 2);
          }
        },
        error: function() {
          OB.action.changeBtnStatus(e, 2);
        }
      });
    },
    changeBtnStatus: function(btn, status) {
      switch (status) {
        case 0:
          $(btn).addClass('loading');
          break;
        case 1:
          $(btn).addClass('after-loading-done');
          setTimeout(function() {
            $(btn).removeClass('loading after-loading-done');
          }, 3000);
          break;
        case 2:
          $(btn).addClass('after-loading-error');
          setTimeout(function() {
            $(btn).removeClass('loading after-loading-error');
          }, 3000);
          break;
      }
    }
  }
};
