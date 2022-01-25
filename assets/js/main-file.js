// MIT License

// Copyright (c) 2022 John Oseni

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'use strict';


$(window).on('load', function () {
	$(".loader").fadeOut();
	$("#preloder").delay(900).fadeOut("slow");

	if ($('#product-filter').length > 0) {
		var containerEl = document.querySelector('#product-filter');
		var mixer = mixitup(containerEl);
	}

});

(function ($) {

	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});

	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});


	/*------------------
		Intro Slider
	--------------------*/
	if ($('.intro-slider').length > 0) {
		var $scrollbar = $('.scrollbar');
		var $frame = $('.intro-slider');
		var sly = new Sly($frame, {
			horizontal: 1,
			itemNav: 'forceCentered',
			activateMiddle: 1,
			smart: 1,
			activateOn: 'click',
			//mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 10,
			scrollBar: $scrollbar,
			//scrollBy: 1,
			activatePageOn: 'click',
			speed: 200,
			moveBy: 600,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
		}).init();
	}



	/*------------------
		ScrollBar
	--------------------*/
	$(".cart-table, .product-thumbs").niceScroll({
		cursorborder: "",
		cursorcolor: "#afafaf",
		boxzoom: false
	});



	/*------------------
		Single Product
	--------------------*/
	$('.product-thumbs-track > .pt').on('click', function () {
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		if (imgurl != bigImg) {
			$('.product-big-img').attr({
				src: imgurl
			});
		}
	})

})(jQuery);