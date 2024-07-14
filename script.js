(function($) {
    var navItems = $('nav ul li:not(.slide)');
    var slide = $('.slide');

    navItems.on('click', function() {
        var index = $(this).index();
        var slideWidth = $(this).outerWidth();
        var slideLeft = slideWidth * index;

        slide.css({
            width: slideWidth + 'px',
            left: slideLeft + 'px'
        });

        navItems.removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('load', function() {
        var hash = window.location.hash;
        if (hash) {
            var target = $(hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                navItems.removeClass('active');
                $('nav ul li a[href="' + hash + '"]').parent().addClass('active');
            }
        }
    });

    $('nav ul li a').on('click', function(e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        var target = $(targetId);

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, function() {
                window.location.hash = targetId;
            });
        }

        navItems.removeClass('active');
        $(this).parent().addClass('active');
    });

})(jQuery);
