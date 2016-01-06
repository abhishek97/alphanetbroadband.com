$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    
   if(scrollPos < 62 )
        $('.navbar-brand > h1 > img').css('width' , 300-(2.258*scrollPos) );
    
    if(scrollPos >= 62)
        $('.navbar-brand > h1 > img').css('width' ,160 );
    
    if(scrollPos>=62)
        $('#headNavbar').addClass('navbar-fixed-top').addClass('headNavbarShadow');
    else
        $('#headNavbar').removeClass('navbar-fixed-top').removeClass('headNavbarShadow');
        
});