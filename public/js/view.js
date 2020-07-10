$("#search-btn").on("click", event => {
  event.preventDefault();
  const searchedMovies = $("#character-search")
    .val()
    .trim();
  // Using a RegEx Pattern to remove spaces from searchedCharacter
  searchedMovies = searchedMovies.replace(/\s+/g, "").toLowerCase();
  // AJAX GET-request for our servers api,
  $.get("/api/" + searchedMovies, data => {
    console.log(data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").append(
        "<h2> The movie you are searching for could not be found. </h2>"
      );
    } else {
      $("#well-section").append("<h2>" + data.name + "</h2>");
      $("#well-section").append("<h3>Catharsis: " + data.catharsis + "</h3>");
      $("#well-section").append("<h3>Trigger: " + data.trigger + "</h3>");
      $("#well-section").append("<h3>Comments: " + data.comments + "</h3>");
    }
  });
});
