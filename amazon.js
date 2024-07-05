function gameRps() {
  const randomNumber = Math.random();
  let computerMove;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  console.log(computerMove);

  let result;
  if (computerMove === "rock") {
    result = "tie";
  } else if (computerMove === "paper") {
    result = "You lose";
  } else {
    result = "You win";
  }
  console.log(`You picker rock and the computer ${computerMove}. ${result}`);
}
