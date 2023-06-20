document.addEventListener("DOMContentLoaded", function() {
  var prevBtn = document.getElementById('btn_prev');
  var nextBtn = document.getElementById('btn_next');
  var slides = Array.from(document.getElementsByTagName('li'));
  var slider = document.getElementById('slider_ul');
  var displayTrans = document.getElementById('scrollDisplayTrans');
  var displayStartPos = document.getElementById('scrollDisplayPos');

  var totalSlides = slides.length;
  var slideWidth = slides[0].offsetWidth;
  var totalSlidesWidth = slideWidth * (totalSlides - 1);

  var startPos = 0;
  var changePos = slideWidth;
  displayTrans.innerText = slider.style.transform = "translateX(0px)";
  displayStartPos.innerText = startPos + "px";

  slider.addEventListener('mousedown', handleMouseDown);
  slider.addEventListener('mouseup', handleMouseUp);
  slider.addEventListener('mousemove', handleMouseMove);
  slider.addEventListener('touchstart', handleTouchStart);
  slider.addEventListener('touchend', handleTouchEnd);
  slider.addEventListener('touchmove', handleTouchMove);

  document.addEventListener('keydown', handleKeyDown);

  function handleMouseDown(event) {
    event.preventDefault();
    startPos = getTranslateXValue();
    dragStartX = event.clientX;
    slider.classList.add('slider-transition');
  }

  function handleMouseUp(event) {
    event.preventDefault();
    var dragEndX = event.clientX;
    handleDrag(dragEndX);
    slider.classList.remove('slider-transition');
  }

  function handleMouseMove(event) {
    event.preventDefault();
    if (event.buttons === 1) {
      var dragEndX = event.clientX;
      handleDrag(dragEndX);
    }
  }

  function handleTouchStart(event) {
    event.preventDefault();
    startPos = getTranslateXValue();
    touchStartX = event.touches[0].clientX;
    slider.classList.add('slider-transition');
  }

  function handleTouchEnd(event) {
    event.preventDefault();
    var touchEndX = event.changedTouches[0].clientX;
    handleDrag(touchEndX);
    slider.classList.remove('slider-transition');
  }

  function handleTouchMove(event) {
    event.preventDefault();
    var touchEndX = event.touches[0].clientX;
    handleDrag(touchEndX);
  }

  function handleDrag(endX) {
    var dragDistance = endX - touchStartX;
    var dragSlides = Math.round(dragDistance / slideWidth);
    var newPos = startPos - (dragSlides * slideWidth);

    if (newPos > 0) {
      newPos = 0;
    } else if (newPos < -totalSlidesWidth) {
      newPos = -totalSlidesWidth;
    }

    slider.style.transform = "translateX(" + newPos + "px)";
    displayTrans.innerText = slider.style.transform;
    displayStartPos.innerText = newPos + "px";
  }

  function handleKeyDown(event) {
    switch (event.keyCode) {
      case 37:
        if (startPos === 0) {
          startPos = -totalSlidesWidth;
        } else {
          startPos += changePos;
        }
        slider.style.transform = "translateX(" + startPos + "px)";
        displayTrans.innerText = slider.style.transform;
        displayStartPos.innerText = startPos + "px";
        break;
      case 39:
        if (startPos === -totalSlidesWidth) {
          startPos = 0;
        } else {
          startPos -= changePos;
        }
        slider.style.transform = "translateX(" + startPos + "px)";
        displayTrans.innerText = slider.style.transform;
        displayStartPos.innerText = startPos + "px";
        break;
      default:
        break;
    }
  }

  function getTranslateXValue() {
    var transform = window.getComputedStyle(slider).getPropertyValue('transform');
    var matrix = new WebKitCSSMatrix(transform);
    return matrix.m41;
  }
});
