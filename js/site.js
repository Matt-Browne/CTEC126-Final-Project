$(document).ready(function(){
	// Increase text size
	$('#increase').click(function(){ //When larger text button clicked
		$('#content *, #nav *').each(function(){ // loop through each element w/ class zoom and retrieve font-size
				size = parseFloat($(this).css('font-size')); // strip the units from font-size
				if(size + 2 < 41){
					size = size + 2 + "px";  // increment font-size and add units back in
					$(this).css({'font-size': size}); // set font size of element to new value
				} // end if
		}); // end each
	}); // end click

	// Decrease text size
	$('#decrease').click(function(){ //When larger text clicked
		$('#content *, #nav *').each(function(){ // loop through each element and retrieve font-size
				size = parseInt($(this).css('font-size')); // strip the units from font-size
				if(size - 2 > 13){
					size = size - 2 + "px";  // increment font-size and add units back in
					$(this).css({'font-size':size}); // set font size of element to new value
				} // end if	
			}); // end each
	}); // end click
			
}); // end ready