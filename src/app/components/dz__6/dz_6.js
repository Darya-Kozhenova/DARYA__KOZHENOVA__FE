import $ from 'jquery'

var news = $('.news'); 
          
$(function () {
    $.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {
        var news = $('.news');
        var newList = [];
        $.each(data, function (key, val) {
            newList.append('<tr><td>' + data.title + '<tr><td>' + data.body + '</td><td>' + data.id +
                '</td><td>');
        })
    })
});