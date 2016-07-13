var app = require('express')();
var http = require('http').Server(app);

// app.use('/static', express.static(__dirname + '/public'));
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
// app.use(express.static('src/views'));


app.get('/', function(req, res){
	res.sendFile(__dirname + '/weather.html');
});

http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});

