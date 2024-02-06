// ----HTML Elements----
// Welcome Section
const welcomeSection = document.querySelector(".game-welcome");
const welcomeBtn = document.querySelector(".game-welcome button");
// Intro Section
const introSection = document.querySelector(".game-intro-menu");
const introBtns = document.querySelectorAll(".game-intro-menu button");
// Play Section
const playSection = document.querySelector(".game-play-menu");
const playBtns = document.querySelectorAll(".game-play-menu button");
const scoreInfo = document.querySelector(".score-info");
const scoreMessage = document.querySelector(".score-message");
const playerScorePara = document.querySelector(".player-score");
const computerScorePara = document.querySelector(".computer-score");
const playerSign = document.querySelector(".player-sign");
const computerSign = document.querySelector(".computer-sign");
// Game Over Section
const gameOverSection = document.querySelector(".game-over");
const gameOverPara = document.querySelector(".game-over p");
const gameOverBtn = document.querySelector(".game-over button");

// ----Game logic----
let playerScore = 0;
let computerScore = 0;
let roundsNumber = 0;
let roundWinner = "";

function playGame(playerSelection) {
	if (!isGameOver()) {
		const computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
	}
	isGameOver();
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		roundWinner = "tie";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore++;
		roundWinner = "player";
	} else {
		computerScore++;
		roundWinner = "computer";
	}
	updateScoreMessage(playerSelection, computerSelection);
	updatePlayersChoices(playerSelection, computerSelection);
	updateScoreInfo();
}

function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		return "rock";
	} else if (randomNumber === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function isGameOver() {
	if (playerScore === roundsNumber || computerScore === roundsNumber) {
		showGameResults();
		hideSection(playSection);
		hideSection(gameOverSection);
	}
}

function restartGame() {
	playerScore = 0;
	computerScore = 0;
	roundsNumber = 0;
	roundWinner = "";
	clearUi();
	hideSection(gameOverSection);
	hideSection(introSection);
}

// ----Update UI----
function updatePlayersChoices(playerSelection, computerSelection) {
	if (playerSelection === "rock") {
		playerSign.textContent = "";
		const icon = document.createElement("i");
		icon.classList.add("fa-solid", "fa-hand-back-fist", ".dark");
		playerSign.appendChild(icon);
	} else if (playerSelection === "paper") {
		playerSign.textContent = "";
		const icon = document.createElement("i");
		icon.classList.add("fa-solid", "fa-hand", ".dark");
		playerSign.appendChild(icon);
	} else if (playerSelection === "scissors") {
		playerSign.textContent = "";
		const icon = document.createElement("i");
		icon.classList.add("fa-solid", "fa-hand-scissors", ".dark");
		playerSign.appendChild(icon);
	}

	if (computerSelection === "rock") {
		computerSign.textContent = "";
		const icon = document.createElement("i");
		icon.classList.add("fa-solid", "fa-hand-back-fist", ".dark");
		computerSign.appendChild(icon);
	} else if (computerSelection === "paper") {
		computerSign.textContent = "";
		const icon = document.createElement("i");
		icon.classList.add("fa-solid", "fa-hand", ".dark");
		computerSign.appendChild(icon);
	} else {
		computerSign.textContent = "";
		const icon = document.createElement("i");
		icon.classList.add("fa-solid", "fa-hand-scissors", ".dark");
		computerSign.appendChild(icon);
	}
}

function updateScoreInfo() {
	if (roundWinner === "player") {
		const spanWin = document.createElement("span");
		scoreInfo.textContent = "";
		spanWin.classList.add("green");
		spanWin.textContent = "You won!";
		scoreInfo.appendChild(spanWin);
	} else if (roundWinner === "computer") {
		const spanLose = document.createElement("span");
		scoreInfo.textContent = "";
		spanLose.classList.add("red");
		spanLose.textContent = "You lost!";
		scoreInfo.appendChild(spanLose);
	} else {
		scoreInfo.textContent = "It's a tie!";
	}

	playerScorePara.textContent = `Player: ${playerScore}`;
	computerScorePara.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(playerSelection, computerSelection) {
	if (roundWinner === "player") {
		scoreMessage.textContent = `${capitalizeFirstLetter(
			playerSelection
		)} beats ${capitalizeFirstLetter(computerSelection)}`;
	} else if (roundWinner === "computer") {
		if (playerSelection === "scissors") {
			scoreMessage.textContent = `${capitalizeFirstLetter(
				playerSelection
			)} are beaten by ${capitalizeFirstLetter(computerSelection)}`;
		} else {
			scoreMessage.textContent = `${capitalizeFirstLetter(
				playerSelection
			)} is beaten by ${capitalizeFirstLetter(computerSelection)}`;
		}
	} else {
		scoreMessage.textContent = `Both players chose ${capitalizeFirstLetter(
			playerSelection
		)}`;
	}
}

function showGameResults() {
	const textNode = document.createTextNode(" the game!");
	gameOverPara.textContent = "You ";

	if (playerScore > computerScore) {
		const wonSpan = document.createElement("span");
		wonSpan.classList.add("green");
		wonSpan.textContent = "won";
		gameOverPara.appendChild(wonSpan);
		gameOverPara.appendChild(textNode);
	} else {
		const lostSpan = document.createElement("span");
		lostSpan.classList.add("red");
		lostSpan.textContent = "lost";
		gameOverPara.appendChild(lostSpan);
		gameOverPara.appendChild(textNode);
	}
}

function clearUi() {
	scoreInfo.textContent = "";
	scoreMessage.textContent = "";
	gameOverPara.textContent = "";
	// Player UI
	playerScorePara.textContent = "Player: 0";
	playerSign.textContent = "";
	const playerIcon = document.createElement("i");
	playerIcon.classList.add("fa-solid", "fa-question");
	playerSign.appendChild(playerIcon);
	// Computer UI
	computerScorePara.textContent = "Computer: 0";
	computerSign.textContent = "";
	const computerIcon = document.createElement("i");
	computerIcon.classList.add("fa-solid", "fa-question");
	computerSign.appendChild(computerIcon);
}

// ----Helper functions----
function hideSection(element) {
	if (element.className.includes("hidden")) {
		element.classList.toggle("hidden");
	} else {
		element.classList.toggle("hidden");
	}
}

function capitalizeFirstLetter(str) {
	return str[0].toUpperCase() + str.slice(1);
}

// ----Event Listeners----
welcomeBtn.addEventListener("click", () => {
	hideSection(welcomeSection);
	hideSection(introSection);
});

introBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		scoreInfo.textContent = `The first who scores ${btn.textContent} points wins the game!`;
		scoreMessage.textContent = "Choose:";
		hideSection(introSection);
		hideSection(playSection);
		return (roundsNumber = +btn.textContent);
	});
});

playBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		playGame(btn.getAttribute("id"));
	});
});

gameOverBtn.addEventListener("click", restartGame);
