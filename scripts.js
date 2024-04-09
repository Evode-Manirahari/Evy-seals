// JavaScript for the sorting visualizer

// Function to generate an array of random numbers
function generateArray(length, max) {
  return Array.from({ length: length }, () => Math.floor(Math.random() * max));
}

// Function to create bars for the visualizer
function createBars(array) {
  const visualizer = document.getElementById('visualizer');
  visualizer.innerHTML = ''; // Clear the visualizer
  array.forEach(value => {
    const bar = document.createElement('div');
    bar.style.height = `${value}px`;
    bar.style.width = '20px';
    bar.style.margin = '0 2px';
    bar.style.backgroundColor = 'dodgerblue';
    bar.classList.add('bar');
    visualizer.appendChild(bar);
  });
}

// Event listeners for buttons
document.getElementById('start').addEventListener('click', () => {
  const array = generateArray(20, 200); // Generate an array of 20 numbers, each up to 200
  createBars(array);
});
// Initialize the visualizer with a random array
document.addEventListener('DOMContentLoaded', () => {
  const initialArray = generateArray(20, 200);
  createBars(initialArray);
});
