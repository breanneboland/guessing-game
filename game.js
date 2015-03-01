$(document).ready(function() {
  $("img").hide().fadeIn("slow");
});

var $colorGuess = $("#colorGuess");
var $textInput = $("input:text");
var guess = $colorGuess;

function evaluateGuess() {
  var guess;
  guess = $textInput.val();

  switch(guess) {
    case 'yellow':
      $("#response").after("<p>Mmm, nope, but it's half the answer.</p>");
      break;
    case 'red':
      $("#response").after("<p>Warmer. Slightly too warm, actually.</p>");
      break;
    case 'blue':
      $("#response").after("<p>Less sky, more grass.</p>");
      break;
    case 'green':
      $("#response").after("<p>YOU ARE THE WINNER! No, you don't win anything. But you guessed a thing right. Enjoy the self-esteem boost.</p>");
      break;
    case 'orange':
      $("#response").after("<p>That is a flavor, not a color. Don't contradict me.</p>");
      break;
    case 'purple':
      $("#response").after("<p>Wrong, but now I kind of wish I'd thought of that instead.</p>");
      break;
    case 'indigo':
      $("#response").after("<p>Newton was being superstitious with this stuff. Stop it.</p>");
      break;
    default:
      $("#response").after("<p>That is not a color, or at least not one my human overlord saw fit to put in her homework.</p>");
  }
}

$colorGuess.on("submit", function(e) {
  e.preventDefault();
  evaluateGuess();
  $textInput.val("");
});
