(function () {
    'use strict';

    //Init Libs
    new WOW().init();

    //scroll top
    var scrollTopBtn = $('.scroll-top');

    //Util functions
    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }
    });

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //Count up script
    $(window).scroll(function () {
        $('.count').each(function () {
            if (checkVisible(this)) {
                
                const $this = $(this);
                if ($this.attr('data-counted') == 'false') {
                    $this.attr('data-counted', true);
        
                    setTimeout(function () {
                        jQuery({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    }, 200);
                }
            }
        })
    })
    
    window.dispatchEvent(new Event('resize'));

})();