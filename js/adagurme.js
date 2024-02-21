$('.kayan-gorseller').owlCarousel({
  loop:true,
  margin:0,
  nav: true,
  dots:false,
  autoplay:true,
  autoplayTimeout:3200,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          nav: false,
      },
      600:{
          items:1,
          nav: false,
      },
      767:{
          items:1
      }
  }
});

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 96)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.tarihce').owlCarousel({
    loop: false,
    margin: 16,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
    0: {
        items: 1,
        nav: true
    },
    767: {
        items: 3,
        nav: true
    },
    992: {
        items: 5,
        nav: true,
        margin: 20
    }
    }
})