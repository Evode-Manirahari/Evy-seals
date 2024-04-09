// script.js
const visualizer = document.getElementById('visualizer');
const bubbleSort = document.getElementById('bubbleSort');
const mergeSort = document.getElementById('mergeSort');
const quickSort = document.getElementById('quickSort');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

let array = [];
const arraySize = 50;

// Generate random array
function generateArray() {
  array = [];
  for (let i = 0; i < arraySize; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  renderBars();
}

// Render the array as bars
function renderBars() {
  visualizer.innerHTML = '';
  array.forEach(value => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 4}px`;
    visualizer.appendChild(bar);
  });
}

// Bubble Sort
async function bubbleSortAnimation() {
  let swapped;
  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
        renderBars();
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    if (!swapped) break;
  }
}

// Merge Sort
async function mergeSortAnimation(left = 0, right = array.length - 1) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    await mergeSortAnimation(left, mid);
    await mergeSortAnimation(mid + 1, right);
    await merge(left, mid, right);
  }
}

async function merge(left, mid, right) {
  let i = left;
  let j = mid + 1;
  const temp = [];

  while (i <= mid && j <= right) {
    if (array[i] < array[j]) {
      temp.push(array[i]);
      i++;
    } else {
      temp.push(array[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(array[i]);
    i++;
  }

  while (j <= right) {
    temp.push(array[j]);
    j++;
  }

  for (let k = left; k <= right; k++) {
    array[k] = temp[k - left];
    renderBars();
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Quick Sort
async function quickSortAnimation(left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = await partition(left, right);
    await quickSortAnimation(left, pivotIndex - 1);
    await quickSortAnimation(pivotIndex + 1, right);
  }
}

async function partition(left, right) {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      renderBars();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  renderBars();
  await new Promise(resolve => setTimeout(resolve, 100));
  return i + 1;
}

// Event listeners
bubbleSort.addEventListener('click', async () => {
  await bubbleSortAnimation();
});

mergeSort.addEventListener('click', async () => {
  await mergeSortAnimation();
});

quickSort.addEventListener('click', async () => {
  await quickSortAnimation();
});

startBtn.addEventListener('click', generateArray);
resetBtn.addEventListener('click', generateArray);

generateArray();
