$(".slider").slick({
	dots: true,
	infinite: true,
	autoplay: true,
	mobileFirst: true,
	speed: 1000,
	autoplaySpeed: 200000,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: ".arrow_prev",
	nextArrow: ".arrow_next",
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
