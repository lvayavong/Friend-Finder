
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var app = express();

var PORT = 8080;


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require(path.join(__dirname, "./routing/apiRoutes"))(app);
require(path.join(__dirname, "./routing/htmlRoutes"))(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
