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
  } else if (playerMove === "rock") {
    if (computerMove === "paper") {
      result = "You lose";
    } else {
      result = "You win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else {
      result = "You lose";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else {
      result = "You win";
    }
  }
  result = `You picked ${playerMove} and the computer ${computerMove} : ${result}`;
  document.getElementById("result").innerHTML = result;
}
