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
    
   if(scrollPos < 32 )
        $('.navbar-brand > h1 > img').css('width' , 300-(4*scrollPos) );
    
    if(scrollPos >= 32)
        $('.navbar-brand > h1 > img').css('width' ,160 );
    
    if(scrollPos>=32)
    {
        $('#headNavbar').addClass('headNavbarShadow').css('margin-top', 0);
        $('#header').css('padding-top' , 0);
    }
    else{
        $('#headNavbar').removeClass('headNavbarShadow').css('margin-top', 20);
        $('#header').css('padding-top' , 10);
        
    }
        
});


