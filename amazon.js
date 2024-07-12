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

  if (computerMove === playerMove) {
    result = "tie";
  } else if (computerMove === "paper" && playerMove === "rock") {
    result = "You lose";
  } else if (computerMove === "scissors" && playerMove === "rock") {
    result = "You win";
  } else if (computerMove === "rock" && playerMove === "paper") {
    result = "You win";
  } else if (computerMove === "scissors" && playerMove === "paper") {
    result = "You lose";
  } else if (computerMove === "rock" && playerMove === "scissors") {
    result = "You lose";
  } else if (computerMove === "paper" && playerMove === "scissors") {
    result = "You win";
  }
  result = `You picked ${playerMove} and the computer ${computerMove} : ${result}`;
  document.getElementById("result").innerHTML = result;
}
