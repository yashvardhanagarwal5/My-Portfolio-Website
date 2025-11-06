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




// --- This is the new code for the 3D TILT effect ---

// 1. Get all the project cards
const tiltCards = document.querySelectorAll('.project-card');

// 2. Loop through each card and add listeners
tiltCards.forEach(card => {
    
    // This is the "intensity" of the tilt. Higher is more.
    const tiltIntensity = 15; 

    // 3. Add a listener for when the mouse moves OVER the card
    card.addEventListener('mousemove', (e) => {
        // Get the size and position of the card
        const rect = card.getBoundingClientRect();
        
        // Find the X and Y position of the mouse *inside* the card
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Find the center of the card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate the rotation. This is a value from -1 to 1
        const rotateX = (mouseY - centerY) / centerY * tiltIntensity * -1; // -1 to invert the Y-axis
        const rotateY = (mouseX - centerX) / centerX * tiltIntensity;

        // Apply the 3D rotation
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        
        // Add a stronger shadow for the "lifted" effect
        card.style.boxShadow = "0 20px 30px rgba(0,0,0,0.4)";
    });

    // 4. Add a listener for when the mouse LEAVES the card
    card.addEventListener('mouseleave', () => {
        // Reset the card back to its flat state
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
        
        // Reset the shadow
        card.style.boxShadow = "var(--shadow)"; // Uses your original shadow variable
    });
}); 