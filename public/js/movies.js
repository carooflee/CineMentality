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

// Example code for the rotten tomatoes api call....
// ============================================================================================

// {/* <html>
//   <head>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>

//     <script>
// var apikey = "myapikey";
// var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";

// // construct the uri with our apikey
// var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
// var query = "Gone with the Wind";

// $(document).ready(function() {

//   // send off the query
//   $.ajax({
//     url: moviesSearchUrl + '&q=' + encodeURI(query),
//     dataType: "jsonp",
//     success: searchCallback
//   });
// });

// // callback for when we get back the results
// function searchCallback(data) {
//  $(document.body).append('Found ' + data.total + ' results for ' + query);
//  var movies = data.movies;
//  $.each(movies, function(index, movie) {
//    $(document.body).append('<h1>' + movie.title + '</h1>');
//    $(document.body).append('<img src="' + movie.posters.thumbnail + '" />');
//  });
// }

//     </script>

//   </head>
//   <body>
//   </body>
// </html> */}