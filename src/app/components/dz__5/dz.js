import $ from 'jquery';

var arrayOfItems = [
    {img: 'src/static/img/team/1.jpg', year: 2015, model: 'Xiaomi'},

    {img: 'src/static/img/team/2.jpg', year: 2019, model: 'Samsung'},

    {img: 'src/static/img/team/3.jpg', year: 2018, model: 'LG'},

    {img: 'src/static/img/team/4.jpg', year: 2018, model: 'Samsung'},

    {img: 'src/static/img/team/4.jpg', year: 2016, model: 'LG'},

    {img: 'src/static/img/team/3.jpg', year: 2017, model: 'Xiaomi'},

    {img: 'src/static/img/team/2.jpg', year: 2017, model: 'Samsung'},

    {img: 'src/static/img/team/1.jpg',year: 2015, model: 'Xiaomi'}
];
$(document).ready(function(){
    var filterItems = $('.filter__items')
    arrayOfItems.forEach(function(item, index) {
        filterItems.append(`
        <div class = "f__item"> 
        <p>+ item.year +</p>
        <p>+ item.model +</p>
        </div>
    `)
  })
});

