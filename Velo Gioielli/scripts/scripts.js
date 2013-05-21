


/*------------------------------- SLIDESHOW ------------------------------------------*/

function slideSwitch() {
    var $active = $('#slideshow .slide.active');

    if ( $active.length == 0 ) $active = $('#slideshow .slide:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow .slide:first');
        
    
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
    setInterval( "slideSwitch()", 5000 );

});

/*------------------------------- END SLIDESHOW ------------------------------------------*/




/*------------------------------- START STICKY NAV ------------------------------------------*/
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
            $('nav').addClass('fixed').css('left','50%').css('margin-left','-480px').css('top','0');
        } else {			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('nav').removeClass('fixed').css('margin-left','auto').css('left', 'auto');
        }
    });   
    $(window).scroll(function(){
		
		//if scrolled down more than the header's height
        if ($(window).scrollTop() > aboveHeight){
			
			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
            $('.navWrapper').addClass('background');      
        } else {
			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('.navWrapper').removeClass('background');
        }
    });
     $(window).scroll(function(){
		
		//if scrolled down more than the header's height
        if ($(window).scrollTop() > aboveHeight){
			
			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
            $('.aboutHeader').addClass('navGap');
        } else {			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('.aboutHeader').removeClass('navGap');
        } 
    });
    
    
 /*
	
	------------------------------- END STICKY NAV ------------------------------------------
	
*/




    

});
