	//var express = require('express');
	var tweetBank = require('../tweetBank');
	//var router = express.Router();
	var bodyParser = require('body-parser');

	var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app,io) {

//changing all router.VERB with app.VERB
	app.get('/', function (req, res) {
		var name = req.params.name;
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
	 });

	app.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var tweets = tweetBank.find( {name: name} );
	  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: tweets, showForm: true} );
	});

	app.get('/users/:name/tweets/:id', function (req, res) {
		var name = req.params.name,
				tweedId = parseInt(req.params.id),
				tweets = tweets;
		res.render('index', { title: 'Tweet' + tweetId + 'by ' + name, tweets: tweets, showForm: true});
	})

	app.post('/submit', urlencodedParser, function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  io.sockets.emit('new_tweet', {  title: 'Twitter.js - Posts by '+ name, text: text, showForm: true}
	 );
	  res.redirect('/');
	});

//module.exports = router;
}; 