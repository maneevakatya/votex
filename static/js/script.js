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


	$(".burger-menu").click(function() {
	  $(".nav").slideToggle();
	  $(this).toggleClass("is-active");
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

$(".slide2").owlCarousel({
nav: false,
dots: false,
items:1,
margin:10,
responsiveClass:true,
responsive:{
	0: {
	nav: true
}
}
});

$(window).on('load',function(){
			 if($(window).width() <= 1023){
			   $('.nav > .nav__list').mCustomScrollbar({theme:"dark"});
	 }
 });
 $("body").on('resize',function(){
	 var fh = $('.footer').outerHeight();
	 var hh = $('.header').outerHeight();
	 var h = fh + hh;
 	$('.inner-wrapper').css('min-height', 'calc(100vh - '+ h +'px)');
}).trigger("resize");

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
