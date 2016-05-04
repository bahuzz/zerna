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

});