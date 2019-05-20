import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.feedbacks__item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    })