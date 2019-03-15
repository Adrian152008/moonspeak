    $('a[href*="#"]').click(function(event) 
        {event.preventDefault();
        var target = $(this.hash);
  
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000);
});



        // Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      // $(window).on("scroll", function() {
      //       if($(window).scrollTop()) {
      //             $('nav').addClass('black');
      //       }

      //       else {
      //             $('nav').removeClass('black');
      //       }
      // })