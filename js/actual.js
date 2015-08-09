
		$(document).ready(function(){
			$('label'.click(function(){

						var total = 0;

			$('.options:checked').each(function(){
				total+=parseInt($(this).val());
			});
			$('#total').html('$'+total);
		});
		});