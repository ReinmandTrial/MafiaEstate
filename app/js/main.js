$(document).ready(function(){
	// burber menu 
	$('.burger-btn').on('click',function(){
		$('.burger-menu').addClass('open');
		$('.burger-menu-bg').fadeIn();
	})

	// 
    $(document).on('click', function (e) {
		if (!$(e.target).closest(".burger-btn").length ) {
			$('.burger-menu').removeClass('open');
			$('.burger-menu-bg').fadeOut();
		}
		e.stopPropagation();
	});
	//burger menu end 

	//плавная прокрутка якоря
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}

})


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
		delay: 4000,
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
	}
});