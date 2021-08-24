new Swiper('.team__slider', {
	spaceBetween: 59,
	slidesPerView: 4,
	mousewheel: {
		sensitivity: 1,
	},
	breakpoints: {
		// 769: {
		// },
		// 576: {
		// },
		// 320: {
		// }
	},
});
new Swiper('.slider-people', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	direction: 'vertical',
	spaceBetween: 30,
	autoplay: {
		delay: 3000,
	},
	loop: true,
	// effect: 'fade',
});
new Swiper('.store__slider', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	spaceBetween: 95,
	slidesPerView: auto,
	mousewheel: {
		sensitivity: 1,
	},
	breakpoints: {
		// 769: {
		// },
		// 576: {
		// },
		// 320: {
		// }
	},

});