$('[href^="#anchor"]').click(function(event) {
	event.preventDefault();

	$('.nav').removeClass('nav_active');
	$('.nav-list').removeClass('nav-list-active');
	$('.nav-toggle__open').removeClass('fa-bar, fa-times');

	var id = $(this).attr('href'),
		docTop = mediaQuery('max', 767) ? $(id).offset().top - $('.header').outerHeight() : $(id).offset().top;

    $('body,html').animate({
    	scrollTop: docTop
    }, 500);

});


$('.nav-toggle').click(function() {
	$(this).toggleClass('nav-toggle-active');
	$('.nav-list').toggleClass('nav-list-active')
	$('.nav-toggle__open').toggleClass('fa-bar, fa-times')
});


function mediaQuery(direction, width) {
	return window.matchMedia(`(${direction}-width: ${width}px)`).matches;
};

mediaQuery('max', 800);



$('.reviews-grid').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 1111,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToScroll: 1,
				slidesToShow: 1
			}
		}
	]
});


$('.features-grid').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1011,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToScroll: 1,
				slidesToShow: 1,
				dots: true
			}
		}
	]
});