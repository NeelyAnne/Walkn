const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/walkn");

let db = mongoose.connection();
db.once("open", function() {
  console.log("Connected to MongoDB");
});

//check for DB errors
db.on("error"),
  function(err) {
    console.log(err);
  };
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

//Bring in Models
let Location = require("./models/Location");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/walkn", { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Home route
app.get("/", function(req, res) {
  Location.find({}, function(err, locations) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {
        name: "Locations",
        locations: locations
      });
    }
  });
});

// Add routes, both API and view
require("./routes/api-routes")(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", function(req, res) {
    res.json(__dirname + "/client/build/index.html");
  });
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
