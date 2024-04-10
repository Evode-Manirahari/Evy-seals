// Function to generate an array of random numbers
function generateArray(length, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * max);
    array.push(randomNumber);
  }
  return array;
}

// Function to create bars for the visualizer
function createBars(array) {
  const visualizer = document.getElementById('visualizer');
  visualizer.innerHTML = ''; // Clear the visualizer
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement('div');
    bar.style.height = array[i] + 'px';
    bar.style.width = '20px';
    bar.style.margin = '0 2px';
    bar.style.backgroundColor = 'dodgerblue';
    visualizer.appendChild(bar);
  }
}

// Event listener for the "Start" button
document.getElementById('start').addEventListener('click', function() {
  const array = generateArray(20, 200); // Generate an array of 20 numbers, each up to 200
  createBars(array);
});

// Initialize the visualizer with a random array when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const initialArray = generateArray(20, 200);
  createBars(initialArray);
});
