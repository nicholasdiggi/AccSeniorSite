// Get the necessary elements
const instructionsEl = document.getElementById('instructions');
const homeButtonEl = document.getElementById('home-button');
const searchFormEl = document.getElementById('search-form');
const searchInputEl = document.getElementById('search-input');
const searchButtonEl = document.getElementById('search-button');
const navEl = document.querySelector('nav');
const cartButtonEl = document.getElementById('cart-button');
const contentEl = document.getElementById('content');

// Blur the content on button click
function blurContent() {
  contentEl.style.filter = 'blur(5px)';
  instructionsEl.style.filter = 'blur(5px)';
  homeButtonEl.style.filter = 'blur(5px)';
  searchFormEl.style.filter = 'blur(5px)';
  navEl.style.filter = 'blur(5px)';
}

// Unblur the content on button click
function unblurContent() {
  contentEl.style.filter = 'none';
  instructionsEl.style.filter = 'none';
  homeButtonEl.style.filter = 'none';
  searchFormEl.style.filter = 'none';
  navEl.style.filter = 'none';
}

// Highlight the search bar on button click
function highlightSearch() {
  searchInputEl.style.border = '2px solid #007bff';
  searchInputEl.style.boxShadow = '0 0 5px #007bff';
}

// Unhighlight the search bar on button click
function unhighlightSearch() {
  searchInputEl.style.border = 'none';
  searchInputEl.style.boxShadow = 'none';
}

// Add event listeners to the buttons
homeButtonEl.addEventListener('click', unblurContent);
searchButtonEl.addEventListener('click', unblurContent);
cartButtonEl.addEventListener('click', unblurContent);
homeButtonEl.addEventListener('click', unhighlightSearch);
searchButtonEl.addEventListener('click', highlightSearch);
searchInputEl.addEventListener('blur', unhighlightSearch);
