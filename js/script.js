$(document).ready(function () {

    // 'use string'


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
    
        // back-to-top btn hide show js 
        if (scrolling > 500) {
            $('.back-to-top i').fadeIn();
        } else {
            $('.back-to-top i').fadeOut();
        };
    
        // nav-fix
        if (scrolling > 300) {
            $('nav').addClass('nav-fix');
        } else {
            $('nav').removeClass('nav-fix');
        };
    });
    
    // back-to-top
    $('.back-to-top i').click(function () {
      $('html,.banner-bg').animate({
          scrollTop: 0,
      }, 1000)
    });



    // js for banner 
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
    });

    // js for dj 
    $('.dj-slider').slick({
        arrows: true,
        autoplay: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        speed: 1000,
        autoplaySpeed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left prev-btn"></i>',
        nextArrow: '<i class="fas fa-chevron-right next-btn"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
   
    });

    // js for countdown 
    $('.count-1').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%D'));
    });
    $('.count-2').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.count-3').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('.count-4').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });


    // js for event
    $('.event-slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '<i class="fas fa-chevron-left prev-btn"></i>',
        nextArrow: '<i class="fas fa-chevron-right next-btn"></i>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    });

    // js for blog
    $('.blog-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        prevArrow: '<i class="fas fa-chevron-left prev-btn"></i>',
        nextArrow: '<i class="fas fa-chevron-right next-btn"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows:false,
                }
              },
              {
                breakpoint: 769,
                settings: {
                  arrows:false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows:false,
                }
              },
            {
                breakpoint: 576,
                settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:false,
                }
              },
        ]
    });


    $('.testimnial-slider').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1500,
        prevArrow: '<i class="fas fa-chevron-left prev-btn"></i>',
        nextArrow: '<i class="fas fa-chevron-right next-btn"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:false,
                }
              },
        ]
    });


})
