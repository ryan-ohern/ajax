$('#check-weather').on('click', function(){

	var state = $('#state').val();
	var city = $('#city').val();

	$.ajax({
		type: 'GET',
		//need to use variables to 'GET' from correct url
		url: 'http://api.wunderground.com/api/a40d67f295f63f82/conditions/q/' + state + '/' + city + '.json',
		success: function(r) {
			var location = r.current_observation.display_location.full;
			var temp = r.current_observation.temperature_string;
			var wind = r.current_observation.wind_string;
			
			//For testing your variables
			// console.log(location);
			// console.log(temp);
			// console.log(wind);

			$("#location").text(location);
			$("#temp").text(temp);
			$("#wind").text(wind);
		},
		error: function(){
			alert('error loading');
		}
	}); //closes AJAX call

}); //closes click function