let index = 0;

$('.img-container > li').on('click', function() {
  $(this).parent().find('li').removeClass('selected');
  $(this).addClass('selected');
  $('.view-frame > img').attr('src', $(this).find('img').attr('src'));
  index = $(this).parent().find('li').index(this);
});

$(document).on('keydown', function(e) {
  if(e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    index = index - 1;
    if(index < 0) {
      index = $('.img-container li').length - 1;
    }
  } else if(e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    index = index + 1;
    if(index >= $('.img-container li').length) {
      index = 0;
    }
  }

  $('.img-container li').removeClass('selected');
  $('.img-container li').eq(index).addClass('selected');
  $('.view-frame > img').attr('src', $('.img-container li').eq(index).find('img').attr('src'));
});