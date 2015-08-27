$(document).ready(function(){
			
			var address2 = $('#address2');
			var notes = $('#notes');
			var errors = $('.errors');

			$('#get_quote').submit(function(evt){
				$('.errors').remove();
				$(':input').each(function(){
					if ($(this).attr('name') !== address2.attr('name') && $(this).attr('name') !== notes.attr("name")) {
						if ($(this).val() === ""){
							$(this).css({'border': '2px solid red', 'backgroundColor': '#F77D7D'}).after('<span class="errors"> * This Field is Required </span>');
							evt.preventDefault();
						} else {
							$(this).css({'border': '1px solid rgb(169,169,169)', 'backgroundColor': 'white'});
						}
					} else if ($(this).attr('name') == notes.attr('name')) {
						console.log('manipulating notes!');		
						if ($('#other').is(':checked')) {
							console.log('other is checked');
							notes.css({'border': '2px solid red', 'backgroundColor': '#F77D7D'}).after('<span class="errors"> * Please provide information on work required </span>');
							
						} else {
							notes.css({'border': '1px solid rgb(169,169,169)', 'backgroundColor': 'white'});
						}
					}
				}); // end of each

				$('.submit').css('backgroundColor', '#203DBA')
				var checkCount = 0;
				$('.service').each(function(){
					if ($(this).is('checked')) {
						checkCount++;
						console.log(checkCount);
					}
				}); // end of each()

				if (checkCount < 1) {
					$('#service_set').css({'border': '2px solid red', 'backgroundColor': '#F77D7D'});
					$('#service_set').after('<span class="errors"> * Please select service required </span>')
				} else {
					$('#service_set').css({'border': '1px solid rgb(169,169,169)', 'backgroundColor': 'white'});
				}

				var state = $('#state :selected').val();
				if(state == '-') {
					$('#state').css('border','2px solid red').after('<span class="errors"> * This Field is required</span>');
				} else {
					$('#state').css({'border': '1px solid rgb(169,169,169)', 'backgroundColor': 'white'});
				}



				evt.preventDefault();
			}); // end submit
		});  // end ready