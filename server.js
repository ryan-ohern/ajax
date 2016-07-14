// var app = require('express')();
// var http = require('http').Server(app);

// // app.use('/static', express.static(__dirname + '/public'));
// app.use(express.static('public'));
// // app.use(express.static(__dirname + '/public'));
// // app.use(express.static('src/views'));
// app.use(express.static(path.join(__dirname, '/public')));

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/weather.html');
// });













var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});