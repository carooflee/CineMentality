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

    //  Add links to the add review page and the view review pages.
    const addReviewButton = $("<a>")
      .text("Add a movie review here")
      .attr("href", "add.html").attr("id", "addReviewButton");
    const viewReviewButton = $("<a>")
      .text("View current movie reviews here")
      .attr("href", "view.html").attr("id", "viewReviewButton");

    console.log(response);
    // Empty the divs if there is existing data.
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
      .append(image);

    posterDivTwo
      .append(moviePlot)
      .append(movieRating)
      .append(rottenTomatoes)
      .append(addReviewButton)
      .append(viewReviewButton);

    //  Write new data to the HTML page.
    $("#movieAreaOne").append(posterDivOne);
    $("#movieAreaTwo").append(posterDivTwo);
    $("#memberMovieAreaOne").append(posterDivOne);
    $("#memberMovieAreaTwo").append(posterDivTwo);
    $("#addMovieReviewDiv").append(addReviewButton);
    $("#viewMovieReviewDiv").append(viewReviewButton);
  });
}
