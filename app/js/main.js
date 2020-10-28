$(function () {


	$('.slider__product').slick({});

	$('.slider__product-followers').slick({
		slidesToShow: 3,
		slidesToScroll: 1
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		from: 30,
		to: 300,
		prefix: "$"
	});

	$(".sorted__rate").rateYo({
		ratedFill: "#FFC000",
		spacing: '3px',
		numStars: 5,
		starWidth: "15px",
		rating: 5,
		readOnly: true
	});

	var mixer = mixitup('.product__filtered');













});