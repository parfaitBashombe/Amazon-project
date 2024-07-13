function gameRps(playerMove) {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove;
  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  let result;

  if (computerMove === playerMove) {
    result = "Tie";
  } else if (playerMove === "rock") {
    if (computerMove === "paper") {
      result = "CPU win";
    } else {
      result = "Player win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Player win";
    } else {
      result = "CPU win";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "CPU win";
    } else {
      result = "Player win";
    }
  }
  result = `Player - ${playerMove} and CPU - ${computerMove}: ${result}`;
  document.getElementById("result").innerHTML = result;
}
