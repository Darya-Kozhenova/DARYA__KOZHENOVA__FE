import $ from 'jquery'

$(document).ready(function(){
    $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
        var news_data = '';
            $.each(data, function(key, value){
                news_data += '<tr>';
                news_data += '<td>' +value.title+ '</td>';
                news_data += '<td>' +value.body+ '</td>';
                news_data += '<td>' +value.userId+ '</td>';
                news_data += '</tr>';
            });
        $('#news').append(news_data);
    });
});

