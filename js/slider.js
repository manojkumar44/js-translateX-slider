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

  prevBtn.addEventListener("click", function(e) {
    if (startPos === 0) {
      startPos = -totalSlidesWidth;
    } else {
      startPos += changePos;
    }
    slider.style.transform = "translateX(" + startPos + "px)";
    displayTrans.innerText = slider.style.transform;
    displayStartPos.innerText = startPos + "px";
  });

  nextBtn.addEventListener("click", function(e) {
    if (startPos === -totalSlidesWidth) {
      startPos = 0;
    } else {
      startPos -= changePos;
    }
    slider.style.transform = "translateX(" + startPos + "px)";
    displayTrans.innerText = slider.style.transform;
    displayStartPos.innerText = startPos + "px";
  });

  document.addEventListener('keydown', handleKeyDown);

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
});
