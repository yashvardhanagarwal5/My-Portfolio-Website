new Typed('#typing-effect', {
    strings: [
        'First-Year Student',
        'Coder',
        'Web Developer',
        'Lifelong Learner'
    ],
    typeSpeed: 70,    // How fast it types
    backSpeed: 50,    // How fast it deletes
    loop: true        // Makes it repeat
});




// --- This is the new code for the fade-in animation ---

// 1. Get all the elements we want to fade in
const fadeElements = document.querySelectorAll('.fade-in');

// 2. Set up the "watcher"
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 3. When the element is on screen, add the 'show' class
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 // Triggers when 15% of the element is visible
});

// 4. Tell the watcher to "observe" (watch) each of our fade-in elements
fadeElements.forEach((el) => {
    scrollObserver.observe(el);
});