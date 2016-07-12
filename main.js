
// var http = require('http');


// function onRequest(request, response){
// 	console.log("Our user made a request" + request.URL); //log something out
// 	response.writeHead(200, {"Context-Type": "text/plain"}); //set up response and send text
// 	response.write("Here is your crazy data, bro."); //send the text or info
// 	response.end(); //
// }

// http.createServer(onRequest).listen(8888);
// console.log("Server is now running");

$( document ).ready(function(){
	alert("jquery is working!");
	var $friends = $('#friends');
	var $name = $('#name');
	var $age = $('#age');

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		success: function(friends) {
			$.each(friends, function(i, friend){
				$friends.append('<li>name: ' + friend.name + ', age: ' + friend.age + '</li>');
			}); 
		},
		error: function(){
			alert('error loading friends');
		}
	});

	$('#add-friend').on('click', function(){
		var friend = {
			name: $name.val(),
			age: $age.val(),
		};

		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			date: friend,
			success: function(newFriend) {
				$friends.append('<li>name: ' + friend.name + ', age: ' + friend.age + '</li>');
			},
			error: function(){
				alert('error saving new friend');
			}
		});
	});

});