// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.freecodecamp.org"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, application/json");
  next();
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));

/**
 * Creates the timestamp to be used in the response. 
 * @param {*} dateStringOrInteger - either a string or integer. 
 */
function createTimestamp (dateStringOrInteger) {
  let date = (dateStringOrInteger == null) ? new Date() : new Date(dateStringOrInteger);
  return (date == "Invalid Date" ) ? {"error" : "Invalid Date" } : {"unix": date.getTime(), "utc" : date.toUTCString() }
} 

/**
 * /api/timestamp/:date_string route. Returns a timestamp from a given date. 
 */
app.get("/api/timestamp/:date_string", (req, res)=>{
  const dateString = req.params.date_string;
  if (isNaN(dateString) && Boolean(dateString)) { // if not a number and has a value, assume it's a string.
    res.json(createTimestamp(dateString));

  } else if (!isNaN(dateString)) { // if number, 
    // parse the parameter to an integer and make new date
    res.json(createTimestamp(parseInt(dateString)));

  } else {
    res.json({"error" : "unable to identify user input." });
  }
  
});

/**
 * /api/timestamp/ route. No paramter. Returns a timestamp now. 
 */
app.get("/api/timestamp/", (req, res)=>{
  //used when no parameter is given
  res.json(createTimestamp(null));
  
});

// listen for requests :) 
var listener = app.listen(process.env.PORT , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
