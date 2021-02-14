import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';


console.log($);

const c = ['red', 'black', 'grey'];
let count = 0;
$('#carouselExampleControls').on('slide.bs.carousel', function () {
    $('body').css({ color: c[count++] });
    if (count === c.length - 1) {
        count = 0;
    }
});

$('.next-js, .prev-js').on('click', function () {
    $('#carouselExampleControls').carousel($(this).data('control'));
});

let isSliderInit = false;

$(window).resize(function () {
    if ($(window).innerWidth() <= 767 && !isSliderInit) {
        initeSlider();
    } else if ($(window).innerWidth() > 767 && isSliderInit) {
        $('.my-slider').slick('unslick');
        isSliderInit = false;
    }
});

if ($(window).innerWidth() <= 767 && !isSliderInit) {
    initeSlider();
}

function reBildHtml(items) {
    console.log(items);
    $('.my-slider').append(items);
}

function initeSlider() {
    $('.my-slider').slick({});
    isSliderInit = true;
}
