// TypeA Main page JS

$(document).ready(function() {
  new WOW().init();

  $('.link_list > li').on('mouseenter', function() {
    var idx = $(this).index();

    $('.link_list > li').removeClass('on');
    $(this).addClass('on');

    if (idx !== 1 && idx !== 4) {
      $('.sub_links').stop().slideUp(500);
      $('#header').removeClass('active');
    } else if (idx === 1) {
      $('.sub_links').stop().slideDown(500);
    } else if (idx === 4) {
      $('#header').addClass('active');
      $(this).find('a').addClass('on');
    }
    if (idx !== 4) {
      $('.point_location').removeClass('on');
    }
  });
  $('.gnb').on('mouseleave', function() {
    $('.link_list > li').removeClass('on');
  });
  $('#header').on('mouseleave', function() {
    $(this).removeClass('active');
    $('.sub_links').stop().slideUp(500);
    $('.point_location').removeClass('on');
  });

  $(window).scroll(function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      $(".footer_sch").css("bottom", "232px");
    } else {
      $(".footer_sch").css("bottom", "0");
    }
  });

});
var mainThumbs = new Swiper('.main_thumbs', {
  spaceBetween: 30,
  slidesPerView: 2,
  watchSlidesVisibility: true,
  allowTouchMove: false,
});


var mainSlide = new Swiper('.main_slide', {
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
mainSlide.on('slideChange', function() {
  var currentSlide = mainSlide.activeIndex;

  initVideo(currentSlide);
});

function initVideo(index) {
  if (index === 0) {
    $('#mainVideo').attr({
      'loop': true
    });
  } else {
    $('#mainVideo').removeAttr('loop');
  }
}
var lifeSlide = new Swiper('.life_slide', {
  slidesPerView: 'auto',
  pager: true,
  freeMode: true,
  spaceBetween: 30,
});

$('.btn_plus').on('click', function() {
  $(this).toggleClass('on');
  $('.btn_list').toggleClass('on');
});

$('.section_service .thumb').on('mouseenter', function() {
  $(this).find('.over').addClass('on');
});
$('.section_service .thumb').on('mouseleave', function() {
  $(this).find('.over').removeClass('on');
});