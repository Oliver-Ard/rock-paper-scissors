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

// Create a function that plays a single round of the game.

function playRound(playerSelection, computerSelection) {
  // Convert player's input to lowercase for case-insensitive.
  playerSelection = playerSelection.toLowerCase();
  // Logic to determine the winner for different choices.
  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose:` + playerSelection;
  } else if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = `scissors`;
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
