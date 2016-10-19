$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var sentenceInput = $("input#sentence").val().toUpperCase();

    $("#uppercase").text(sentenceInput);

    $("#result").show();

    event.preventDefault();
  });
});
