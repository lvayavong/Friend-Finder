
// LOAD DATA
// We are linking our routes to a series of "public" sources.
// These public sources hold arrays of information on table-public, waitinglist, etc.
// ===============================================================================
var path = require ("path");
var home = require("../public/home.html");
var survey = require("../public/survey.html");
var friends = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // public GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/public/admin... they are shown a JSON of the public in the table)
  // ---------------------------------------------------------------------------

  app.get("/public/friends", function(req, res) {
    res.json(friends);
  });

  app.get("/public/survey", function(req, res) {
    res.json(survey);
  });

  // public POST Requests
  // Below code handles when a user submits a form and thus submits public to the server.
  // In each of the below cases, when a user submits form public (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this public is then sent to the server...
  // Then the server saves the public to the friends array)
  // ---------------------------------------------------------------------------

  app.post("/public/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (home.length < 5) {
      home.push(req.body);
      res.json(true);
    }
    else {
      survey.push(req.body);
      res.json(false);
    }
  });

};
