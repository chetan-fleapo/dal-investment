$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
   $(".page-wrapper").toggleClass("border-bottom-navbar");
});


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".page-wrapper").addClass("fixed-scrolltop");
	  }

	  else{
      $(".page-wrapper").removeClass("fixed-scrolltop"); 	
	  }
  })
})