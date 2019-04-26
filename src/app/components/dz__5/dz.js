import $ from 'jquery';

var arrayOfItems = [
    {img: 'src/static/img/team/1.jpg', year: 2015, model: 'Xiaomi'},

    {img: 'src/static/img/team/2.jpg', year: 2019, model: 'Samsung'},

    {img: 'src/static/img/team/3.jpg', year: 2018, model: 'LG'},

    {img: 'src/static/img/team/4.jpg', year: 2018, model: 'Samsung'},

    {img: 'src/static/img/team/4.jpg', year: 2016, model: 'LG'},

    {img: 'src/static/img/team/3.jpg', year: 2017, model: 'Xiaomi'},

    {img: 'src/static/img/team/2.jpg', year: 2017, model: 'Samsung'},

    {img: 'src/static/img/team/1.jpg', year: 2015, model: 'Xiaomi'}
];
$(document).ready(function() {
var filterHolder = $('.filter__items');
arrayOfItems.forEach(function(item, index){
  filterHolder.append('<div class="f__item"> <img src='+item.img+'> <p>'+item.year+'</p><p>'+item.model+'</p></div>')
})
});

  $('#year').change(
    function(e){
                if(e.target.options[e.target.selectedIndex].text) {
                    var filteredArray = arrayOfItems.filter( function(item) {
                    return this.year <2016 && this.year.remove> 2016;
                })
            }
    
                var filterHolder = $('.filterHolder'); 
      filterHolder.html('');
         filteredArray.forEach(function(item, index) {
            filterHolder.append('<div class= "personIt"><img src='+item.image+'><p>'+item.model+'</p> <p>'+item.year+'</p></div>')
         }) 
        });