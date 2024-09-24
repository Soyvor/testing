// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentSlideIndex = 0;

function showCategory(category) {
    // Hide all sliders and reset slides
    document.querySelectorAll('.slider').forEach(slider => {
        slider.classList.add('hidden'); // Hide all sliders
        slider.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active')); // Remove active class from all slides
    });
    
    // Show the selected category's slider
    const selectedSlider = document.getElementById(category);
    selectedSlider.classList.remove('hidden'); // Show the selected slider
    
    // Show the first slide of the selected category
    currentSlideIndex = 0; // Reset to the first slide
    const slides = selectedSlider.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[currentSlideIndex].classList.add('active'); // Show the first slide
    }
}

function moveSlide(direction) {
    const activeSlider = document.querySelector('.slider:not(.hidden)'); // Get the currently visible slider
    const slides = activeSlider.querySelectorAll('.slide');
    
    // Hide current slide
    slides[currentSlideIndex].classList.remove('active'); // Remove active class from current slide
    
    // Update the index
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length; // Calculate new index
    
    // Show the new current slide
    slides[currentSlideIndex].classList.add('active'); // Add active class to the new current slide
}

// On page load, show landscape category by default
document.addEventListener("DOMContentLoaded", () => {
    showCategory('landscape');
});
