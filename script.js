const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const selection = options[Math.floor(Math.random() * options.length)];
  return selection;
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const userInput = prompt("rock, paper, or scissors?");
    if (userInput == null) {
      continue;
    }
    const userInputInLower = userInput.toLowerCase();
    if (options.includes(userInputInLower)) {
      validatedInput = true;
      return userInputInLower;
    }
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const results = checkWinner(playerSelection, computerSelection);
  if (results == "tie") {
    return "It's a tie!";
  } else if (results == "player") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection)) {
      scoreComputer++;
    }
  }
  if (scorePlayer > scoreComputer) {
    console.log("Player is the Winner!");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer is the Winner!");
  } else {
    console.log("It was a tie!");
  }
}

game();
