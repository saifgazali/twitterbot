console.log('the follow bot is running');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//var fs = require('fs');

//var exec = require('child_process').exec;





//setting a user stream
var stream = T.stream('user');

//anytime someone follows
stream.on('follow',followed);

function followed(eventMsg){
	console.log("follow event");
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetit('@  ' + screenName + '  thank you for following r u ready for tommorow' );
    
}


//tweetit();

//setInterval(tweetit,1000*20)

function tweetit(txt){
  var tweet{
    status:txt
  }
  T.post('statuses/update',tweet,tweeted);
  function tweeted(err, data, response) {
     if(err){
         console.log("error");
      }
     else{
        console.log("it worked!");
      }

    }

