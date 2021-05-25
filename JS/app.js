$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });


    var hambargar = document.querySelector('.hambarger');
    var times = document.querySelector('.times');
    var mobileNav = document.querySelector('.mobile-nav');


    hambargar.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open')
    });
});