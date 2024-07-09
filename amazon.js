function gameRps(playerMove) {
  const randomNumber = Math.random();
  let computerMove;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  let result;
  if (computerMove === "rock" && playerMove === "rock") {
    result = "tie";
  } else if (computerMove === "paper" && playerMove === "rock") {
    result = "You lose";
  } else if (computerMove === "scissors" && playerMove === "rock") {
    result = "You win";

