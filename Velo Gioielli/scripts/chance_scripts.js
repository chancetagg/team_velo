/****************** Slideshow**************************/



function slideSwitch() {
    var $active = $('#slideshow .slide.active');

    if ( $active.length == 0 ) $active = $('#slideshow .slide:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow .slide:first');
        
        
        
    
        

     // uncomment below to pull the divs randomly
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 4000 );
});








$(document).ready(function() {

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
            $('#content').css('padding-top','75px');
        } else {
			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('.navBar').removeClass('fixed');
            $('#content').css('padding-top','0');

        }
    });
    
    
    
    
    
    
    
    
    
});