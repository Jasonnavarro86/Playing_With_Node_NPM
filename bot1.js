console.log("Node Testing Done Here");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var tweet =  { status: 'Tweeting From My BASH! #NodeWhatIMean?' }

T.post('statuses/update', tweet , tweeted);

function tweeted(err, data, response) {
  console.log(data)
}


