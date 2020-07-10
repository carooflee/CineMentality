// when user clicks add-btn
$("#add-btn").on("click", event => {
  event.preventDefault();
  // make a newMovie object
  const newMovie = {
    name: $("#movie-name")
      .val()
      .trim(),
    catharsis: $("#catharsis")
      .val()
      .trim(),
    trigger: $("#trigger")
      .val()
      .trim(),
    comments: $("#comments")
      .val()
      .trim()
  };

  // AJAX POST-request with jQuery
  $.post("/api/new", newMovie)
    // on success, run this callback
    .then(data => {
      console.log(data);
      alert("Adding movie review...");
    });
  // empty each input box by replacing the value with an empty string
  $("#movie-name").val("");
  $("#catharsis").val("");
  $("#trigger").val("");
  $("#comments").val("");
});
