document.addEventListener("DOMContentLoaded", function() {
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

  // Add event listeners for mouse and touch events
  slider.addEventListener('mousedown', handleMouseDown);
  slider.addEventListener('mouseup', handleMouseUp);
  slider.addEventListener('mousemove', handleMouseMove);
  slider.addEventListener('touchstart', handleTouchStart);
  slider.addEventListener('touchend', handleTouchEnd);
  slider.addEventListener('touchmove', handleTouchMove);

  // Add event listener for keyboard arrow keys
  document.addEventListener('keydown', handleKeyDown);

  // Function to handle mouse down event
  function handleMouseDown(event) {
    event.preventDefault();
    startPos = getTranslateXValue();
    dragStartX = event.clientX;
  }

  // Function to handle mouse up event
  function handleMouseUp(event) {
    event.preventDefault();
    var dragEndX = event.clientX;
    handleDrag(dragEndX);
  }

  // Function to handle mouse move event
  function handleMouseMove(event) {
    event.preventDefault();
    if (event.buttons === 1) {
      var dragEndX = event.clientX;
      handleDrag(dragEndX);
    }
  }

  // Function to handle touch start event
  function handleTouchStart(event) {
    event.preventDefault();
    startPos = getTranslateXValue();
    touchStartX = event.touches[0].clientX;
  }

  // Function to handle touch end event
  function handleTouchEnd(event) {
    event.preventDefault();
    var touchEndX = event.changedTouches[0].clientX;
    handleDrag(touchEndX);
  }

  // Function to handle touch move event
  function handleTouchMove(event) {
    event.preventDefault();
    var touchEndX = event.touches[0].clientX;
    handleDrag(touchEndX);
  }

  // Function to handle drag event
  function handleDrag(endX) {
    var distance = endX - dragStartX;
    var newPos = startPos + distance;

    if (newPos > 0) {
      // Dragged towards the right
      newPos = 0;
    } else if (newPos < -totalSlidesWidth) {
      // Dragged towards the left
      newPos = -totalSlidesWidth;
    }

    slider.style.transform = "translateX(" + newPos + "px)";
    displayTrans.innerText = slider.style.transform;
    displayStartPos.innerText = newPos + "px";
  }

  // Function to handle keyboard arrow keys
  function handleKeyDown(event) {
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
  }

  // Utility function to get the current translateX value
  function getTranslateXValue() {
    var transform = slider.style.transform;
    var translateX = transform.match(/translateX\(([-\d]+)px\)/);
    return translateX ? parseInt(translateX[1]) : 0;
  }

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
});
