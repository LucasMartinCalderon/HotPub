const Twit = require('twit');
const config = require('../../config');
let T = new Twit(config);
let twitString = "";

// let params = {
//  q: '*',
//  //geocode: "40.416937,-3.704513,5km",
//  geocode: "40.4893538421231,-3.6827461557,10km",
//  lang: "en",
//  count: 20
//  //YYYY-MM-DD
//  //until:

// }
var twits
function gotData(err, data, response) {

 //console.log(data);
 
 let tweets = data.statuses;
 for(let i=0; i< tweets.length; i++){
   twitString = twitString + " "+ tweets[i].text.replace(/[&\/\\#,;.+()$~%.'":*?<>{}]/g,"");
   //console.log("Location: " + tweets[i].user.location);
   //console.log(tweets[i].user);
 }
 console.log("Lo que nos interesa;");
 console.log(twitString);
 
}

T.get('search/tweets', params, gotData);
 
console.log(twitString)