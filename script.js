(function($) {
    $('li:not(.slide)').on('click', function() {
        var index = $(this).index();
        var slideWidth = $(this).width();
        var slideLeft = slideWidth * index;
        $('.slide').css({
            width: slideWidth + 'px',
            left: slideLeft + 'px'
        });
        $('li').removeClass('active');
        $(this).addClass('active');
    });
})(jQuery);
 
