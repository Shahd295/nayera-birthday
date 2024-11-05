// script.js
// JavaScript for Then vs. Now slider
// JavaScript for Then vs. Now slider
document.addEventListener("DOMContentLoaded", function() {
    const sliderRange = document.querySelector(".slider-range");
    const nowImage = document.querySelector(".now-image");

    // Function to adjust the opacity of the 'Now' image based on the slider value
    function updateSlider() {
        const value = sliderRange.value;
        const opacity = value / 100; // Scale the opacity from 0 to 1
        nowImage.style.opacity = opacity;
    }

    // Update the opacity on input
    sliderRange.addEventListener("input", updateSlider);

    // Set initial opacity
    updateSlider();
});

// main.js
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Fireworks
    const container = document.createElement('div');
    document.body.appendChild(container);

    const fireworks = new Fireworks(container, {
        speed: 3,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1,
        particles: 100,
        trace: 3,
        explosion: 5,
        sound: true,
    });

    fireworks.start();

    // Stop the fireworks after a certain duration (e.g., 10 seconds)
    setTimeout(() => {
        fireworks.stop();
        document.body.removeChild(container); // Remove the container after the fireworks stop
    }, 10000);
    
    // Then vs. Now functionality (as before)
    const sliderRange = document.querySelector(".slider-range");
    const nowImage = document.querySelector(".now-image");

    function updateSlider() {
        const value = sliderRange.value;
        const opacity = value / 100;
        nowImage.style.opacity = opacity;
    }

    sliderRange.addEventListener("input", updateSlider);
    updateSlider();
});
