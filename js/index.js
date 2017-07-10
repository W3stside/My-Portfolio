"use strict";

////////////////////////////////
//jQuery for animating Home Menus
///////////////////////////////

$(document).ready(function() {
  //Arr of menus
  const headerArr = $('.main-div');
  const animTime = 100;  
  const slidesHeight = $('.slides').innerHeight();
  
  //$('.slides').css({maxHeight: slidesHeight, overflow: 'hidden'});
  
  function clickExpander (e) {
    e.preventDefault;
    
    //Coorresponding COntent page to open
    const contentToOpenOnClick = '.' + this.id + '-content';
    const winWidth = $('html').innerWidth();
    const divWidth = $('h1', this).innerWidth() + 30;
	const that = $(this);
	
	//CHECK IF OPEN IF SO CLOSE
    if($(contentToOpenOnClick).hasClass('open')) {
		$(contentToOpenOnClick).stop(true,true).toggleClass('hide')
			.queue( () => {
				$(contentToOpenOnClick).toggleClass('open')
					.animate({}, 300, 
						function nextAnimation () {
							//wait before firing small font - take out of event loop till last
							setTimeout(() => { that.siblings().toggleClass('small-font') }, 100);
						})
			});	
		//Stop function	
		return;
	}
	
	//OPENING ANIMATIONS
	$(this).stop(true,true).siblings().toggleClass('small-font')
		.queue( () => {
			$(contentToOpenOnClick).toggleClass('open')
				.queue(
					setTimeout(
						() => {
							$(contentToOpenOnClick).toggleClass('hide');
						}, 500
					)
				);//end queue 2	
		});	//end queue 1	
  }	
  //bind each menu in the arr to the function clicker thangy thang thang
  $.each(headerArr, (index, val) => {
	  $(val).bind("click", clickExpander);
  });
  
})
