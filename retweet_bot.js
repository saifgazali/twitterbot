console.log('the retweet bot is running');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var retweet = function(){

var params = {
	q: '#gujarat',
	q:'#rahulgandhi',
	lang:'en'
  }


T.get('search/tweets', params, function(err, data) {

	//if no errors
	if(!err)
	{
		var retweetid = data.statuses[0].id_str;

		T.post('statuses/retweet/:id', 
			{ 
				id: retweetid 
			}, function(err, response) {
        if(response){
        	console.log("Retweeted!");
        }
        if(err){
        	console.log("something went wrong");
        }
   });


	}
	else{
		console.log("something went wrong while searching");
	}
  
  });
}
retweet();
setInterval(retweet,1000*10);