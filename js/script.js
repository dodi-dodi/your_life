$(document).ready(function(){
    $('#content-slider').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            '<i class="glyphicon glyphicon-chevron-left"></i>',
            '<i class="glyphicon glyphicon-chevron-right"></i>'
        ],
        dots: false
    });

    $('#gallery-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass:true,
        nav: true,
        navText: [
            '<i class="glyphicon glyphicon-chevron-left"></i>',
            '<i class="glyphicon glyphicon-chevron-right"></i>'
        ],
        dots: false,
        rewindNav : true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            320: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            }
        },
        autoplay: true,
        autoplayHoverPause: true
    });

    var $navbar = $('nav');
    var navbarHeight = $navbar.height() * 3;
    $(window).scroll(function () {
        if ($(window).scrollTop() > navbarHeight) {
            $navbar.addClass('background-black');
        } else {
            $navbar.removeClass('background-black');
        }
    });
});
