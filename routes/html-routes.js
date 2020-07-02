
// Dependencies
// =============================================================
let path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // movie route loads movie.html
  app.get("/movie", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/movie.html"));
  });

  // membership route loads membership.html
  app.get("/membership", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/membership.html"));
  });

  // signup route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};
