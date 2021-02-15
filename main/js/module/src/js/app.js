import options from './lib/options';
import Win from './lib/win';
import $ from 'jquery';
import 'slick-carousel';


console.log(options);
new Win();
console.log($('body').addClass('active'));
$('.s').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
});
