require(`./sass/style.scss`);
import $ from 'jquery';

$(function() {
    var portfolioItems = $('.portfolio-box').find('.item');
    for (var i = 0; i < portfolioItems.length; i++) {
        var item = $(portfolioItems[i]);
        item.mouseover(function() {
            $(this).addClass('select');
        });
        item.mouseout(function() {
            $(this).removeClass('select');
        });
    }

    $('#top').click(function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    });
});