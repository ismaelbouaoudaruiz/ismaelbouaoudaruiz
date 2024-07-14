function showSection(sectionId) {
    var sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
            setTimeout(() => { section.style.opacity = 1; }, 0); // Slight delay to trigger CSS transition
        } else {
            section.style.opacity = 0;
            setTimeout(() => { section.style.display = 'none'; }, 500); // Match with CSS transition duration
        }
    });

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

// Cargar la sección inicial al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});
