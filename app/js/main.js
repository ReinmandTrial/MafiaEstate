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


new Swiper('.team-slider', {
	spaceBetween: 59,
	slidesPerView: 3.09,
	mousewheel: {
		sensitivity: 1,
	},
	breakpoints: {
		1280: {
			slidesPerView: 3.09,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		// 769: {
		// },
		576: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		320: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
	}
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

new Swiper('.store-slider', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	// spaceBetween: 95,
	// slidesPerView: 1.68,
	mousewheel: {
		sensitivity: 1,
	},
	breakpoints: {
		1439: {
			spaceBetween: 95,
			slidesPerView: 1.68,
		},
		1280: {
			spaceBetween: 75,
			slidesPerView: 1.8,
		},
		992: {
			slidesPerView: 2.2,
		},
		769: {
			spaceBetween: 30,
			// slidesPerView: 2,	
		},
		576: {
			spaceBetween: 25,
			slidesPerView: 2,
		},
		320: {
			spaceBetween: 25,
			slidesPerView: 1.7,
		},
	},
		// 769: {
		// },
		// 576: {
		// },
		// 320: {
		// }
	
});