// JavaScript to enable smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the target element smoothly
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Additional functionality can be added below as needed
