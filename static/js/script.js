$(document).ready(function() {

	$(".nav__link").click(function(e) {
		if($(window).width() <= 1023)
		  $(this).next(".nav__list").slideToggle();
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
    	$(".side-nav > .side-nav__list > .side-nav__item > .side-nav__link").click(function(e) {
		$(".side-nav__item > .side-nav__link").next(".side-nav__list").slideUp();
		$(this).next(".side-nav__list").slideDown();
		$(".side-nav__item > .side-nav__link").parent().removeClass("side-nav__item--active");
		$(this).parent().addClass("side-nav__item--active");
	});

	$(".side-nav__list ul .side-nav__link").click(function(e) {
		$(".side-nav__list ul .side-nav__link").parent().removeClass("side-nav__item--active");
		$(this).parent().addClass("side-nav__item--active");
	});

	$(".burger-menu").click(function() {
	  $(".nav").slideToggle();
	  $("body, html").toggleClass("ovh");
  });

  $(".slide").owlCarousel({
  nav: false,
  dots: false,
  items:4,
  margin:10,
  responsiveClass:true,
  responsive:{
	  0: {
	  nav: true
  }
  }
});



	 $(".fabric-info__main-img").click(function() {
				var index = parseInt($(this).children().attr("data-index"),10)-1;
				$(".fabric-info__fancybox")[index].click();
	 });

	 $(".fabric-info__img").click(function() {
				var origin = $(this).children().attr("data-original");
				var index= $(this).children().attr("data-index");
				$(".fabric-info__img-big").attr("data-index", index);
				$(".fabric-info__img-big").attr("src", origin);
	 });

});
