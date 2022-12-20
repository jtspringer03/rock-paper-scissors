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
