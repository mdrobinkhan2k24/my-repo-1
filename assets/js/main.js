/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".tp-submenu").slideToggle();
			});
	
		  });
	}
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
	});
	$('#mobile-menu-lg').meanmenu({
		meanMenuContainer: '.mobile-menu-lg',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
	});

		////////////////////////////////////////////////////
	// 03. Offcanvas Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});
	
	////////////////////////////////////////////////////
	// 03. Common Js
	//////////////////////////////////
	// 11. Mouse Custom Cursor
	function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        ($(this).is("a", "button") &&
                            $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    itCursor();

	$(".tp-cursor-point-area").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});

	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	$(".tp-cursor-point-area-2").on("mouseenter", function () {
		$(".cursor-inner").addClass("active");
	});

	$(".tp-cursor-point-area-2").on("mouseleave", function () {
		$(".cursor-inner").removeClass("active");
	});



	$("[data-background]").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});


	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');

	$('.tp-header-side-menu > nav > ul > li a, .offcanvas__category > nav > ul > li a').each(function(i, v) {
		$(v).contents().eq(2).wrap('<span class="menu-text"/>');
	});


	if($('.main-menu.menu-style-3 > nav > ul').length > 0){
		$('.main-menu.menu-style-3 > nav > ul').append(`<li id="marker" class="tp-menu-line"></li>`);
	}

	if ($("#tp-offcanvas-lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-offcanvas-lang-toggle').contains(e.target)){
				$(".tp-lang-list").toggleClass("tp-lang-list-open");
			}
			else{
				$(".tp-lang-list").removeClass("tp-lang-list-open");
			}
		});
	}

	if ($("#tp-offcanvas-currency-toggle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-offcanvas-currency-toggle').contains(e.target)){
				$(".tp-currency-list").toggleClass("tp-currency-list-open");
			}
			else{
				$(".tp-currency-list").removeClass("tp-currency-list-open");
			}
		});
	}

	// for header language
	if ($("#tp-header-lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
	
			if (document.getElementById('tp-header-lang-toggle').contains(e.target)){
				$(".tp-header-lang ul").toggleClass("tp-lang-list-open");
			}
			else{
				$(".tp-header-lang ul").removeClass("tp-lang-list-open");
			}
		});
	}

	// for header currency
	if ($("#tp-header-currency-toggle").length > 0) {
		window.addEventListener('click', function(e){
	
			if (document.getElementById('tp-header-currency-toggle').contains(e.target)){
				$(".tp-header-currency ul").toggleClass("tp-currency-list-open");
			}
			else{
				$(".tp-header-currency ul").removeClass("tp-currency-list-open");
			}
		});
	}

	// for header setting
	if ($("#tp-header-setting-toggle").length > 0) {
		window.addEventListener('click', function(e){
	
			if (document.getElementById('tp-header-setting-toggle').contains(e.target)){
				$(".tp-header-setting ul").toggleClass("tp-setting-list-open");
			}
			else{
				$(".tp-header-setting ul").removeClass("tp-setting-list-open");
			}
		});
	}

	$('.tp-hamburger-toggle').on('click', function(){
		$('.tp-header-side-menu').slideToggle('tp-header-side-menu');
	});

	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 06. Search Js
	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tpsearchbar__close").on("click", function () {
		$(".tp-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 07. cartmini Js
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 08. filter
	$(".filter-open-btn").on("click", function () {
		$(".tp-filter-offcanvas-area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".filter-close-btn").on("click", function () {
		$(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".filter-open-dropdown-btn").on("click", function () {
		$(".tp-filter-dropdown-area").toggleClass('filter-dropdown-opened');
	});


	////////////////////////////////////////////////////
	// 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".tp-search-area").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 10. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
			$("#header-sticky-2").removeClass("header-sticky-2");
		} else {
			$("#header-sticky").addClass("header-sticky");
			$("#header-sticky-2").addClass("header-sticky-2");
		}
	});

	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$(".tp-side-menu-5").removeClass("sticky-active");
		} else {
			$(".tp-side-menu-5").addClass("sticky-active");
		}
	});




	////////////////////////////////////////////////////
	// 11. Theme Settings Js

	// settings open btn
	$(".tp-theme-settings-open-btn").on("click", function () {
		$(".tp-theme-settings-area").toggleClass("settings-opened");
	});


	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('.tp-header-search-category select, .tp-shop-area select, .tp-checkout-area select, .profile__area select').niceSelect();

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	var tp_rtl = localStorage.getItem('tp_dir');
	let rtl_setting = tp_rtl == 'rtl' ? true : false;

	// main slider
	var mainSlider = new Swiper('.tp-main-slider-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		effect : 'fade',
		autoplay: {
			delay: 5000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".tp-slider-prev",
			prevEl: ".tp-slider-next",
		},
		pagination: {
			el: ".tp-slider-dot",
			clickable: true,
		},
	});

	mainSlider.on('slideChangeTransitionStart', function (realIndex) {
		if ($('.swiper-slide.swiper-slide-active, .tp-slider-item .is-light').hasClass('is-light')) {
			$('.tp-slider-variation').addClass('is-light');
		} else {
			$('.tp-slider-variation').removeClass('is-light');
		}
	});


	////////////////////////////////////////////////////
	// tp-slider__active-2
	var mainSlider = new Swiper('.tp-slider-active-2', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		effect : 'fade',
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".tp-slider__dot",
			clickable: true,
		},
		
		// Navigation arrows
		navigation: {
			nextEl: ".tp-slider-prev",
			prevEl: ".tp-slider-next",
		},
		breakpoints: {
			'1700':{

				slidesPerView:1,
			},
			'1400':{
				slidesPerView:1,
			},
			'1200':{

				slidesPerView:1,
			},
			'767': {
				slidesPerView:1,
			},
			'576': {
				slidesPerView:1,
				
			},
			'0': {
				slidesPerView:1,
			},
		},
	});

	////////////////////////////////////////////////////
	// tp-slider__active-3
	var mainSlider = new Swiper('.tp-slider-active-3', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		effect : 'fade',
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".tp-slider__dot",
		},
		
		// Navigation arrows
		navigation: {
			nextEl: ".tp-slider-prev",
			prevEl: ".tp-slider-next",
		},
		breakpoints: {
			'1700':{

				slidesPerView:1,
			},
			'1400':{
				slidesPerView:1,
			},
			'1200':{

				slidesPerView:1,
			},
			'767': {
				slidesPerView:1,
			},
			'576': {
				slidesPerView:1,
				
			},
			'0': {
				slidesPerView:1,
			},
		},
	});
	////////////////////////////////////////////////////
	// tp testimonial slider activation
	if($('.tp-testimonial-active').length > 0){
		var slider = new Swiper(".tp-testimonial-active", {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			arrow: true,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			breakpoints: {
				'1700':{

					slidesPerView:4,
				},
				'1600':{

					slidesPerView:4,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{

					slidesPerView:3,
				},
				'767': {
					slidesPerView:3,
				},
				'576': {
					slidesPerView:3,
				},
				'0': {
					slidesPerView:1,
				},
			},
		});
	}

	////////////////////////////////////////////////////
	// tp testimonial-2 slider activation
	if($('.tp-testimonial-active-2').length > 0){
		var slider = new Swiper(".tp-testimonial-active-2", {
			slidesPerView: 4,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			breakpoints: {
				'1700':{

					slidesPerView:3,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{

					slidesPerView:3,
				},
				'992':{

					slidesPerView:3,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
			},
		});
	}

	// brand Active
	var slider = new Swiper('.tp-brand-active', {
		slidesPerView: 4,
		spaceBetween: 25,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// product Active
	var slider = new Swiper('.tp-prduct-active', {
		slidesPerView: 6,
		spaceBetween: 35,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 6,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	
	// product Active-2
	var slider = new Swiper('.tp-prduct-active-2', {
		slidesPerView: 1,
		spaceBetween: 35,
		loop: true,
		autoplay: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	// product Active-3
	var slider = new Swiper('.tp-prduct-active-3', {
		slidesPerView: 1,
		spaceBetween: 35,
		loop: true,
		autoplay: true,
		breakpoints: {
			'1400': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	// portfolio Active
	var slider = new Swiper('.tp-portfolio-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		centeredSlides: true,
		autoplay: true,
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};

	////////////////////////////////////////////////////
	// 16. Wow Js
	new WOW().init();

	if ($(".tp-product-info").length > 0) { 
		function tp_ecommerce() {
			$('.tp-cart-minus').on('click', function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
		
			$('.tp-cart-plus').on('click', function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
	
			$("#slider-range").slider({
				range: true,
				min: 0,
				max: 500,
				values: [75, 300],
				slide: function (event, ui) {
					$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
				}
			});
	
			$("#amount").val("$" + $("#slider-range").slider("values", 0) +
				" - $" + $("#slider-range").slider("values", 1));
	
			$("#slider-range-offcanvas").slider({
				range: true,
				min: 0,
				max: 500,
				values: [75, 300],
				slide: function (event, ui) {
					$("#amount-offcanvas").val("$" + ui.values[0] + " - $" + ui.values[1]);
				}
			});
	
			$("#amount-offcanvas").val("$" + $("#slider-range-offcanvas").slider("values", 0) +
				" - $" + $("#slider-range-offcanvas").slider("values", 1));
		
			
	
			$('.tp-checkout-payment-item label').on('click', function () {
				$(this).siblings('.tp-checkout-payment-desc').slideToggle(400);
				
			});
			
	
			$('.tp-color-variation-btn').on('click', function () {
				$(this).addClass('active').siblings().removeClass('active');
			});
			
	
			$('.tp-size-variation-btn').on('click', function () {
				$(this).addClass('active').siblings().removeClass('active');
			});
		
			////////////////////////////////////////////////////
			// 17. Show Login Toggle Js
			$('.tp-checkout-login-form-reveal-btn').on('click', function () {
				$('#tpReturnCustomerLoginForm').slideToggle(400);
			});
		
			////////////////////////////////////////////////////
			// 18. Show Coupon Toggle Js
			$('.tp-checkout-coupon-form-reveal-btn').on('click', function () {
				$('#tpCheckoutCouponForm').slideToggle(400);
			});
		
			////////////////////////////////////////////////////
			// 19. Create An Account Toggle Js
			$('#cbox').on('click', function () {
				$('#cbox_info').slideToggle(900);
			});
		
			////////////////////////////////////////////////////
			// 20. Shipping Box Toggle Js
			$('#ship-box').on('click', function () {
				$('#ship-box-info').slideToggle(1000);
			});
	
			$("#slider-range").slider({
				range: true,
				min: 0,
				max: 500,
				values: [75, 300],
				slide: function (event, ui) {
				  $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
				},
			});
		}
		tp_ecommerce();
	}

	// filter
	$(".filter-open-btn").on("click", function () {
		$(".tp-filter-offcanvas-area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".filter-close-btn").on("click", function () {
		$(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".filter-open-dropdown-btn").on("click", function () {
		$(".tp-filter-dropdown-area").toggleClass('filter-dropdown-opened');
	});

	// 21. Counter Js
	new PureCounter();
	
	////////////////////////////////////////////////////
	// 18. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});


	////////////////////////////////////////////////////
	// 19. Line Animation Js
	if ($('#marker').length > 0) {
		function tp_tab_line(){
			var marker = document.querySelector('#marker');
			var item = document.querySelectorAll('.menu-style-3  > nav > ul > li');
			var itemActive = document.querySelector('.menu-style-3  > nav > ul > li.active');

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('mouseenter', (e)=>{
					indicator(e.target);
				});
				
			});

			
			var activeNav = $('.menu-style-3 > nav > ul > li.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.menu-style-3 > nav > ul > li').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('li');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line();
	}


	if ($('#productTabMarker').length > 0) {
		function tp_tab_line_2(){
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.tp-product-tab button');
			var itemActive = document.querySelector('.tp-product-tab .nav-link.active');

			// rtl settings
			var tp_rtl = localStorage.getItem('tp_dir');
			let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('click', (e)=>{
					indicator(e.target);
				});
			});
			
			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.tp-product-tab button').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line_2();
	}

	////////////////////////////////////////////////////
	// 20. Video Play Js
	var play = false;
	$('.tp-video-toggle-btn').on('click', function(){

		if(play === false){
			$('.tp-slider-video').addClass('full-width');
			$(this).addClass('hide');
			play = true;

			$('.tp-slider-video').find('video').each(function() {
				$(this).get(0).play();
			});
		}else{
			$('.tp-slider-video').removeClass('full-width');
			$(this).removeClass('hide');
			play = false;
			$('.tp-slider-video').find('video').each(function() {
				$(this).get(0).pause();
			});
		}

	});

	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	if($('#password-show-toggle').length > 0){
		var btn = document.getElementById('password-show-toggle');
		
		btn.addEventListener('click', function(e){
			
			var inputType = document.getElementById('tp_password');
			var openEye = document.getElementById('open-eye');
			var closeEye = document.getElementById('close-eye');
	
			if (inputType.type === "password") {
				inputType.type = "text";
				openEye.style.display = 'block';
				closeEye.style.display = 'none';
			 } else {
				inputType.type = "password";
				openEye.style.display = 'none';
				closeEye.style.display = 'block';
			 }
		});
	}
	
	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	  }

	if ($('.infinite-container').length > 0) {
		let ias = new InfiniteAjaxScroll('.infinite-container', {
			item: '.infinite-item',
			next: '.infinite-next-link',
			pagination: '.infinite-pagination'
		});

	}

	if ($('.load-more-content').length > 0) {
		$('.load-more-content').btnLoadmore({
			showItem : 9,
			whenClickBtn : 3,
			textBtn : 'Load More Products',
			classBtn : 'tp-btn tp-btn-border tp-btn-border-primary'
		});
	}

	// // countDown
	// var countDownDate = new Date("Oct 16,2023 00:00:00").getTime();
	// var x = setInterval(function(){
	// var now = new Date().getTime();
	// var distance = countDownDate - now;
	
	// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	// document.getElementById("days").innerHTML = days;
	// document.getElementById("hours").innerHTML = hours;
	// document.getElementById("minutes").innerHTML = minutes;
	// document.getElementById("seconds").innerHTML = seconds;
	// 	if(distance < 0){
	// 		clearInterval(x);
	// 		document.getElementById("days").innerHTML = "00";
	// 		document.getElementById("hours").innerHTML = "00";
	// 		document.getElementById("minutes").innerHTML = "00";
	// 		document.getElementById("seconds").innerHTML = "00";
	// 	}
	// },100);


})(jQuery);