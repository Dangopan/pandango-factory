$(function () {


    var $title = $('.title');

    $(window).delay(1000).queue(function () {
        $title.toggleClass('active');
    });

    var $else = $('.else');

    $(window).delay(1000).queue(function () {
        $else.toggleClass('other');
    });

});




   

