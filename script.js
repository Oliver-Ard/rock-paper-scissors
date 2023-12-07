// Rock-Paper-Scissors Game in console

//Create a function that generates random rock, paper, scissors words by the computer.

function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  //   Assign choices based on random number
  let computerChoice;
  if (randomNumber === 0) {
    computerChoice = `rock`;
  } else if (randomNumber === 1) {
    computerChoice = `paper`;
  } else {
    computerChoice = `scissors`;
  }

  return computerChoice;
}

console.log(getComputerChoice());

// Create a function that plays a single round of the game.
