var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).css("cssText", "display: none !important;");
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
