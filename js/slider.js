$(function () {

    $("#datepicker").datepicker();

    $('select').jselector();
    
    // let close = $('.close');
    // close.click(function() {
        
    //     $("#form").fadeOut();

    // });
    
    // $('#header--btn').click(function() {

    //     $('#form').fadeIn();

    //     return false;


    // });      

    // // Закрытие по клавише Esc.

    // $(document).keydown(function(e) {

    //     if (e.keyCode === 27) {

    //         e.stopPropagation();

    //         $('#form').fadeOut();

    //     }

    // });

    // // Клик по фону, но не по окну.

    // $('#form').click(function(e) {

    //     if ($(e.target).closest('.popup').length == 0) {

    //         $(this).fadeOut();                  

    //     }

    // });

    // SLider
    let slider = $('#Slider');

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      prevArrow: '<img src="js/arrow.png" class="arrow arrow-right" aria-hidden="true"></button>',
      nextArrow: '<img src="js/arrowRight.png" class="arrow arrow-left" aria-hidden="true"></button>',
      autoplay: true,
      autoplaySpeed: 2000
    });

/*  // Footer background approach
    $(window).scroll(function() {
        if ($(this).scrollTop() > 2650) {
            $('.footer__ground').animate({
                height: "2200px"}, 12000
            );
        }
    });*/
    
    //Card animate
    // $('.card--btn').click(function() {

    //     $('.more').fadeIn();

    // });      

    // $('.more--btn').click(function() {

    //     $('.more').fadeOut();

    // }); 
    // //Footer SLider/Reviews
    // let footslider = $('#footerSlider');

    // footslider.slick({
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: false,
    //   dots: true
    // });

});


