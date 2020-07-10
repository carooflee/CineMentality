var express = require("express");

var router = express.Router();

var members = require("../models/user.js");

router.get("/", function(req, res) {
    members.all(function(data) {
      var hbsObject = {
        email: data
      };
      console.log(hbsObject);
      res.render("movies", hbsObject);
    });
  });

module.exports = router;
