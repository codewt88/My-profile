// This script waits for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section'); // Selects all sections
    const observer = new IntersectionObserver((entries) => { // Creates an IntersectionObserver for the sections
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Checks if the section is visible in the viewport
                entry.target.classList.add('visible'); // Adds 'visible' class to animate the section
            }
        });
    }, { threshold: 0.3 }); // Sets threshold for when to trigger visibility
    
    sections.forEach(section => {
        observer.observe(section); // Observes each section for visibility changes
    });
});