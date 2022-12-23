const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const selection = options[Math.floor(Math.random() * options.length)];
  return selection;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
    return "player";
  } else {
    return "computer";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const results = checkWinner(playerSelection, computerSelection);
  if (results == "tie") {
    return "It's a tie!";
  } else if (results == "player") {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

// DOM Manipulation

// Borders
document.querySelector("#results1").style.borderStyle = "solid";
document.querySelector("#score-holder").style.borderStyle = "solid";
document.querySelector("#score-holder-player").style.borderStyle = "solid";
document.querySelector("#score-holder-computer").style.borderStyle = "solid";
document.querySelector("#player-score").style.borderStyle = "solid";
document.querySelector("#computer-score").style.borderStyle = "solid";

// Button Clicks
document.querySelector("#button-rock").addEventListener("click", function () {
  document.getElementById("score-holder").textContent = playRound("rock", getComputerChoice());
  document.getElementById("score-holder-player").textContent = playerScore;
  document.getElementById("score-holder-computer").textContent = computerScore;
  if (playerScore == 5) {
    document.getElementById("score-holder").textContent = "Player is the Winner!";
  } else if (computerScore == 5) {
    document.getElementById("score-holder").textContent = "Computer is the Winner!";
  }
});

document.querySelector("#button-paper").addEventListener("click", function () {
  document.getElementById("score-holder").textContent = playRound("paper", getComputerChoice());
  document.getElementById("score-holder-player").textContent = playerScore;
  document.getElementById("score-holder-computer").textContent = computerScore;
  if (playerScore == 5) {
    document.getElementById("score-holder").textContent = "Player is the Winner!";
  } else if (computerScore == 5) {
    document.getElementById("score-holder").textContent = "Computer is the Winner!";
  }
});

document.querySelector("#button-scissors").addEventListener("click", function () {
  document.getElementById("score-holder").textContent = playRound("scissors", getComputerChoice());
  document.getElementById("score-holder-player").textContent = playerScore;
  document.getElementById("score-holder-computer").textContent = computerScore;
  if (playerScore == 5) {
    document.getElementById("score-holder").textContent = "Player is the Winner!";
  } else if (computerScore == 5) {
    document.getElementById("score-holder").textContent = "Computer is the Winner!";
  }
});
