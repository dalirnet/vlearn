<?= implode("\n", array_map(function ($index) {
    return '<script src="' . $index . '" type="text/javascript"></script>';
}, $srcScript)) ?>
<script type="text/javascript">
    $(document).ready(function () {
        OB.helper.URL = '<?= base_url(); ?>';
        OB.event();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


        <?= (!empty($script) ? "\n" . implode("\n", $script) : '') ?>
    });
</script>
</body>
</html>
