// TypeA Main page JS

$(document).ready(function() {
  new WOW().init();

  $('.gnb').on('mouseenter', function() {
    $(this).find('img').addClass('active');
    $('#header').addClass('active');
    $('#dim').show();
  });
  $('.gnb').on('mouseleave', function() {
    $(this).find('img').removeClass('active');
  });
  $('#header').on('mouseleave', function() {
    $(this).removeClass('active');
    $('#dim').hide();
  });
  $('#pcSchInp').on('focus', function() {
    $('.btn_close').show();
    $('.search_tag').show();
    $('#sch_dim').show();
  });
  $('.btn_close').on('click', function() {
    $(this).hide();
    $('.search_tag').hide();
    $('#sch_dim').hide();
  });
  $('#sch_dim').on('click', function() {
    $(this).hide();
    $('.btn_close').hide();
    $('.search_tag').hide();
  });
  $('.btn_ham').on('click', function() {
    $(this).toggleClass('on');
    $('.mo_header').toggleClass('active');
    $('body').toggleClass('open');
  });
  $('.btn_like').on('click', function() {
    var count = Number($(this).prev().text());
    if ($(this).hasClass('on')) {
      count--;
      $(this).prev().text(count);
    } else {
      count++;
      $(this).prev().text(count);
    }
    $(this).toggleClass('on');
  });

  $('.tab_nav > a').on('click', function() {
    var idx = $(this).index();
    $('.tab_con .tab_item').removeClass('on');
    $('.tab_con .tab_item').eq(idx).addClass('on');

    if (idx === 0) {
      $('.nav_fill').removeClass('right');
      $('.nav_fill').addClass('left');
    } else {
      $('.nav_fill').removeClass('left');
      $('.nav_fill').addClass('right');
    }
  });
  $('#mSchInp').on('focus', function() {
    $('.m_btn_close').show();
    $('.m_sch_tag').show();
    $('#m_dim').show();
  });
  $('.m_btn_close').on('click', function() {
    $(this).hide();
    $('.m_sch_tag').hide();
    $('#m_dim').hide();
  });
  $('#m_dim').on('click', function() {
    $(this).hide();
    $('.m_sch_tag').hide();
    $('.m_btn_close').hide();
  });
  $('.swiper-pagination-progressbar-fill').css('transform', 'scaleX(0.5)');


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