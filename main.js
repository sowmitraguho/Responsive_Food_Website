// Select the slider container and items
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider-item');

// Define the number of items to display in a row
const itemsPerSlide = 3;

// Initialize the current slide index
let currentSlide = 0;

// Function to update the slider's position
function updateSlider() {
  const itemWidth = sliderContainer.clientWidth / itemsPerSlide;
  const offset = -currentSlide * itemWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Function to handle the "Next" button click
document.getElementById('next-btn').addEventListener('click', () => {
  if (currentSlide < items.length - itemsPerSlide) {
    currentSlide++;
    updateSlider();
  }
});
// Function to handle the "Previous" button click
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

// Initial slider setup
updateSlider();
