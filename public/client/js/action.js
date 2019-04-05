var OB = {
  helper: {
    scrollAnimate: function() {
      var scrollAnimateEl = ['slideanim', 'jumpanim'];
      $(window).scroll(function() {
        $.each(scrollAnimateEl, function(i, v) {
          $('.' + v).not('.animated').each(function(index, value) {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
              $(value).addClass('animated');
              setTimeout(function() {
                $(value).addClass(v.replace('anim', ''));
              }, index * 100);
            }
          });
        });
      });
    },
    setContinerHeight: function() {
      var height = $(window).height();
      $('.continer-js-height').css('min-height', height);
    }
  },
  event: function() {
    OB.helper.scrollAnimate();
  }
}
