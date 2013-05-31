	


$(document).ready(function() {
		// jQuery code goes here
	
		
		$(window).stellar();
		
		//$('#content').hide();
		
		
		
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



