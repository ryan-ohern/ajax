var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));
// app.use('/static', express.static(__dirname + './public'));
// app.use(express.static(path.join(__dirname + './public')));
// app.use(express.static('public'));

// process.env.PWD = process.cwd();

// app.use(express.static(process.env.PWD+'/public'));


// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

