var express = require('express');
var morgan = require('morgan');
var nodemon = require('nodemon');

var app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/tweets', function (req, res) {
	res.send('Ready to tweet?.... Oh yeah!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening:', host, port)

})

