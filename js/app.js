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

	   $('.p-add').click(function(){
	    $('.p-add-done').removeClass('p-add-done');
	    $(this).addClass('p-add-done');
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
	    $('#regDelivery').arcticmodal();
	    //$('#toEdit').arcticmodal();
	    //$('#productAdded').arcticmodal();
	    //$('#productModal').arcticmodal();
	   //$('#productAdd').arcticmodal();

	   $('.search-input').click(function(){
		  $('.search-results').slideToggle();
		  $('.search-form').toggleClass('search-ext');
		});

	   $(".custom-select").selectBox();
	   $(".custom-select2").selectBox();
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

	     $('.pp-slider').bxSlider({
		  pagerCustom: '#bx-pager',
		  controls: false,
		  mode: 'fade'
		});

	      $('.offer-btn').click(function(){
		    $('.one-offer').slideToggle();
		    return false
		  });

	  	$('.seen-slider-wide').bxSlider({
		  minSlides: 2,
		  maxSlides: 8,
		  slideWidth: 125,
		  slideMargin: 5,
		  pager: false
		});

		$('#clock').countdown('2020/10/10', function(event) {
		   $(this).html(event.strftime('%H:%M:%S'));
		 });

		 $('.ob-button-open').click(function(){
		    $(this).parents('.offer-block').find('.ob-full').slideDown();
		    $(this).hide();
		    $(this).next('.ob-button-close').show();
		  });

		  $('.ob-button-close').click(function(){
		    $(this).parents('.offer-block').find('.ob-full').slideUp();
		    $(this).hide();
		    $(this).prev('.ob-button-open').show();
		  });

		    $('.remove-btn').click(function(){
		    $('.remove-modal').slideToggle();
		    return false
		  });

		    $('.close-product').click(function(){
		    $(this).parent('.product-block').remove();
		  });
});