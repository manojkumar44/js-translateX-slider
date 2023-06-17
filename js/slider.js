// Get the id of the previous button and store it in a variable named prevBtn
var prevBtn = document.getElementById('btn_prev');

// Get the id of the next button and store it in a variable named nextBtn
var nextBtn = document.getElementById('btn_next');

// Get ALL the 'li' elements which house the slide images
var slides = Array.from(document.getElementsByTagName('li')); // Convert HTMLCollection to an Array for easier manipulation

// Get the actual slider ul which contains all the li's
var slider = document.getElementById('slider_ul');

// Get the display panel
var displayTrans = document.getElementById('scrollDisplayTrans');
displayTrans.style.color = "#ffffff";

var displayStartPos = document.getElementById('scrollDisplayPos');
displayStartPos.style.color = "#ffffff";

// Obtain the total no. of slides
var total_slides = slides.length;

// Create variables for previous and next slides as well as the first and last slides.
var firstSlide = slides[0];
var lastSlide = slides[total_slides - 1];

// Calculate the width of each li element (one slide)
var slideWidth = firstSlide.offsetWidth;

// Calculate the combined width of all the slides
var totalSlidesWidth = slideWidth * (total_slides - 1);

var startPos = 0;
var changePos = slideWidth;
displayTrans.innerText = slider.style.transform = "translateX(0px)";
displayStartPos.innerText = startPos + "px";

prevBtn.addEventListener("click", function (e) {
  // If this is the first slide, show the last one in the slideshow instead
  if (startPos === 0) {
    startPos = -totalSlidesWidth;
  } else {
    startPos += changePos;
  }
  slider.style.transform = "translateX(" + startPos + "px)";
  displayTrans.innerText = slider.style.transform;
  displayStartPos.innerText = startPos + "px";
});

nextBtn.addEventListener("click", function (e) {
  // If this is the last slide, show the first one in the slideshow instead
  if (startPos === -totalSlidesWidth) {
    startPos = 0;
  } else {
    startPos -= changePos;
  }
  slider.style.transform = "translateX(" + startPos + "px)";
  displayTrans.innerText = slider.style.transform;
  displayStartPos.innerText = startPos + "px";
});

window.addEventListener("keyup", function (event) {
  switch (event.keyCode) {
    case 37: // left arrow key
      prevBtn.click(); // Simulate a click on the previous button
      break;
    case 39: // right arrow key
      nextBtn.click(); // Simulate a click on the next button
      break;
    default:
      break;
  }
});
