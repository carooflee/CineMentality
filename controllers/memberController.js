var express = require("express");

var router = express.Router();

var User = require("../models/user.js");

router.get("/", function(req, res) {
    User.all(function(data) {
      var hbsObject = {
        email: data
      };
      console.log(hbsObject);
      res.render("movies", hbsObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;
