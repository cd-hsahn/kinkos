// TypeB Main page JS
$(document).ready(function () {
    new WOW().init();

    // gnb toggle
    (function () {
        $('.btn_gnbtoggle').on('click', function () {
            $(this).closest('.company_gnb').toggleClass('active');
            $('.sub_gnb').stop().slideUp(500);

            if ($('.company_gnb').hasClass('active')) {
                showMainGnb();
            } else {
                $('.gnb_links').removeClass('on');
            }
        });
        function showMainGnb() {
            setTimeout(function () {
                $('.gnb_links').addClass('on');
            }, 400);
        }
    })();

    // sub gnb show / hide
    // (function () {
    //     $('.gnb > li > a').on('mouseenter', function () {
    //         var title = $(this).text();
    //         $('.gnb > li > a').addClass('not_on');
    //         $(this).removeClass('not_on').addClass('on');
    //         $('.sub_gnb').stop().slideDown(500);

    //         $('.js-snb-title').text(title);

    //         if ($(this).hasClass('js-location')) {
    //             $('.sub_gnb_item').hide();
    //             $('.location_item').show();
    //         } else {
    //             $('.sub_gnb_item').show();
    //             $('.location_item').hide();
    //         }
    //         $('.dim').show();
    //     });
    //     $('.gnb > li > a').on('mouseleave', function () {
    //         $('.gnb > li > a').removeClass('on');
    //     });
    //     $('#header').on('mouseleave', function () {
    //         $('.gnb > li > a').removeClass('not_on');
    //         $('.sub_gnb').stop().slideUp(500);
    //         $('.dim').hide();
    //     });
    //     $('.header_top').on('mouseenter', function () {
    //         $('.gnb > li > a').removeClass('not_on');
    //         $('.sub_gnb').stop().slideUp(500);
    //         $('.dim').hide();
    //     });
    // })();
    
    (function() {
        $('.gnb > li > a').on('mouseenter', function() {
            var idx = $(this).parent().index();

            $('.gnb > li > a').removeClass('on');
            $(this).addClass('on');
            $('.sub_gnb').stop().slideDown(500);

            if (idx !== 4) {
                var left = 500;
                var width = 226;
                var move = idx * width;

                $('.sub_gnb_item').show();
                $('.location_item').hide();

                $('.point').css('left', left + move + 'px');
            } else {
                $('.sub_gnb_item').hide();
                $('.location_item').show();
            }
        });

        $('.header_top').on('mouseenter', function() {
            $('.gnb > li > a').removeClass('on');
            $('.sub_gnb').stop().slideUp(500);
        });
        $('#header').on('mouseleave', function() {
            $('.gnb > li > a').removeClass('on');
            $('.sub_gnb').stop().slideUp(500);
        });

        $('.gnb_links > li > a').on('mouseenter', function() {
            $('.gnb_links > li > a').addClass('not_on');
            $(this).removeClass('not_on');
            $(this).addClass('on');
        });
    })();
});