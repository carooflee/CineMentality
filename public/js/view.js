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
        "<h2> The movie you are searching for could not be found. </h2>"
      );
    } else {
      $("#well-section").append("<h2>" + data.name + "</h2>");
      $("#well-section").append("<h5>Catharsis: " + data.catharsis + "</h5>");
      $("#well-section").append(
        "<h5>Trigger: " + data.trigger_rating + "</h5>"
      );
      $("#well-section").append("<h5>Comments: " + data.comments + "</h5>");
      $("#well-section").append("<h7>Posted on: " + data.createdAt + "</h7>");
    }
  });

  $("form").trigger("reset");
});
