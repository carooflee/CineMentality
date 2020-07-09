// const dotenv = require("dotenv").config();
// const searchResults = [];
// const rottenTomatoesKey = process.env.RT_KEY;
const omdbKey = 78350918;
// const rtBaseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
//Search for movie reviews and ratings:
$("#search-button").on("click", event => {
  event.preventDefault();

  searchForMovieReview();
  $("form").trigger("reset");

  catharsisRating();
  // searchForMovie();
});

function catharsisRating() {
  const searchedMovie = $("#searchbar")
    .val()
    .trim();
  searchedMovie = searchedMovie.replace(/\s+/g, "").toLowerCase();
  $.get("/api/" + searchedMovie, data => {
    console.log(data);
    $("#catharsis-rating").empty();
    if (!data) {
      $("#catharsis-rating").append(
        "<h4>There is no cathersis or trigger rating for this movie.</h4>"
      );
    } else {
      $("#catharsis-rating").append("<h4>" + data.catharsis + "</h4>");
      $("#trigger-rating").append("<h4>" + data.trigger + "</h4>");
    }
  });
}
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
    const imgURL = response.Poster;
    const image = $("<img>").attr("src", imgURL);
    const movieTitle = $("<h2>").text("Movie: " + response.Title);
    const moviePlot = $("<h3>").text("Plot: " + response.Plot);
    const movieRating = $("<h4>").text("Rated: " + response.Rated);
    const movieYear = $("<h4>").text("Year: " + response.Year);
    const rottenTomatoes = $("<h4>").text("Rotten Tomatoes: " + response.Ratings[1].Value);
    const posterDivOne =  $("<div>").addClass("card").attr("id", "posterDivOne");
    const posterDivTwo = $("<div>").addClass("card").attr("id", "posterDivTwo");
    console.log(response)

    $("#movieAreaOne").empty();
    $("#movieAreaTwo").empty();



    posterDivOne.append(movieTitle).append(movieYear).append(image);
    posterDivTwo.append(moviePlot).append(movieRating).append(rottenTomatoes);
    $("#movieAreaOne").append(posterDivOne);
    $("#movieAreaTwo").append(posterDivTwo);

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

// const apikey = "myapikey";
// const baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";

// // construct the uri with our apikey
// const moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
// const query = "Gone with the Wind";

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
//  const movies = data.movies;
//  $.each(movies, function(index, movie) {
//    $(document.body).append('<h1>' + movie.title + '</h1>');
//    $(document.body).append('<img src="' + movie.posters.thumbnail + '" />');
//  });
// }
