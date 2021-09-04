// tabs start
$(document).ready(function () {
	var hash = window.location.hash.substr(1);
	var url = $(location).attr('href').split('#')[1];
	if (url == undefined || $('.header-pages__logo-block').attr('href') == url + '.html') {
		$($('a.js-leftbar__item')).each(function () {
			if ($(this).hasClass('leftbar__item')) {
				$(this).addClass('active');
				return false;
			}
		});
	} else {
		var pageTitle = url.split('/')[1] + '.html';
		$($('a.js-leftbar__item')).each(function () {
			if ($(this).hasClass('leftbar__item')) {
				if ($(this).attr('href').split('/')[1] == pageTitle || $(this).attr('href') == pageTitle) {
					$(this).addClass('active');
				}
			}
		})
	}
	var href = $('a.js-leftbar__item').each(function () {
		var href = $(this).attr('href');
		if (hash == href.substr(0, href.length - 5)) {
			var toLoad = hash + '.html #content';
			$('#content').load(toLoad)
		}
	});

	$(document).on('click', 'a.js-leftbar__item, .js-btn', function () {
		if ($(this).hasClass('leftbar__item')) {
			$($('a.js-leftbar__item')).each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
		} else if ($(this).hasClass('header-pages__logo-block')) {
			$($('a.js-leftbar__item')).each(function () {
				$(this).removeClass('active');
			})
			$($('a.js-leftbar__item')).each(function () {
				if ($(this).hasClass('leftbar__item')) {
					$(this).addClass('active');
					return false;
				}
			})
		} else if ($(this).hasClass('body-of-site-footer__btn')) {
			var i = 0;
			if ($(this).hasClass('body-of-site-footer__btn-next')) {

				$($('a.js-leftbar__item')).each(function (index) {
					if ($(this).hasClass('leftbar__item') && $(this).hasClass('active')) {
						$(this).removeClass('active');
						i = index;
						return false;
					}
				})

				$($('a.js-leftbar__item')).each(function (index) {
					if (index == i + 1) {
						$(this).addClass('active');
						return false;
					}
				})

			} else {
				$($('a.js-leftbar__item')).each(function (index) {
					if ($(this).hasClass('leftbar__item') && $(this).hasClass('active')) {
						$(this).removeClass('active');
						i = index;
						return false;
					}
				})

				$($('a.js-leftbar__item')).each(function (index) {
					if (index == i - 1) {
						$(this).addClass('active');
						return false;
					}
				})

			}

		}
		var toLoad = $(this).attr('href') + ' #content';
		$('#content').fadeOut('fast', loadContent);
		window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);// название файла
		function loadContent() {
			$('#content').load(toLoad, '', showNewContent())
		}
		function showNewContent() {
			$('#content').fadeIn();
		}
		return false;
	});

});
//tabs end

$(document).ready(function () {
	// burber menu 
	$('.burger-btn, .pages-body__burger-btn').on('click', function () {
		$('.burger-menu, .leftbar').addClass('open');
		$('.burger-menu-bg, .leftbar__bg').fadeIn();
	})

	// 
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".burger-btn, .pages-body__burger-btn, .leftbar").length) {
			$('.burger-menu, .leftbar').removeClass('open');
			$('.burger-menu-bg, .leftbar__bg').fadeOut();
		}
		e.stopPropagation();
	});

	$('.pages-body__close-btn, .leftbar__item').on('click', function () {
		$('.leftbar').removeClass('open');
		$('.leftbar__bg').fadeOut();
	})
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
	slidesPerView: 'auto',
});

new Swiper('.slider-people', {
	direction: 'vertical',
	spaceBetween: 30,
	loop: true,
	breakpoints: {
		768: {
			allowTouchMove: true,
		},
		320: {
			allowTouchMove: false,
		},
	}
});

new Swiper('.slider-card-section', {
	slidesPerView: 'auto',
});

new Swiper('.store-slider', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	slidesPerView: 'auto',

});

