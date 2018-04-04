console.log('the favourite bot is running');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

