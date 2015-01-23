var express = require('express');
var morgan = require('morgan');
var nodemon = require('nodemon');
var swig = require('swig');
var _ = require('underscore');
var routes = require('./routes/');




var app = express();
app.use('/', routes);



app.use(morgan('dev'));

// designates entire folder as serving static content
// The express.static() method takes a root directory parameter and returns a middleware function.
app.use(express.static('public'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening:', host, port)

})



