// Global Variables
var theSecret =  Math.floor((Math.random() * 100) + 0); // Creates Secret Number.
var howManyGuessed = [];
var validationText = $("#userGuess").val();

// Doucment Ready Start
$(document).ready(function() {

  // Display information modal box  
  $(".what").click(function() {
  $(".overlay").fadeIn(1000);
  });

  // Hide information modal box 
  $("a.close").click(function() {
  $(".overlay").fadeOut(1000);
  });

 // Functions

// New Game
function newGame() {
  $(".new").click(function(event) {
  $("#feedback").text("Make your Guess"); // Reset Text
  $("#count").text(howManyGuessed = []); // Reset Count
  $("ul#guessList li").remove(); // Remove li.
  });
}

// Add To List ++ Inner Scope Variable
function addToList(event) {
  howManyGuessed.push(event); // Pushes an event value to how Many Guessed
  $("#count").text(howManyGuessed.length);  // Sets the count to howManyGuesses length.
  $("ul#guessList").append("<li>" + event + "</li>"); // Appends a li and adds an event value to the guessed Numbers list.
  
}

// Write Hot or Cold
function writeThis(event) {
  document.getElementById('feedback').innerHTML = event; // Changes HTML of #feedback to an event.
}

function validation() {
  if (validationText % 1 != 0) {
    document.getElementById('feedback').innerHTML = "No Decimals or Letters";
  } else {
      console.log("DEBUG validation");
  }
}

// Check Temp 
function checkTemp() {
  var userGuess = $("#userGuess").val(); // Local Scope Variable of the Value of the user input.
  var differance = Math.abs(theSecret - userGuess); // Local Scope Variable that checks the absoloute differance between the Secret and userGuess.
  addToList(userGuess); // Makes addToList event = userGuess.

  // Checks if Hot or Cold
  validation();
  if (differance < 5) { 
    writeThis("Volcano Hot");
  } else if (differance < 25) 
      writeThis("Super Hot");
  else if (differance < 50) {
    writeThis("Hot");
  } else if (differance < 75) {
      writeThis("Cold");
  } else if (differance < 100) {
      writeThis("Ice Cold");
    }
}

 // Submit Everything
  $("form").submit(function(evt) {
    evt.preventDefault();
    checkTemp();
    newGame();
  });

// Document Ready Ended.
});

