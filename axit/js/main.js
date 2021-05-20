$('.pricing-grid').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 981,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}	
	]
});

$('.testimonals-grid').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 981,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});

$('.our-process-grid').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
	]
});

$('[href^="#anchor"]').click(function(event) {
	event.preventDefault();

	$('.nav').removeClass('nav_active');
	$('.nav-list').removeClass('nav-list-active');
	$('.nav-toggle__open').removeClass('fa-bar, fa-times');

	var id = $(this).attr('href'),
		docTop = mediaQuery('max', 640) ? $(id).offset().top - $('.navbar').outerHeight() : $(id).offset().top;

    $('body,html').animate({
    	scrollTop: docTop
    }, 500);

});


$('.nav-toggle').click(function() {
	$(this).toggleClass('nav-toggle-active');
	$('.nav-list').toggleClass('nav-list-active');
	$('.nav-toggle__open').toggleClass('fa-bar, fa-times');
});


function mediaQuery(direction, width) {
	return window.matchMedia(`(${direction}-width: ${width}px)`).matches;
};


$(function(){
    $('.features-one__tab:first').addClass('features-one__tab-active');
  });

$('.features-one__tab').not('.features-one__tab-active').click(function(){
    $(this).addClass('features-one__tab-active').siblings().removeClass('features-one__tab-active');
});