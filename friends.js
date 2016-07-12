$( document ).ready(function(){
			alert("jquery is working!");
			var $friends = $('#friends');
			var $name = $('#name');
			var $age = $('#age');
			
			var friendTemplate = " " +
				"<li>" +
				"<p><strong>Name: </strong>{{name}},</p>" +
				"<p><strong>Age: </strong>{{age}}</p>" +
				"<button id='{{id}}' class='remove'>X</button>" +
				"</li>";

			// var friendTemplate = " " +
			// 		"<li>" +
			// 		"<p><strong>Name:</strong> {{name}},</p>" + 
			// 		"<p><strong>Age:</strong> {{age}}</p>" +
			// 		"<button id='{{id}}' class='remove'>X</button>" +
			// 		"</li>";


			function addFriend(friend){
				$friends.append(Mustache.render(friendTemplate, friend));
			};
			

			$.ajax({
				type: 'GET',
				url: 'http://rest.learncode.academy/api/learncode/friends',
				success: function(friends) {
					// console.log("I have friends!", friends);
					$.each(friends, function(i, friend){
						addFriend(friend);
					}); 
				},
				error: function(){
					alert('error loading friends');
				}
			});

			$('#add-friend').on('click', function(){
				var friend = {
					name: $name.val(),
					age: $age.val()
				};

				$.ajax({
					type: 'POST',
					url: 'http://rest.learncode.academy/api/learncode/friends',
					data: friend,
					success: function(newFriend) {
					console.log("I have friends!", newFriend);
						addFriend(newFriend);
					},
					error: function(){
						alert('error saving new friend');
					}
				});
			});

			$friends.delegate('.remove', 'click', function(){
				var $li = $(this).closest('li');
				//AJAX DELETE Function - click the .remove class button and the id identifies what to delete
				$.ajax({
					type: 'DELETE',
					url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
					success: function(){
						$li.fadeOut(300, function(){
							$(this).remove();
						});
					}
				});
			});

		});