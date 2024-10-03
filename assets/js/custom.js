//============================== header =========================
jQuery(document).ready(function(){
	'use strict';

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

	$(window).on('load', function () {
    $('#preloader').fadeOut(300);
  });

	$(window).on('load',function(){
		$('.scrolling').on('click',function(e){
			e.preventDefault();e.stopPropagation();
			$('.navbar-collapse').removeClass('show');
			var target=$(this).attr('href');
			$(target).velocity('scroll',{
				duration:800,
				offset:-50,
				easing:'easeOutExpo',
				mobileHA:false
			});
    });
    
    var header_area = $('.header');
    var main_area = header_area.find('.navbar');
    var zero = 0;
    var navbarSticky = $('.navbar-sticky');

    $(window).scroll(function(){
      var st = $(this).scrollTop();
      if (st > zero){
        navbarSticky.addClass('navbar-scrollUp');
      } else {
         navbarSticky.removeClass('navbar-scrollUp');
      }
      zero = st;

      if(main_area.hasClass('navbar-sticky') && ( $(this).scrollTop() <= 500 || $(this).width() <= 300)){
        main_area.removeClass('navbar-scrollUp');
        main_area.removeClass('navbar-sticky').appendTo(header_area);
        header_area.css('height', 'auto');
      }else if( !main_area.hasClass('navbar-sticky') && $(this).width() > 300 && $(this).scrollTop() > 500 ){
        header_area.css('height', header_area.height());
        main_area.addClass('navbar-scrollUp');
        main_area.css({'opacity': '0'}).addClass('navbar-sticky');
        main_area.appendTo($('body')).animate({'opacity': 1});
      }
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
	});

});


//============================== ALL DROPDOWN ON HOVER =========================
	if($('.navbar').width() > 750)
	  {
	    $('.nav .dropdown').on('mouseover', function() {
			'use strict';
	          $(this).addClass('show');
	      }),
	    $('.nav .dropdown').on('mouseleave', function() {
			'use strict';
	          $(this).removeClass('show');
	      });
	  }

	$('.nav-category .dropdown-submenu ').hover(function() {
		'use strict';
    	$(this).addClass('show');
    },
    function() {
		'use strict';
        $(this).removeClass('show');
		});
		


		/*======== 3. SIDEBAR MENU ========*/
		var sidebar = $(".sidebar")
		if (sidebar.length != 0) {
			$(".sidebar .nav > .has-sub > a").click(function () {
				$(this).parent().siblings().removeClass('expand')
				$(this).parent().toggleClass('expand')
			})

			$(".sidebar .nav > .has-sub .has-sub > a").click(function () {
				$(this).parent().toggleClass('expand')
			})
		}


		/*======== 2. MOBILE OVERLAY ========*/
		if ($(window).width() < 768) {
			$("#sidebarToggle").on("click", function() {
				$("body").css("overflow", "hidden");
				$('body').prepend('<div class="mobile-sticky-body-overlay"></div>')
			});
	
			$(document).on("click", '.mobile-sticky-body-overlay', function(e) {
				$(this).remove();
				$("#body").removeClass("sidebarMobileIn");
				$("body").css("overflow", "auto");
			});
		}
	
	
		/*======== 4. SIDEBAR TOGGLE FOR MOBILE ========*/
		if ($(window).width() < 768) {
			$(document).on("click", "#sidebarToggle", function(e) {
				e.preventDefault();
				var min = "sidebarMobileIn",
					body = "#body";
				$(body).hasClass(min)
					? $(body)
							.removeClass(min)
					: $(body)
							.addClass(min)
			});
		}

	


//============================== SEARCH =========================
jQuery(document).ready(function(){
	'use strict';
	$('.searchBox a').on('click',function() {
	    $('.searchBox .dropdown-menu').toggleClass('display-block');
	    $('.searchBox a i').toggleClass('fa-times').toggleClass('fa-search');
	});

	// Home Version 4 mobile menu searchbox toggle
	$('#searchButton').on('click', function(x){
		x.preventDefault();
		$('#searchbox').toggleClass('visibleIt');
	});

});
//============================== RS-SLIDER =========================


//============================== SLIDER REVULATION BANNER V1 =========================
var bannerV1 = $('#rev_slider_25_1');
if (bannerV1.length !== 0) {
	$('#rev_slider_25_1').show().revolution ({
		sliderType: 'standard',
		jsFileLocation: '//revs.iamabdus.com/revslider/public/assets/js/',
		sliderLayout: 'fullwidth',
		dottedOverlay: 'none',
		delay: 9000,
		navigation: {
			keyboardNavigation: 'off',
			keyboard_direction: 'horizontal',
			mouseScrollNavigation: 'off',
			mouseScrollReverse: 'default',
			onHoverStop: 'on',
			touch: {
				touchenabled: 'on',
				touchOnDesktop: 'on',
				swipe_threshold: 0,
				swipe_min_touches: 1,
				swipe_direction: 'horizontal',
				drag_block_vertical: false
			},
			arrows: {
				style: 'custom',
				enable: true,
				hide_onmobile: true,
				hide_under: 0,
				hide_onleave: true,
				hide_delay: 200,
				hide_delay_mobile: 1200,
				tmp: '',
				left: {
					h_align: 'left',
					v_align: 'center',
					h_offset: 20,
					v_offset: 0
				},
				right: {
					h_align: 'right',
					v_align: 'center',
					h_offset: 20,
					v_offset: 0
				}
			},
			bullets: {
				enable: true,
				hide_onmobile: false,
				style: 'hesperiden',
				hide_onleave: false,
				direction: 'horizontal',
				h_align: 'center',
				v_align: 'bottom',
				h_offset: 0,
				v_offset: 20,
				space: 5,
				tmp: ''
			}
		},
		responsiveLevels: [1240, 1025, 778, 480],
		visibilityLevels: [1240, 1025, 778, 480],
		gridwidth: [1170, 1025, 769, 480],
		gridheight: [526, 460, 345, 345],
		lazyType: 'none',
		shadow: 0,
		spinner: 'off',
		stopLoop: 'off',
		stopAfterLoops: -1,
		stopAtSlide: -1,
		shuffle: 'off',
		autoHeight: 'off',
		disableProgressBar: 'on',
		hideThumbsOnMobile: 'off',
		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		debugMode: false,
		fallbacks: {
			simplifyAll: 'off',
			nextSlideOnWindowFocus: 'off',
			disableFocusListener: false
		}
	});
}

//============================== SLIDER REVULATION BANNER V4 =========================


//============================== SLICK-CAROUSEL =========================
jQuery(document).ready(function() {
	'use strict';

	var featuredProductsSlider = $('.featuredProductsSlider');
  if(featuredProductsSlider.length !== 0){
    featuredProductsSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			autoplay: false,
			infinite: true,
			dots: false,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3.139,
						slidesToScroll: 1					
					}
				}
			]
    });
  }


	var banner_slider = $('.banner_slider');
	if(banner_slider.length !== 0){
		banner_slider.slick({
			autoplay:false,
			autoplaySpeed:10000,
			speed:600,
			slidesToShow:1,
			slidesToScroll:1,
			pauseOnHover:false,
			dots:true,
			pauseOnDotsHover:true,
			cssEase:'linear',
			fade:true,
			draggable:false,
			arrows:true,
			appendDots: ".banner_slider_wrapper",
			appendArrows: ".banner_slider_inner",
			prevArrow:'<button class="PrevArrow"></button>',
			nextArrow:'<button class="NextArrow"></button>', 
		});
	}


	var featured_collection_slider = $('.featured_collection_slider');
  if(featured_collection_slider.length !== 0){
    featured_collection_slider.slick({
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 9999,
					settings: 'unslick'
				},
	
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2.092,
						slidesToScroll: 1
					}
				}
			]
    });
  }
	

	$(window).on('resize', function() {
		if(featured_collection_slider.length !== 0) {
			featured_collection_slider.slick('resize');
		}
	});


	var partnersLogoSlider = $('.partnersLogoSlider');
  if(partnersLogoSlider.length !== 0){
    partnersLogoSlider.slick({
			autoplay: false,
			autoplaySpeed: 2000,
			dots: false,
			arrows: false,
			slidesToShow: 5,
			slidesToScroll: 3,
			infinite: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 670,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2					
					}
				}
			]
    });
  }

	var featuredCollectionSlider = $('.featuredCollectionSlider');
  if(featuredCollectionSlider.length !== 0){
    featuredCollectionSlider.slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true,
			autoplay: false,
			infinite: true,
			dots: false,
			autoplaySpeed: 4000,
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1					
					}
				},
				{
					breakpoint: 670,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1					
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2					
					}
				}
			]
    });
  }
	

	var dealSlider = $('.dealSlider');
  if(dealSlider.length !== 0){
    dealSlider.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			autoplay: false,
			infinite: true,
			dots: false,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 670,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1					
					}
				}
			]
    });
  }
	
	var testimonialSlider = $('.testimonialSlider');
  if(testimonialSlider.length !== 0){
    testimonialSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: false,
			infinite: true,
			dots: false,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 480,
					settings: {
						autoplay: false,
						arrows: false					
					}
				}
			]
    });
  }


	var categorySlider = $('.categorySlider');
	if(categorySlider.length !== 0){
		categorySlider.slick({
			dots: false,
			speed: 1000,
			arrows: true
		});
	}

	var testimoni_carousel = $('.testimoni-carousel');
	if(testimoni_carousel.length !== 0){
		testimoni_carousel.slick({
			arrows: false,
			autoplay: false,
			infinite: true,
			dots: false,
			autoplaySpeed: 3000
		});
	}

	var productGallery = $('.productGallery');
  if(productGallery.length !== 0){
    productGallery.slick({
			arrows: true,
			autoplay: false,
			infinite: true,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						slidesToShow: 1
					}
				}
			]
    });
	}

	//============================== SLIDER REVULATION BANNER V4 =========================
	var bannerV4 = $('#rev_slider_26_1');
	if (bannerV4.length !== 0) {
		$('#rev_slider_26_1').show().revolution ({
			sliderLayout: 'fullwidth',
			dottedOverlay: 'none',
			delay: 9000,
			navigation: {
				keyboardNavigation: 'off',
				keyboard_direction: 'horizontal',
				mouseScrollNavigation: 'off',
				mouseScrollReverse: 'default',
				onHoverStop: 'on',
				touch: {
					touchenabled: 'on',
					touchOnDesktop: 'on',
					swipe_threshold: 0,
					swipe_min_touches: 1,
					swipe_direction: 'horizontal',
					drag_block_vertical: false
				},
				arrows: {
					style: 'custom',
					enable: true,
					hide_onmobile: true,
					hide_under: 0,
					hide_onleave: true,
					hide_delay: 200,
					hide_delay_mobile: 1200,
					tmp: '',
					left: {
						h_align: 'left',
						v_align: 'center',
						h_offset: 20,
						v_offset: 0
					},
					right: {
						h_align: 'right',
						v_align: 'center',
						h_offset: 20,
						v_offset: 0
					}
				}
			},
			responsiveLevels: [1240, 1025, 778, 480],
			visibilityLevels: [1240, 1025, 778, 480],
			gridwidth: [1170, 1025, 769, 480],
			gridheight: [631, 518, 431, 400],
			lazyType: 'none',
			shadow: 0,
			spinner: 'off',
			stopLoop: 'off',
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: 'off',
			autoHeight: 'off',
			disableProgressBar: 'on',
			hideThumbsOnMobile: 'off',
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: 'off',
				nextSlideOnWindowFocus: 'off',
				disableFocusListener: false
			}
		});
	}
	
	//============================== Count down triger =========================
	
	var simple_timer = $('#simple_timer')
  
  if(simple_timer.length != 0){
    simple_timer.syotimer({
      year: 2022,
			month: 10,
			day: 9,
			hour: 20,
			minute: 30
    })
  };

 	
	var slider_timer = $('.slider_timer')
  
  if(slider_timer.length != 0){
    slider_timer.syotimer({
      year: 2022,
			month: 10,
			day: 9,
			hour: 20,
			minute: 30
    })
  };


	//============================== iziToast  =========================
	$('[data-toast]').on('click', function() {
		var b = $(this),
			c = b.data('toast-type'),
			d = b.data('toast-icon'),
			e = b.data('toast-position'),
			f = b.data('toast-title'),
			g = b.data('toast-message'),
			h = {
				class: 'iziToast-' + c || '',
				title: f || 'Title',
				message: g || 'toast message',
				animateInside: !1,
				position: 'topRight',
				progressBar: !1,
				icon: d,
				timeout: 3200,
				transitionIn: 'fadeInLeft',
				transitionOut: 'fadeOut',
				transitionInMobile: 'fadeIn',
				transitionOutMobile: 'fadeOut'
			};
		iziToast.show(h);
	});


	$('.btn-wishlist').on('click', function() {
		var b = $(this).data('iteration') || 1,
			c = {
				title: 'Product',
				animateInside: !1,
				position: 'topRight',
				progressBar: !1,
				timeout: 3200,
				transitionIn: 'fadeInLeft',
				transitionOut: 'fadeOut',
				transitionInMobile: 'fadeIn',
				transitionOutMobile: 'fadeOut'
			};
		switch (b) {
			case 1:
				$(this).addClass('active'), c.class = 'iziToast-info', c.message = 'added to your wishlist!', c.icon = 'icon-bell';
				break;
			case 2:
				$(this).removeClass('active'), c.class = 'iziToast-danger', c.message = 'removed from your wishlist!', c.icon = 'icon-ban';
		}
		iziToast.show(c), b++, b > 2 && (b = 1), $(this).data('iteration', b);
	});
	//============================== SELECT BOX =========================
	// $('.select-drop').selectbox();

	var select_drop = $(".select-drop");

  if (select_drop.length != 0){
    select_drop.selectbox();
  }
	
	//============================== SIDE NAV MENU TOGGLE =========================
	// $('.side-nav li a').click(function() {
	// 	$(this).find('i').toggleClass('fa fa-minus fa fa-plus');
	// });

	//============================== RATEO =========================
	var ratingDefault = $('.add-rating-default');
	if (ratingDefault.length !== 0) {
		ratingDefault.rateYo({
			'starWidth': '14px',
			'spacing': '5px',
			'normalFill': '#969696',
			'ratedFill': '#fec701',
			'starSvg': '<svg xmlns="http://www.w3.org/2000/svg" width=24 height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
		});
	}

	var ratingLarge = $('.add-rating-large');
	if (ratingLarge.length !== 0) {
		ratingLarge.rateYo({
			'starWidth': '20px',
			'spacing': '5px',
			'normalFill': '#969696',
			'ratedFill': '#fec701',
			'starSvg': '<svg xmlns="http://www.w3.org/2000/svg" width=24 height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
		});
	}

	/*---------------------------------
    ---> quantity
    ---------------------------------*/
    $('.incr-btn').on('click', function(e) {
		var $button = $(this);
		var newVal = 0;
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') === 'increase') {
            newVal = parseFloat(oldValue) + 1;
        } else {
         // Don't allow decrementing below 1
            if (oldValue > 1) {
                 newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
		});
		
	// share-all
	$('.share-all .social-link').on('click', function () {
		$(this).toggleClass('enable');
		$('.share-all .all-link').toggleClass('active');
	});

	//============================== PRICE SLIDER RANGER =========================
  var nonLinearStepSlider = document.getElementById('slider-non-linear-step');
  if(nonLinearStepSlider){
    noUiSlider.create(nonLinearStepSlider, {
      connect: true,
      start: [20, 300],
      range: {
          'min': [20],
          'max': [300]
      }
    });
  }

  var sliderValue = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
  ];

  // Display the slider value and how far the handle moved
  // from the left edge of the slider.
  var priceRange = document.getElementById('price-range');
  if (priceRange) {
    nonLinearStepSlider.noUiSlider.on('update', function(values, handle) {
      sliderValue[handle].innerHTML = '$' + Math.floor(values[handle]);
    });
  }


	//============================== PRODUCT SINGLE SLIDER =========================
	(function ($) {
		$('#thumbcarousel').carousel(0);
		var $thumbItems = $('#thumbcarousel .item');
		$('#carousel').on('slide.bs.carousel', function (event) {
			var $slide = $(event.relatedTarget);
			var thumbIndex = $slide.data('thumb');
			var curThumbIndex = $thumbItems.index($thumbItems.filter('.active').get(0));
			if (curThumbIndex > thumbIndex) {
				$('#thumbcarousel').one('slid.bs.carousel', function (event) {
					$('#thumbcarousel').carousel(thumbIndex);
				});
				if (curThumbIndex === ($thumbItems.length - 1)) {
					$('#thumbcarousel').carousel('next');
				} else {
					$('#thumbcarousel').carousel(numThumbItems - 1);
				}
			} else {
				$('#thumbcarousel').carousel(thumbIndex);
			}
		});
	})(jQuery);


	$('.quick-view .btn-block').click(function () {
		$('.quick-view').modal('hide');
	});

	//============================== VIDEOBOX =========================
	var videoBox = $('.video-box i');
	videoBox.on('click', function(){
		var video = '<iframe class="embed-responsive-item"  allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
		$(this).replaceWith(video);
	});


	//============================== FILTER CATEGORY =========================
	var filterActive;

	function filterCategory(category) {

		if (filterActive != category) {
			
			// reset results list
			$('.filter-cat-results .f-cat').removeClass('active');
			
			// elements to be filtered
			$('.filter-cat-results .f-cat')
					.filter('[data-cat="' + category + '"]')
					.addClass('active');
			// console.log(category)
			// reset active filter
			filterActive = category;
		}
	}

	$('.f-cat').addClass('active');

	$('.filtering select').change(function() {
			if ($(this).val() == 'cat-all') {
					$('.filter-cat-results .f-cat').addClass('active');
					filterActive = 'cat-all';
			} else {
				filterCategory($(this).val());
		}
	});


	$(document).ready(function(e) {
    $(".showonhover").click(function(){
      $("#selectfile").trigger('click');
    });
	});
	

	$(document).ready(function(e) {
    $(".profileAttachInner2").click(function(){
      $("#selectfile2").trigger('click');
    });
	});
	
	$(document).ready(function(e) {
    $(".profileAttachInner3").click(function(){
      $("#selectfile3").trigger('click');
    });
  });


	//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================
	var allIcons = $('#faqAccordion .panel-heading i.fa');
	$('#faqAccordion .panel-heading').click(function () {
		allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		$(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	});

	var allIconsOne = $('#accordionOne .panel-heading i.fa');
	$('#accordionOne .panel-heading').click(function () {
		allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		$(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	});

	var allIconsTwo = $('#accordionTwo .panel-heading i.fa');
	$('#accordionTwo .panel-heading').click(function () {
		allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		$(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	});

	var allIconsThree = $('#togglesOne .panel-heading i.fa');
	$('#togglesOne .panel-heading').click(function () {
		allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		$(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	});

	var allIconsFour = $('#togglesTwo .panel-heading i.fa');
	$('#togglesTwo .panel-heading').click(function () {
		allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
		$(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	});

	$('[data-toggle="tooltip"]').tooltip();

	
  /*======== 12. MAP ========*/
  function initialize() {
    var myLatLng = { lat: 53.385873, lng: -1.471471 };

    //Custom Style
    var styles = [];
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: new google.maps.LatLng(53.385873, -1.471471),
      styles: styles

    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var image = 'assets/img/marker.png';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }
  var mapId = $('#map');
  if (mapId.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }


});

/*======== Google Analytics  ========*/