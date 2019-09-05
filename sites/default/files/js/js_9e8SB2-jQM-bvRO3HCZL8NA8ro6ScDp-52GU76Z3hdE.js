(function ($) {
	$.fn.carouselHeights = function() {
		var items = $(this), //grab all slides
			heights = [], //create empty array to store height values
			tallest; //create variable to make note of the tallest slide

		var normalizeHeights = function() {

			items.each(function() { //add heights to array
				heights.push($(this).height()); 
			});
			tallest = Math.max.apply(null, heights); //cache largest value
			items.each(function() {
				$(this).css('height',tallest + 'px');
				$(this).find('.solstice-slideshow-content').css('height',tallest + 'px');
				
			});
		};

		normalizeHeights();

		$(window).on('resize orientationchange', function () {
			//reset vars
			tallest = 0;
			heights.length = 0;

			items.each(function() {
				$(this).css('min-height','0'); //reset min-height
			}); 
			normalizeHeights(); //run it again 
		});

	};
	
	Drupal.behaviors.solsticeSupportSlideshow = {
		attach: function (context) {
			$('.carousel-inner').each(function() {
				$(this).children('.item').carouselHeights();
			});
				
		}
	}
})(jQuery);
;
(function ($) {
	Drupal.behaviors.solsticeHighlight = {
		attach: function (context) {
			$('.solstice-support-highlight').click(function() {
				if (url = $(this).find('a').attr('href')) {
					window.location.href = url;
				}
			});
		}
	}
})(jQuery);
;
