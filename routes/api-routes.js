// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
let db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/posts/", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function (req, res) {
        db.Post.findAll({
            where: {
                category: req.params.category
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}