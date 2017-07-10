
///////////////////////////////
// Vanilla JS for Slides
///////////////////////////////
(function () {
	var slides = document.getElementsByClassName('slides');
	var controlLeft = document.getElementById('control-left');
	var controlRight = document.getElementById('control-right');

	var i = 0;
	var currentSlide = slides[i];
	currentSlide.classList.add('transition-opacity');

	function nextSlide () {
		//iterate + 1
		i++;
	  //IF when iterating, i < the length of slides array then:
		if (i < slides.length) {
		slides[i - 1].classList.remove('transition-opacity');
		slides[i].classList.add('transition-opacity');
		
	  //ELSE make i = 0 and do work son  
	  } else {
	  i = 0;
	  
	  slides[slides.length - 1].classList.remove('transition-opacity');
	  slides[i].classList.add('transition-opacity');
	  }  
	}

	function prevSlide () {
		//decrease by 1
		i--;
	  
	  //if click makes i = -1, THEN make i = last in array to loop
		if (i === -1) {
		i = slides.length - 1;
		
		slides[0].classList.remove('transition-opacity');
		slides[i].classList.add('transition-opacity');
		
	  //if not above, show as normal  
	  } else {
		slides[i + 1].classList.remove('transition-opacity');
		slides[i].classList.add('transition-opacity');
	  }  
	}

	controlLeft.addEventListener("click", 
		prevSlide, false);
	  
	controlRight.addEventListener("click", 
	nextSlide, false);
})(); 