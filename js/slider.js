

//	Get the id of the previous button and store it in a variable named prevBtn
var prevBtn = document.getElementById('btn_prev');


//	Get the id of the next button and store it in a variable named nextBtn
var nextBtn = document.getElementById('btn_next');


//	Get ALL the 'li' elements which house the slide images
var slides = document.getElementsByTagName('li');


//	Get the actual slider ul which contains all the li's..
var slider = document.getElementById('slider_ul');


//	Get the display panel
var displayTrans = document.getElementById('scrollDisplayTrans');
displayTrans.style.color = "#ffffff";

var displayStartPos = document.getElementById('scrollDisplayPos');
displayStartPos.style.color = "#ffffff";

//	Obtain the total no. of slides 
var total_slides = slides.length;


//	Create variables for previous and next slides as well as the first and last slides.
var prevSlide, nextSlide, firstSlide, currentSlide, lastSlide;


firstSlide = slides[0];
lastSlide = slides[total_slides - 1];


//	Lets calcualte the width of each li element ( one slide )
var slideWidth = firstSlide.offsetWidth;


//	Lets also calculate the combined width if all the slides 
var translateXtotal = document.getElementById('slider_ul').offsetWidth;
var totalSlidesWidth = translateXtotal - slideWidth;


var startPos = 0;
var changePos = slideWidth;
displayTrans.innerText = slider.style.transform = "translateX(0px)";
displayStartPos.innerText = startPos +"px";


prevBtn.addEventListener("click", function(e) {
	//	 If this is the first slide, show the last one in the slideshow instead
	if (startPos == 0) {	
		slider.style.transform = "translateX(" + (0 - totalSlidesWidth) + "px)";
		startPos = 0 - totalSlidesWidth;
		displayTrans.innerText = slider.style.transform;
		displayStartPos.innerText = startPos + "px";
		
	}	else {
		
		startPos += changePos;
		for (var i=0; i < total_slides; i++) {
			if (slides[i] == firstSlide) {
			slider.style.transform = "translateX(" + startPos + "px)";
			displayTrans.innerText = slider.style.transform;
			displayStartPos.innerText = startPos + "px";
			}	
		}
	}
},false);

nextBtn.addEventListener("click", function(e) {
	//	If this is the last slide, go back to the beginning of the slideshow
	if (startPos == -(totalSlidesWidth)) {
		startPos += totalSlidesWidth;
		slider.style.transform = "translateX(" + startPos + "px)";
		displayTrans.innerText = slider.style.transform;
		displayStartPos.innerText = startPos + "px";
		
	}	else {
		
		startPos -= changePos;
		for (var i=0; i < total_slides; i++) {
			if (startPos == totalSlidesWidth) {
			startPos = 0;
			startPos += changePos;
			slider.style.transform = "translateX(" + startPos + "px)";
			displayTrans.innerText = slider.style.transform;
			displayStartPos.innerText = startPos + "px";

			}	else {
			slider.style.transform = "translateX(" + startPos + "px)";
			displayTrans.innerText = slider.style.transform;
			displayStartPos.innerText = startPos + "px";
			}
		}
	}
},false);

window.addEventListener("keyup", function(event) {
	
	switch(event.keycode) {
		case 37:
		if (startPos == 0) {	
		slider.style.transform = "translateX(" + (0 - totalSlidesWidth) + "px)";
		startPos = 0 - totalSlidesWidth;
		displayTrans.innerText = slider.style.transform;
		displayStartPos.innerText = startPos + "px";
		
	}	else {
		
		startPos += changePos;
		for (var i=0; i < total_slides; i++) {
			if (slides[i] == firstSlide) {
			slider.style.transform = "translateX(" + startPos + "px)";
			displayTrans.innerText = slider.style.transform;
			displayStartPos.innerText = startPos + "px";
			}	
		}
	}
		break;
	
		case 39:
		//	If this is the last slide, go back to the beginning of the slideshow
	if (startPos == -(totalSlidesWidth)) {
		startPos += totalSlidesWidth;
		slider.style.transform = "translateX(" + startPos + "px)";
		displayTrans.innerText = slider.style.transform;
		displayStartPos.innerText = startPos + "px";
		
	}	else {
		
		startPos -= changePos;
		for (var i=0; i < total_slides; i++) {
			if (startPos == totalSlidesWidth) {
			startPos = 0;
			startPos += changePos;
			slider.style.transform = "translateX(" + startPos + "px)";
			displayTrans.innerText = slider.style.transform;
			displayStartPos.innerText = startPos + "px";

			}	else {
			slider.style.transform = "translateX(" + startPos + "px)";
			displayTrans.innerText = slider.style.transform;
			displayStartPos.innerText = startPos + "px";
			}
		}
	}
	break;
		
	}
	
}, false);
