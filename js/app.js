$(document).ready(function() {
	$('.product-slider').bxSlider({
	  minSlides: 2,
	  maxSlides: 5,
	  slideWidth: 163,
	  slideMargin: 0,
	  pager: false
	});

	$('.product-slider-yel').bxSlider({
	  minSlides: 2,
	  maxSlides: 5,
	  slideWidth: 163,
	  slideMargin: 0,
	  pager: false
	});

	$('.product-slider-rec').bxSlider({
	  minSlides: 2,
	  maxSlides: 5,
	  slideWidth: 163,
	  slideMargin: 0,
	  pager: false
	});

	$('.public-slider').bxSlider({
	  slideMargin: 0,
	  pager: false
	});

	$('.news-slider').bxSlider({
	  slideMargin: 0,
	  pager: false
	});

	$('.mainslider').bxSlider({
	  slideMargin: 0,
	  slideWidth: 810
	});

	$('.utvar-slider').bxSlider({
	  minSlides: 2,
	  maxSlides: 5,
	  slideWidth: 163,
	  slideMargin: 0,
	  pager: false
	});

	$('.seen-slider').bxSlider({
	  minSlides: 2,
	  maxSlides: 6,
	  slideWidth: 126,
	  slideMargin: 10,
	  pager: false
	});
	  $('.enter').click(function(){
	    $(this).next('.private-dropdown').slideToggle();
	    return false
	  });

	 $('.sr-inner').mCustomScrollbar();

	   $('.menu-btn').click(function(){
	    $('.mobile-dropmenu').slideToggle();
	    $(this).toggleClass('menu-btn-active');
	  });

	   // $('#authModal').arcticmodal();
	   // $('#authSuccessModal').arcticmodal();
	   // $('#toOffer').arcticmodal();
	   // $('#toDelivery').arcticmodal();
	   // $('#toEdit').arcticmodal();
	   // $('#productAdded').arcticmodal();
	   $('#productModal').arcticmodal();

	   $('.search-input').click(function(){
		  $('.search-results').slideToggle();
		  $('.search-form').toggleClass('search-ext');
		});

	   $(".custom-select").selectBox();
	   $(".book-pred-text").readmore({
		    speed: 75,
		    maxHeight: 84,
		    moreLink: '<a href="#" class="bpt-ext">Развернуть</a>',
		    lessLink: '<a href="#" class="bpt-ext">Свернуть</a>'
		});

	     $(".aa-text").readmore({
		    speed: 75,
		    maxHeight: 86,
		    moreLink: '<a href="#" class="bpt-ext">Развернуть</a>',
		    lessLink: '<a href="#" class="bpt-ext">Свернуть</a>'
		});

});