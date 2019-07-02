$(window).scroll(function () {
    $('.shape-parallax').each(function(key, elem) {
        var scrollSpeed = $(elem).attr('data-parallax') || 2;
        var offsetY =  parseInt( $(elem).attr('data-parallax-offsetY'))|| 0;

        $(elem).css({
            'top': -($(window).scrollTop()/ scrollSpeed) + offsetY + "px"
        });
    })
});

$(window).scroll();