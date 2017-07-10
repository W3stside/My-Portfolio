"use strict";

////////////////////////////////
//jQuery for animating Home Menus
///////////////////////////////

$(document).ready(function() {
  //Arr of menus
  const headerArr = $('.main-div');
  const animTime = 100;  
  const slidesHeight = $('.slides').innerHeight();
    
  function clickExpander (e) {
    e.preventDefault;
    
    //Coorresponding COntent page to open
    const contentToOpenOnClick = '.' + this.id + '-content';
    const winWidth = $('html').innerWidth();
    const divWidth = $('h1', this).innerWidth() + 30;
	const that = this;
		
	//CHECK IF OPEN IF SO CLOSE
    if($(contentToOpenOnClick).hasClass('open')) {
		$(contentToOpenOnClick).stop(true,true).toggleClass('hide')
		.queue( function () {
			$(contentToOpenOnClick).toggleClass('open');
			$(this).dequeue();
		})
		.queue( function () {
			//wait before firing small font - take out of event loop till last
			$(that).siblings().toggleClass('small-font');
			$(this).dequeue();
		})
		.queue( function () {
			
			$(this).dequeue();
		});
		
		//Stop function	
		return;
	}
	
	//OPENING ANIMATIONS
	$(this).stop(true,true).siblings().toggleClass('small-font')
	
	$(contentToOpenOnClick).queue( function () {
		$(contentToOpenOnClick).toggleClass('open');
		$(this).dequeue();
	});	
	$(contentToOpenOnClick).queue( function () {
		$(contentToOpenOnClick).toggleClass('hide');
		$(this).dequeue();
	});	
  }	
  //bind each menu in the arr to the function clicker thangy thang thang
  $.each(headerArr, (index, val) => {
	  $(val).bind("click", clickExpander);
  });
  
})
