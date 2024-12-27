import * as mainFunc from "./modules/func.js";

mainFunc.isWebp();

const swiper = new Swiper('.swiper-container-header', {
	slidesPerView: 1,
	spaceBetween: 0,
	pagination: {
		el: ".header__pag",

	},
	navigation: {
		nextEl: ".header__next",
		prevEl: ".header__prev",
	},
})

const swiper3 = new Swiper('.swiper-container-article', {
	slidesPerView: 'auto',
	spaceBetween: 20,

})

let swiperCMSglobalSetting = {
	spaceBetween: 0,
	slidesPerView: 1,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	// navigation: {
	//   nextEl: '.swiper-button-next',
	//   prevEl: '.swiper-button-prev',
	// },
	pagination: {
		el: '.header__pag',
	}
}

$(".new-items__slider").each(function (index, element) {
	var $this = $(this);
	var swiper = new Swiper(this, swiperCMSglobalSetting);
});

jQuery("document").ready(function ($) {

	var nav = $('.menu-scroll');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass("scroll");
			nav.addClass("scroll1");
		} else {
			nav.removeClass("scroll");
			nav.removeClass("scroll1");
		}
	});

	var nav2 = $('.menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {

			nav2.addClass("scroll1");
		} else {

			nav2.removeClass("scroll1");
		}
	});

});




function stickyImages() {

	let _self = this;

	const links = document.querySelectorAll(`.js-link-94`);
	const linkWrapper = document.querySelector(`.js-link-wrapper-94`);

	const imageWrapper = document.querySelector(`.js-image-wrapper-94`);
	const images = document.querySelectorAll(`.js-image-94`);

	gsap.set(images, {
		scale: 0
	});

	const firstImage = document.querySelector(`.js-image-1`);

	gsap.to(firstImage, {
		duration: 0.3,
		scale: 1,
		ease: 'power2.out'
	});

	const linkOffsets = [
		40, -35, -210
	];

	links.forEach((link, index) => {

		link.addEventListener('mouseover', () => {

			const top = link.getBoundingClientRect().top - linkWrapper.getBoundingClientRect().top + linkOffsets[index];

			gsap.to(imageWrapper, {
				duration: 0.5,
				top: top,
				ease: 'power2.out'
			});

			images.forEach(image => {
				let id = image.data(id);
				let id2 = link.data(id);
				if (image.dataset.id === link.dataset.id2) {

					gsap.to(image, {
						duration: 0.3,
						scale: 1,
						ease: 'power2.out'
					});

					image.style.zIndex = 1;

				} else {

					image.style.zIndex = 0;

					gsap.to(image, {
						duration: 0,
						scale: 0,
						delay: 0.35,
					});

				}

			});

		});

	});

}

stickyImages();

//parallax 
$(".live__wrapper").mousemove(function (e) {
	parallaxIt(e, ".live__col", -40);
	parallaxIt(e, "img", -10);
});

function parallaxIt(e, target, movement) {
	var $this = $(".live__wrapper");
	var relX = e.pageX - $this.offset().left;
	var relY = e.pageY - $this.offset().top;

	TweenMax.to(target, 1, {
		x: (relX - $this.width() / 2) / $this.width() * movement,
		y: (relY - $this.height() / 2) / $this.height() * movement
	});
}


$('.tech__item').on('mouseenter', function () {
	$('.tech__item').not(this).find('.tech__text').slideUp(250)
	$('.tech__item').not(this).removeClass('active')
	$(this).find('.tech__text').slideDown(250)
	$(this).addClass('active')
})

var trigger1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".new-items",
		start: "top center",
		end: "300px center",
		scrub: 1,
		markers: false
	}
})
trigger1
	.to(".new-items__title svg", { scale: .5, ease: "none", duration: 2 })

var trigger2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".live",
		start: "-200px center",
		end: "300px center",
		scrub: 2,
		markers: false
	}
})
trigger2
	.to(".live__title", { x: 0, ease: "none", duration: 2 })

$('.menu__trigger').click(function () {
	$('.menu').toggleClass('active');
	$('.megamenu').fadeToggle(100);
	$('body').toggleClass('overflow-body')
})
if ($(window).width() < 980) {
	const swiper4 = new Swiper('.new-items__selectors', {
		slidesPerView: 'auto',
		spaceBetween: 10,

	})
	const swiper5 = new Swiper('.product-mob', {
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: ".header__pag",

		},
	})
}

$('.select-radio input').on('change', function () {
	$(this).parents('.select-radio').find('label').removeClass('active')
	if ($(this).is(':checked')) {
		$(this).parents('label').addClass('active');
	}
	else {
		$(this).parents('label').removeClass('active');
	}
})

$('.select-check input').on('change', function () {
	if ($(this).is(':checked')) {
		$(this).parents('li').addClass('active');
	}
	else {
		$(this).parents('li').removeClass('active');
	}
})

$('.plate-fade input').on('change', function () {
	$(this).parents('.plate-fade').find('li').removeClass('active')
	if ($(this).is(':checked')) {
		$(this).parents('li').addClass('active');
	}
	else {
		$(this).parents('li').removeClass('active');
	}
})

$('.sidebar-trigger').click(function (e) {
	e.preventDefault();
	let data = $(this).data();
	let id = $('.sidebar-trigger').attr('id')
	let $this = $(this);
	$('.left-sidebar').removeClass('active');
	$($(this).attr('data-show')).addClass('active');
	$('body').addClass('overflow-body')
})

$('.left-sidebar .close, .left-sidebar .back').click(function () {
	$('.left-sidebar').removeClass('active');
	$('body').removeClass('overflow-body')
})

$(document).ready(function () {
	$('.plus').click(function () {
		let input = $(this).siblings('.quantity');
		let currentValue = parseInt(input.val());
		input.val(currentValue + 1);
	});

	$('.minus').click(function () {
		let input = $(this).siblings('.quantity');
		let currentValue = parseInt(input.val());
		if (currentValue > 1) {
			input.val(currentValue - 1);
		}
	});

	// Дополнительно: предотвращение ввода значения меньше 1 вручную
	$('.quantity').on('input', function () {
		if ($(this).val() < 1) {
			$(this).val(1);
		}
	});
});

var $range = $(".js-range-slider"),
	$inputFrom = $(".from input"),
	$inputTo = $(".to input"),
	instance,
	min = 0,
	max = 1000,
	from = 0,
	to = 0;

$range.ionRangeSlider({
	skin: "round",
	type: "double",
	min: min,
	max: max,
	from: 0,
	to: 1000,
	onStart: updateInputs,
	onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
	from = data.from;
	to = data.to;

	$inputFrom.prop("value", from);
	$inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
	var val = $(this).prop("value");

	// validate
	if (val < min) {
		val = min;
	} else if (val > to) {
		val = to;
	}

	instance.update({
		from: val
	});
});

$inputTo.on("input", function () {
	var val = $(this).prop("value");

	// validate
	if (val < from) {
		val = from;
	} else if (val > max) {
		val = max;
	}

	instance.update({
		to: val
	});
});

Fancybox.bind('[data-fancybox="gallery"]', {
	// Your custom options for a specific gallery
})

$('.searching .close').click(function () {
	$('.searching').fadeOut(100);
	$('body').removeClass('overflow-body')
});

$('.menu-search').click(function (e) {
	e.preventDefault();
	$('.searching').fadeIn(100);
	$('body').addClass('overflow-body')
})

$('.megamenu__col1 a').on('mouseover', function () {
	$('.megamenu__col2').hide();
	$($(this).attr('data-cat')).show()
})
$('.megamenu__col2 a').on('mouseover', function () {
	$('.megamenu__col4').hide();
	$($(this).attr('data-item')).show()
})

$('.plate-trigger-inner').click(function () {
	$(this).siblings('.plate-fade').toggle(100);
	$(this).toggleClass('active')
})

jQuery(function ($) {
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $("menu .plate-trigger");
		let inner = div.find('.plate-fade')
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			inner.hide();
			$('.menu .plate-trigger-inner').removeClass('active')
		}
	});
});
jQuery(function ($) {
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".sort.plate-trigger");
		let inner = div.find('.plate-fade')
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			inner.hide();
			$('.sort .plate-trigger-inner').removeClass('active')
		}
	});
});