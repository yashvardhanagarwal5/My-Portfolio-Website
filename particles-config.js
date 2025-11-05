/* This is the full configuration for the particles.js library */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, /* Number of particles */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" /* Particle color */
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff", /* Line color */
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, /* How fast they move */
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" /* This makes particles move away from your cursor */
      },
      "onclick": {
        "enable": true,
        "mode": "push" /* This adds more particles when you click */
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
    }
  },
  "retina_detect": true
});