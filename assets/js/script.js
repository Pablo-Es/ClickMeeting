$(function() {
    var body = $("html, body");
    var button = $('.scroll-top');
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            button.removeClass('hidden');
        } else {
            button.addClass('hidden');
        }
    });
    $(button).click(function() {
        body.stop().animate({
            scrollTop: 0
        }, 500);
        return false;
    });



});