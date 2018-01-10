$(function() {
    var body =$('html, body');
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        body.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
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