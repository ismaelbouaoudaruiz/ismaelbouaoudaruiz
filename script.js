(function($) {
    $(document).ready(function() {
        var navItems = $('nav ul li:not(.slide, .download)');
        var slide = $('.slide');

        // Carga inicial del contenido de 'home'
        $('#main-content').load('home.html');

        navItems.on('click', function(e) {
            var link = $(this).find('a');

            if (!link.hasClass('download')) {
                e.preventDefault();
                var sectionId = link.attr('href').replace('#', '') + '.html';

                $('#main-content').load(sectionId, function() {
                    window.location.hash = sectionId.replace('.html', '');
                    navItems.removeClass('active');
                    $(this).addClass('active');
                    
                    var index = $(this).index();
                    var slideWidth = $(this).outerWidth();
                    var slideLeft = slideWidth * index;

                    slide.css({
                        width: slideWidth + 'px',
                        left: slideLeft + 'px'
                    });
                });
            }
        });

        // Gestionar la carga de contenido basada en el hash URL al recargar la página
        $(window).on('load', function() {
            var hash = window.location.hash;
            if (hash) {
                $('#main-content').load(hash.replace('#', '') + '.html');
            }
        });
    });
})(jQuery);
