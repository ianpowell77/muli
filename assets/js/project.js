// Initialize Foundation
jQuery( document ).ready( function( $ ) {
	$( document ).foundation();
});

// Initialize sliders
jQuery( function( $ ) {

	$( '.js-slider' ).slick({
		prevArrow: '<button type="button" class="slides__arrow slides__arrow--prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slides__arrow slides__arrow--next"><i class="fa fa-angle-right"></i></button>'
	});

});