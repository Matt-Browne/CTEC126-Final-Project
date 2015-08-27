$(document).ready(function(){
	$('#map').goMap({
		address: 'Olympia, WA',		
		maptype:'ROADMAP',
		zoom:7,
		markers: [{  
	    address: '1601 E Fourth Plain Blvd, Vancouver, WA 98661', 
	    html: { 
	        content: '<p><strong>Our first location!</strong></p>1601 E Fourth Plain Blvd<br>Vancouver, WA 98661', 
	        popup: true 
	    	} 
	    },{  
	        address: '3133 NE Shute Rd, Hillsboro, OR 97124',
	        html: {
	        	content: '<p><strong>This Location does brakes too!</strong></p>3133 NE Shute Rd<br> Hillsboro, OR 97124 '
	        } 
	         
	    },{  
	        address: '15324 4th Ave SW Burien, WA 98166',
	        html: {
	        	content: '15324 4th Ave SW Burien, WA 98166',
	        }	         
	    },{  
	        address: '551 Oregon Way<br> Longview, WA 98632',
	        html: {
	        	content: '551 Oregon Way<br> Longview, WA 98632',
	        }	         
	    }],	        
	    hideByClick: false 


		


		}); // end $map
}); // end doc ready		   
	