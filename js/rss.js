$(document).ready(function () {
	$('#ticker1').rssfeed('http://www.autoblog.com/rss.xml',{}, function(e) {
		$(e).find('div.rssBody').vTicker({showItems: 3});
	}); // end ticker1

	$('#ticker2').rssfeed('http://wot.motortrend.com/feed/',{}, function(e) {
		$(e).find('div.rssBody').vTicker({showItems: 3});
	}); // end ticker2

	$('#ticker3').rssfeed('http://feeds.highgearmedia.com/?sites=TheCarConnection-CarReviews',{}, function(e) {
		$(e).find('div.rssBody').vTicker({showItems: 3});
	}); // end ticker3

	$('#ticker4').rssfeed('http://automotive-repair1.webnode.com/rss/news-.xml',{}, function(e) {
		$(e).find('div.rssBody').vTicker({showItems: 3});
	}); // end ticker4

	$('#ticker5').rssfeed('http://feeds.feedburner.com/caranddriver/blog',{}, function(e) {
		$(e).find('div.rssBody').vTicker({showItems: 3});
	}); // end ticker5
});

$(document).ready(function(){
	// Increase text size
	$('#increase').click(function(){ //When + button clicked
		$('#nav *, #content h2').each(function(){ // loop through each element and retrieve font-size
				size = parseFloat($(this).css('font-size')); // strip the units from font-size
				if(size + 2 < 41){
					size = size + 2 + "px";  // increment font-size and add units back in
					$(this).css({'font-size': size}); // set font size of element to new value
				} // end if
		}); // end each
	}); // end click

	// Decrease text size
	$('#decrease').click(function(){ //When - button clicked
		$('#nav *').each(function(){ // loop through each element and retrieve font-size
				size = parseInt($(this).css('font-size')); // strip the units from font-size
				if(size - 2 > 13){
					size = size - 2 + "px";  // increment font-size and add units back in
					$(this).css({'font-size':size}); // set font size of element to new value
				} // end if	
			}); // end each
	}); // end click
			
}); // end ready
