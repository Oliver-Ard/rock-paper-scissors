// Rock-Paper-Scissors Game in console
//
//
//
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
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Create a function that plays best-of-five game that keeps score and reports a winner or loser at the end.

function game(rounds) {
  let playerScore = 0;
  let computerScore = 0;
  // Input for the player and display the result of the round
  const playGame = function () {
    if (rounds > 0) {
      const playerChoice = prompt(
        `Enter your choice (rock, paper or scissors):`
      );
      const computerChoice = getComputerChoice();
      const roundResult = playRound(playerChoice, computerChoice);

      console.log(roundResult);
      // Logic for how to keep the score
      if (roundResult.includes(`Win`)) {
        playerScore++;
      } else if (roundResult.includes(`Lose`)) {
        computerScore++;
      }
      rounds--;
      playGame();
    } else {
      if (playerScore > computerScore) {
        console.log(`Congratulations! You win the game!`);
      } else if (playerScore < computerScore) {
        console.log(`Sorry! You lose the game.`);
      } else {
        console.log(`It's a tie!`);
      }
    }
  };
  playGame();
}

game(5);
