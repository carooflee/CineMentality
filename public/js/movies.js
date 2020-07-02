let dotenv = require ('dotenv').config();
let searchResults = [];
let rottenTomatoesKey = process.env.RT_KEY;
let omdbKey = process.env.OMDB_KEY;

$(document).ready(function () {

    //Search for movie reviews and ratings:
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        searchForMovieReview()
        searchForMovie()
    })
    //OMDb API call.....
    function searchForMovieReview() {
        let movieReviewSearch = $("#search-input").val().trim();
        let queryURL = `https://www.omdbapi.com/?t=${movieReviewSearch}&apikey=${omdbKey}`;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
        });
    };
    //Rotten Tomatoes API call.....
    function searchForMovie() {
        let movieSearch = $("#search-input").val().trim();
        let querryURL2 = `http://api.rottentomatoes.com/api/public/v1.0.json?apikey=${rottenTomatoesKey}`;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
        });
    };
}

// https://www.omdbapi.com/?t=${movieReviewSearch}&apikey=78350918