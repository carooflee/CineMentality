const omdbKey = process.env.OMDBKEY;
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
    let imgURL = response.Poster;
    let image = $("<img>").attr("src", imgURL);
    let movieTitle = $("<h2>").text("Movie: " + response.Title);
    let moviePlot = $("<h3>").text("Plot: " + response.Plot);
    let movieRating = $("<h4>").text("Rated: " + response.Rated);
    let movieYear = $("<h4>").text("Year: " + response.Year);
    let rottenTomatoes = $("<h4>").text("Rotten Tomatoes: " + response.Ratings[1].Value);
    let posterDivOne = $("<div>")
      .addClass("card")
      .attr("id", "posterDivOne");

    let posterDivTwo = $("<div>")
      .addClass("card")
      .attr("id", "posterDivTwo");

    let posterDivThree = $("<div>")
      .addClass("card")
      .attr("id", "posterDivThree");

    let addReviewButton = $("<a>").text("Add a movie review here").attr("href", "add.html").attr("id", "addReviewButton");
    let viewReviewButton = $("<a>").text("View current movie reviews here").attr("href", "view.html").attr("id", "viewReviewButton");

    console.log(response);

    $("#movieAreaOne").empty();
    $("#movieAreaTwo").empty();
    $("#movieAreaThree").empty();
    $("#memberMovieAreaOne").empty();
    $("memberMovieAreaTwo").empty();
    $("#addMovieReviewDiv").empty();
    $("#viewMovieReviewDiv").empty();


    posterDivOne
      .append(movieTitle)
      .append(movieYear)
      .append(image)

    posterDivTwo
      .append(moviePlot)
      .append(movieRating)
      .append(rottenTomatoes)
      .append(addReviewButton)
      .append(viewReviewButton)

    // posterDivThree
    //   .append(moviePlot)
    //   .append(movieRating)
    //   .append(rottenTomatoes)
    //   .append(viewReviewButton);

    $("#movieAreaOne").append(posterDivOne);
    $("#movieAreaTwo").append(posterDivTwo);
    // $("#movieAreaThree").append(posterDivThree);
    $("#memberMovieAreaOne").append(posterDivOne);
    $("#memberMovieAreaTwo").append(posterDivTwo);
    $("#addMovieReviewDiv").append(addReviewButton);
    $("#viewMovieReviewDiv").append(viewReviewButton);



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

