$('.header__slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 1000


});
$('.slider-Allclothes .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        900: {
            items: 3
        },
        1200: {
            items: 5
        }
    },
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 1000


});
const btn = $(".menu-left > ul > li > i");
$(".subnav-mobile").slideUp();
btn.on("click", function() {
    $(this).next().slideToggle("fast");
    $(this).addClass("arrow-rotate");
});