const User = require("../models/User");
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../middleware/isAuthenticated");
const Location = require("../models/Location");

module.exports = function(app) {
  app.post("/api/signup", function(req, res) {
    User.create(req.body)
      .then(function() {
        res.json({ message: "User created" });
      })
      .catch(function(err) {
        let status = 500;
        if (err.message.match(/duplicate key error/)) {
          status = 400;
        }
        res.status(status).json({ message: err.message });
      });
  });

  app.post("/api/addLocation", function(req, res) {
    Location.create(req.body).then(function() {
      res.json({ message: "Location created." });
    });
  });

  app.post("/api/authenticate", function(req, res) {
    User.findOne({ username: req.body.username })
      .then(function(dbUser) {
        if (!dbUser) {
          return res.status(401).json({
            message: "Sorry, that username and password are incorrect."
          });
        }
        if (dbUser.comparePassword(req.body.password)) {
          const token = jwt.sign(
            {
              data: dbUser._id
            },
            "superSecretKey"
          );

          res.json({
            id: dbUser._id,
            username: dbUser.username,
            token: token
          });
        } else {
          return res.status(401).json({
            message: "Sorry, that username and password are incorrect."
          });
        }
      })
      .catch(function(err) {
        res.status(500).json({ message: err.message });
      });
  });

  app.get("/api/protected", isAuthenticated, function(req, res) {
    res.json({
      message: `Welcome ${req.user.username}!`
    });
  });

  app.get("/api/public", function(req, res) {
    res.json({
      message: "This is just boring, public data."
    });
  });

  app.get("/api/me", isAuthenticated, function(req, res) {
    res.json(req.user);
  });
};
