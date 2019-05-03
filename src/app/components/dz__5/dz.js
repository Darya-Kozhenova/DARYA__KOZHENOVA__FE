import $ from 'jquery';

const ARRAY_OF_ITEMS = [
    {img: 'src/static/img/team/1.jpg', year: 2015, model: 'Xiaomi'},

    {img: 'src/static/img/team/2.jpg', year: 2019, model: 'Samsung'},

    {img: 'src/static/img/team/3.jpg', year: 2018, model: 'LG'},

    {img: 'src/static/img/team/4.jpg', year: 2018, model: 'Samsung'},

    {img: 'src/static/img/team/4.jpg', year: 2016, model: 'LG'},

    {img: 'src/static/img/team/3.jpg', year: 2017, model: 'Xiaomi'},

    {img: 'src/static/img/team/2.jpg', year: 2017, model: 'Samsung'},

    {img: 'src/static/img/team/1.jpg', year: 2015, model: 'Xiaomi'}
];

class Filter {
  constructor(option)
  this.$filterholder = option.filterHolder;
  this.arrayOfItems = option.filterSelect;
  this.arrayOfItems = []
  }
  init() {
this.createJSON();
  }
  filtration() {
    const _self = this;
    this.$filterSelect.on(change, function(e) {
      var currentValue = this.options[e.target.selectedIndex].value;
      _self.arrayOfItems = ARRAY_OF_ITEMS.filter(function (item) {
        return item.year == currentValue;
  
      })
    })
  }
  }
  drawItems () {

  }
/*$(document).ready(function() {
var filterHolder = $('.filter__items');
arrayOfItems.forEach(function(item, index){
  filterHolder.append('<div class="f__item"> <img src='+item.img+'> <p>'+item.year+'</p><p>'+item.model+'</p></div>')
})
});*/

 /* $('#year').change(
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
        });*/


  