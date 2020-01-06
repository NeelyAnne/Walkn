module.exports = function(app) {
  app.get("/api/protected", function(req, res) {
    res.json({
      message: "you should only see this if you're authenticated."
    });
  });

  app.get("/api/public", function(req, res) {
    res.json({
      message: "This is just boring, public data."
    });
  });
};
