var express = require('express');
var tweetBank = require('../tweetBank');
var router = express.Router();


router.get('/', function (req, res) {
	var name = req.params.name;
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
 });

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: tweets} );
});

module.exports = router;