import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.gallery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.gallery-nav'
      });
      $('.gallery-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.gallery-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
     
      });
    });