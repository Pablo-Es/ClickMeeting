$(function() {
    const body = $("html, body");
    const button = $('.scroll-top');
    const $slider = $('.slider__main-content');
    const $slides = $slider.find('.slider__slide');
    let $currSlide = $slides.first();
    const $controlArrows = $slider.find('.slider__controls');
    $slides.hide();
    $currSlide.show();

    function slideOnClick() {
        const $this = $(this);
        if($this.hasClass('slider__control-ico-left')){
            var $nextSlide = $currSlide.prev('.slider__slide');
            if($nextSlide.size() < 1){
                $nextSlide = $slides.last();
            }
        }else{
            $nextSlide = $currSlide.next('.slider__slide');
            if($nextSlide.size() < 1){
                $nextSlide = $slides.first();
            }
        }
        $currSlide.fadeOut('medium');
        $nextSlide.fadeIn('medium');
        $currSlide = $nextSlide;
    }
    $controlArrows.on('click', slideOnClick);

    $(window).scroll(function() {
        let topPos = $(this).scrollTop();
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