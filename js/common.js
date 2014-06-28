// JavaScript Document

$(document).ready(function(){

	// hide #back-top first
	$("#Page-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('#Page-top').fadeIn();
			} else {
				$('#Page-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#Page-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
});
