$("#search-button").on("click", event => {
  event.preventDefault();

  let searchedMovies = $("#searchbar")
    .val()
    .trim();
  // Using a RegEx Pattern to remove spaces from searchedCharacter
  console.log(searchedMovies);
  searchedMovies = searchedMovies.replace(/\s+/g, "").toLowerCase();
  console.log(searchedMovies);
  // AJAX GET-request for our servers api,
  $.get("/api/views/" + searchedMovies, data => {
    console.log(data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").append(
        "<h2> The movie you are searching for currently doesn't have any reviews. </h2>"
      );
    } else {
      $("#well-section").append("<h2>" + data.name + "</h2>");
      $("#well-section").append("<h3>Catharsis: " + data.catharsis + "</h3>");
      $("#well-section").append("<h3>Trigger: " + data.trigger_rating + "</h3>");
      $("#well-section").append("<h3>Comments: " + data.comments + "</h3>");
      $("#well-section").append("<h3>Created: " + data.createdAt + "</h3>");
    }
  });

  $("form").trigger("reset");
});

//testing files
