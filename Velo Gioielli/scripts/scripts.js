/*


var ADAPT_CONFIG = {
  path: 'assets/css/',
  dynamic: true,

  range: [
    '0px    to 760px  = mobile.css',
    '760px  to 980px  = 720.css',
    '980px  to 1280px = 960.css',
    '1280px to 1600px = 1200.css',
    '1600px to 1920px = 1560.css',
    '1920px           = fluid.css'
  ]
};
*/




$(document).ready(function() {
		// jQuery code goes here
	
		
	//Calculate the height of <header>
	//Use outerHeight() instead of height() if have padding
    var aboveHeight = $('header').outerHeight();
    

	// when scroll
    $(window).scroll(function(){
		
		//if scrolled down more than the header's height
        if ($(window).scrollTop() > aboveHeight){
			
			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
            $('.navBar').addClass('fixed').css('top','0');
            $('#content').css('padding-top','7.5em');
        } else {
			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('.navBar').removeClass('fixed');
            $('#content').css('padding-top','0');

        }
    });
	
/////////////////////////////////////START SLIDESHOW/////////////////////////////////////////////////

		$(function() {
			$(".rslides").responsiveSlides();
    	});
	
	
	
	
	
	
/////////////////////////////////////START STELLAR/////////////////////////////////////////////////
	
	
	
	
	
	
	
		
		$(window).stellar();
		
		//$('#content').hide();
		
		

		  // LINK TO SECTION OF PAGE
    $('.navlogo').click(function() {
        // TARGET --> SPEED
        //$('#content').show();
        $(window).scrollTo(".splashSlideshow", 800,{offset:{top:-90}})
        

        
    });
        

		$('.pattern').click(function() {

        //alert('js working'); 
        // TARGET --> SPEED
		$('#content').show();
        
        $(window).scrollTo(".navWrapper", 800);		
		
		});
		
		

  // LINK TO SECTION OF PAGE
    $('.linkzero').click(function() {

       /*  alert('js working'); */
        // TARGET --> SPEED
        //$('#content').show();
       
        $(window).scrollTo(".aboutHeader", 800 ,{offset:{top:-90}} )
       
       


       
       	       
    });
    
    // LINK TO SECTION OF PAGE
    $('.linkone').click(function() {
        // TARGET --> SPEED
        //$('#content').show();
        $(window).scrollTo(".collectionHeader", 800,{offset:{top:-90}})
        

        
    });
        
    // LINK TO SECTION OF PAGE
    $('.linktwo').click(function() {
        // TARGET --> SPEED
        //$('#content').show();
        $(window).scrollTo(".connectionHeader", 800, {offset:{top:-90}});
        
    });
        
        // LINK TO SECTION OF PAGE
    $('.linkthree').click(function() {
        // TARGET --> SPEED
        //$('#content').show();
        $(window).scrollTo(".wholesaleSubhead", 800);
        
    });
























});  



