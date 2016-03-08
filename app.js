$(document).ready(function() {
	var navHeight = $('.nav').offset();
	$(window).scroll(function(){
	  var sticky = $('.sticky'),
	      scroll = $(window).scrollTop();

	  if (scroll >= navHeight) {
	  		sticky.addClass('fixed');
		} else {
			sticky.removeClass('fixed');
		}	
	});
})();