var http = require('http');


function onRequest(request, response){
	console.log("Our user made a request" + request.URL); //log something out
	response.writeHead(200, {"Context-Type": "text/plain"}); //set up response and send text
	response.write("Here is your crazy data, bro."); //send the text or info
	response.end(); //
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running");