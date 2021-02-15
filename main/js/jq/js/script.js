// const jDiv = $('div:first-child');
// const div = document.querySelectorAll('div');
// jDiv.addClass('active');
// jDiv.attr({ 'data-user': 1, 'data-sordet': true });

// console.log(div, jDiv.data('sordet'));
// const main = $('.main');
// const box = main.closest('.box');

// box.css({ color: 'red' });

// $('body').on('click', function () {
//     jDiv.animate({
//         top: '150px'
//     },
//         5000,
//         function () {
//             alert('dsfsd');
//         });
// });

const slider = $('.slider');
slider.slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // arrows: false,
    asNavFor: '.slider-dot',
});

slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(event, slick, currentSlide, nextSlide);
});

$('.go').on('click', function () {
    $('.slider').slick('unslick');
    $('.slider-dot').slick('unslick');
})

$('.slider-dot').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.slider',
    focusOnSelect: true
})
