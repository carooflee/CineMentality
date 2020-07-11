const omdbKey = 78350918;
//Search for movie reviews and ratings:
$("#search-button").on("click", event => {
  event.preventDefault();

  searchForMovieReview();
  $("form").trigger("reset");
});

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
    const rottenTomatoes = $("<h4>").text(
      "Rotten Tomatoes: " + response.Ratings[1].Value
    );
    const posterDivOne = $("<div>")
      .addClass("card")
      .attr("id", "posterDivOne");
    const posterDivTwo = $("<div>")
      .addClass("card")
      .attr("id", "posterDivTwo");
    const reviewButton = $("<a>").text("Add a movie review here").attr("href", "add.html").attr("button", "blue")
    console.log(response);

    $("#movieAreaOne").empty();
    $("#movieAreaTwo").empty();
    $("#addMovieReviewDiv").empty();

    posterDivOne
      .append(movieTitle)
      .append(movieYear)
      .append(image);
    posterDivTwo
      .append(moviePlot)
      .append(movieRating)
      .append(rottenTomatoes);
    $("#movieAreaOne").append(posterDivOne);
    $("#movieAreaTwo").append(posterDivTwo);
    $("#addMovieReviewDiv").append(reviewButton);
  });
}
// function catharsisRating() {
//   const searchedMovie = $("#searchbar")
//     .val()
//     .trim();
//   searchedMovie = searchedMovie.replace(/\s+/g, "").toLowerCase();
//   $.get("/api/" + searchedMovie, data => {
//     console.log(data);
//     $("#catharsis-rating").empty();
//     if (!data) {
//       $("#catharsis-rating").append(
//         "<h4>There is no cathersis or trigger rating for this movie.</h4>"
//       );
//     } else {
//       $("#catharsis-rating").append("<h4>" + data.catharsis + "</h4>");
//       $("#trigger-rating").append("<h4>" + data.trigger + "</h4>");
//     }
//   });
// }
// searchForMovieReview();
