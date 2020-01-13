// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const strf = require("strftime");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));

function clockWork(d){//d is a date object
  return JSON.stringify({
    unix: d.getTime()/1000,
    natural: (d.toDateString() === "Invalid Date") ? null : strf("%B %d %Y",d)
  });
}

app.get("/api/timestamp/:date_string", (req, res)=>{
  var time = req.params.date_string;
  //check for unix time
  if(isNaN(parseInt(time))){//time is a string
    var d = new Date(time);
    res.end(clockWork(d));
  }else if(!isNaN(parseInt(time))){ //time is number
    time = parseInt(time);
    var d = new Date(time*1000);//Date requires milliseconds
    res.end(clockWork(d));
  }  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
