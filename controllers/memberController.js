const express = require("express");

const router = express.Router();

const User = require("../models/user.js");

router.get("/", (req, res) => {
  User.all(data => {
    const hbsObject = {
      email: data
    };
    console.log(hbsObject);
    res.render("movies", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
