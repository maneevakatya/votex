$(document).ready(function() {

	$(".nav__link").click(function(e) {
		  if ($('body').hasClass('index')) {
			  e.preventDefault();
			  var o = $(this).attr("href").substr(1),
			  t = $(o).offset().top;
			  $("html, body").animate({
				  scrollTop: t - 50
			  }, 1500),
			  $(window).width() <= 1024 && $(".nav").slideToggle();
		  }
	});

	$(".burger-menu").click(function() {
	  $(".nav").slideToggle()
  });

});
