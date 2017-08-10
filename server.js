// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const strf = require("strftime");

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));

app.get("/api/:t", (req, res)=>{
  var time = req.params.t;
  //check for unix time
  if(isNaN(parseInt(time))){//time is a string
    var d = new Date(time);
    res.end(JSON.stringify(
      {
      unix: d.getTime(),
      natural: (d.toUTCString() === "Invalid Date") ? null : strf("%B %d %Y",d) //is utc string an invalid date? If so return null, if not then return the utcdate. 
    }));
    
  }else if(!isNaN(parseInt(time))){ //time is number
    time = parseInt(time);
    var d = new Date(time);
    res.end(d.toString());
  }  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
