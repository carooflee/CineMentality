// const dotenv = require("dotenv").config();
// const searchResults = [];
// const rottenTomatoesKey = process.env.RT_KEY;
const omdbKey = 78350918;
const rtBaseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
const movie = "dead alive";
//Search for movie reviews and ratings:
$("#search-button").on("click", event => {
  event.preventDefault();

  searchForMovieReview();
  // searchForMovie();
  $("#searchbar").empty();
});
// searchForMovieReview();
//OMDb API call.....
function searchForMovieReview() {
  const movieReviewSearch = $("#searchbar")
    .val()
    .trim();
  const queryURL = `https://www.omdbapi.com/?t=${movieReviewSearch}&apikey=${omdbKey}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {
    console.log(response);
    console.log(response.Ratings[1]);
    console.log(response.Poster);
    const movieDiv = $("<div class='card-img'>");
    const imgURL = response.Poster;
    const image = $("<img>").attr("src", imgURL);
    movieDiv.append(image);
  });
}
//Rotten Tomatoes API call.....
// function searchForMovie() {
//   const movieSearch = $("#searchbar")
//     .val()
//     .trim();
//   const queryURL2 = `${rtBaseUrl}/movies.json?apikey=${rottenTomatoesKey}`;
//   $.ajax({
//     url: queryURL2,
//     method: "GET"
//   }).then(response => {
//     console.log(response);
//   });
// }

// https://www.omdbapi.com/?t=${movieReviewSearch}&apikey=78350918

// Example code for the rotten tomatoes api call....
// ============================================================================================

//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>

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
