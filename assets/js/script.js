// Variables for game records
var wins = 0;
var ties = 0;
var losses = 0;

// Declare Array of options for user and computer to pick
var optionsToChoose = ["R", "P", "S"];

// Play Game Function
var playGame = function () {
  // Ask for user choice
  var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed cancel button, end the function
  if (!userChoice) {
    return;
  }

  //conver to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var randomIndex = Math.floor(Math.random() * optionsToChoose.length);
  var compChoice = optionsToChoose[randomIndex];

  // window pops the computer chose
  window.alert("The computer chose " + compChoice);

  //If choices are the same, tie
  if (userChoice === compChoice) {
    ties++;
    window.alert("It's a tie");

    // check every win condition for the player
  } else if (
    (userChoice === "R" && compChoice === "S") ||
    (userChoice === "P" && compChoice === "R") ||
    (userChoice === "S" && compChoice === "P")
  ) {
    wins++;
    window.alert("You Win!");

    //if above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You Lost!");
  }

  //Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  //Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user chose OK, run the function agian
  if (playAgain) {
    playGame();
  }
};

//Call the game function to play
playGame();
