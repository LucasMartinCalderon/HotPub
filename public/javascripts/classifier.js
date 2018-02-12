require('dotenv').config();
require('./twitter');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': process.env.USERNAME,
  'password': process.env.PASSWORD,
  'version_date': process.env.VERSION_DATE
});

let params = {
  q: '*',
  //geocode: "40.416937,-3.704513,5km",
  geocode: "40.4893538421231,-3.6827461557,10km",
  lang: "en",
  count: 20
  //YYYY-MM-DD
  //until:
 
 }

 

var parameters = {
  'text': twit(),
  'features': {
    'semantic_roles': {},
    'entities': {
      'emotion': true,
      'sentiment': true,
      'limit': 2,
    },
    'keywords': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    },
  }
};
natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
