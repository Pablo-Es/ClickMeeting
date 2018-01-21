
    const body = $("html, body");
    const button = $('.scroll-top');
    const $slider = $('.slider');
    const $slides = $slider.find('.slider__slide');
    let $currSlide = $slides.first();
    let $nextSlide;
    const $controlArrows = $slider.find('.slider__controls');
    $slides.hide();
    $currSlide.show();

    function slideOnClick() {
        const $this = $(this);
        if($this.hasClass('slider__control-ico-left')){
            $nextSlide = $currSlide.prev();
            if($nextSlide.length < 1){
                $nextSlide = $slides.last();
            }
            $nextSlide.show().addClass('animated bounceInLeft');
            $currSlide.hide().removeClass('animated bounceInLeft bounceInRight');
        } else{
            $nextSlide = $currSlide.next();
            if($nextSlide.length < 1){
                $nextSlide = $slides.first();
            }
            $nextSlide.show().addClass('animated bounceInRight');
            $currSlide.hide().removeClass('animated bounceInRight bounceInLeft');
        }
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



