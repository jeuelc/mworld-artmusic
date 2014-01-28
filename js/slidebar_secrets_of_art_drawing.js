/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundSecretsOfArtDrawing.pause(); bgsoundSecretsOfArtDrawing.currentTime = 0; 
});

$('.menubtnSecretArtDrawing').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnSecretArtDrawing').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtnSecretArtDrawing').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnSecretArtDrawing').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnSecretArtDrawing').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnSecretArtDrawing').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnSecretArtDrawing').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnSecretArtDrawing').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnSecretArtDrawing').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnSecretArtDrawing').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnSecretArtDrawing').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnSecretArtDrawing').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnSecretArtDrawing').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnSecretArtDrawing').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bSecretArtDrawing').position();
  if (botsposition.left == 1024) {
    $('.bSecretArtDrawing').css({'opacity':1});
    $('.plSecretArtDrawing').css({'opacity':1});
    $('.fSecretArtDrawing').css({'opacity':1});
    $('.bSecretArtDrawing').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plSecretArtDrawing').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fSecretArtDrawing').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bSecretArtDrawing').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bSecretArtDrawing').css({'left':'1024px'}); });
    $('.plSecretArtDrawing').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plSecretArtDrawing').css({'left':'1024px'}); });
    $('.fSecretArtDrawing').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fSecretArtDrawing').css({'left':'1024px'}); });
  }
});

$('.rwSecretArtDrawing').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwSecretArtDrawing').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsSecretArtDrawing').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsSecretArtDrawing').css('background-position-y', '-73px');
    }, 300);
});

$('.fwSecretArtDrawing').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwSecretArtDrawing').css('background-position-y', '-73px');
    }, 300);
});