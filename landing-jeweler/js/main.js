$(document).ready(function () {

    $('.production-grid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.production-slider-grid'
    });
    
    $('.production-slider-grid').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        asNavFor: '.production-grid',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },   
        ]
    });

    $(function () {
        $('a[href^="#anchor"]').on('click', function (event) {

            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;

            $('html, body').animate({ scrollTop: dn }, 1000);

        });
    });

    $('.button-callback').click(function () {
        $('.modal').toggleClass('modal-overlay')
    });

    $('.modal-window-btn').click(function () {
        $('.modal').removeClass('modal-overlay')
    });

    new WOW().init();

});

