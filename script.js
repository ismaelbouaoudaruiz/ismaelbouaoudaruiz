function showSection(sectionId) {
    var sections = document.querySelectorAll('.content');
    // Animación suave y manejo del display
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block'; // Asegúrate de que la sección esté visible
            section.style.opacity = 0;
            let opacity = 0;
            const fadeIn = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.1;
                    section.style.opacity = opacity;
                } else {
                    clearInterval(fadeIn);
                }
            }, 30);
        } else {
            section.style.opacity = 1;
            let opacity = 1;
            const fadeOut = setInterval(() => {
                if (opacity > 0) {
                    opacity -= 0.1;
                    section.style.opacity = opacity;
                } else {
                    clearInterval(fadeOut);
                    section.style.display = 'none'; // Ocultar las secciones no activas
                }
            }, 30);
        }
    });

    // Actualizar la clase activa en los enlaces de la navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const sectionName = link.getAttribute('onclick') ? link.getAttribute('onclick').match(/'([^']+)'/)[1] : null;
        if (sectionName === sectionId) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}
