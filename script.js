(function($) {
    $(document).ready(function() {
        var navItems = $('nav ul li:not(.slide)');
        var slide = $('.slide');

        navItems.on('click', function(e) {
            var link = $(this).find('a');

            // No prevenir el comportamiento por defecto para enlaces de descarga
            if (!link.hasClass('download')) {
                e.preventDefault();
                var targetId = link.attr('href');
                var target = $(targetId);

                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);

                    navItems.removeClass('active');
                    $(this).addClass('active');
                    
                    var index = $(this).index();
                    var slideWidth = $(this).outerWidth();
                    var slideLeft = slideWidth * index;

                    slide.css({
                        width: slideWidth + 'px',
                        left: slideLeft + 'px'
                    });
                }
            }
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
    });
})(jQuery);
