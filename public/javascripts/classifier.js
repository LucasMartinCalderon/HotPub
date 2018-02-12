require('dotenv').config();
const Twit = require('twit');
const config = require('../../config');
let T = new Twit(config);
var tweeter = require('./twitter');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': process.env.USERNAME,
  'password': process.env.PASSWORD,
  'version_date': process.env.VERSION_DATE
});

let params = { 
  q: '*', 
  geocode: "40.4893538421231,-3.6827461557,10km",
  lang: "en",
  count: 2
}


var twit = T.get('search/tweets', params).then( (info) => {
  var twitString = "";
   let tweets = info.data.statuses;
   for(let i=0; i< tweets.length; i++){
     twitString = twitString + " " + tweets[i].text.replace(/[&\/\\#,;.+()$~%.'":*?<>{}]/g,"");
    }
    console.log(typeof(twitString));
    return twitString;
  }).then((data) => {
    var parameters = {
      'text': data,
      'features': {
        'entities': {
          'emotion': true,
          'sentiment': true,
          'limit': 1,
        }
      }
    };
    natural_language_understanding.analyze(parameters, function(err, response) {
      if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
  });
 });




