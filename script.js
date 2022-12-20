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
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "tie") {
    console.log("It was a tie!");
  } else if (result == "player") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
  }
}
