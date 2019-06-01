import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.gallery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        
        asNavFor: '.gallery-nav',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
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