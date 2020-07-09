// Dependencies
// =============================================================
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log(req.user.email);
      res.redirect("/members");
      
    }
    console.log(req.user)
    
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    console.log(req.user)
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  // index route loads index.html
  // app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // movie route loads movie.html
  app.get("/movie", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/movie.html"));
  });

  // membership route loads membership.html
  app.get("/membership", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/membership.html"));
  });

  // signup route loads signup.html
  app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
};
