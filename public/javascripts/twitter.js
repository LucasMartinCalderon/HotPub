const Twit = require('twit');
const config = require('../../config');
let T = new Twit(config);
let twitString = "";


var twit = (params) => {
T.get('search/tweets', params).then( (info) => {
  let tweets = info.data.statuses;
  for(let i=0; i< tweets.length; i++){
    twitString = twitString + " " + tweets[i].text.replace(/[&\/\\#,;.+()$~%.'":*?<>{}]/g,"");
   }
   return twitString;
});
};

