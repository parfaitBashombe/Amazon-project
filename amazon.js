let playerMove = "rock";
const rock = document.getElementById("rock");
rock.addEventListener("click", gameRps);
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
  if (computerMove === "rock" && playerMove === "rock") {
    result = "tie";
  } else if (computerMove === "paper" && playerMove === "rock") {
    result = "You lose";
  } else if (computerMove === "scissors" && playerMove === "rock") {
    result = "You win";
  } else if (computerMove === "rock" && playerMove === "paper") {
    result = "You win";
  } else if (computerMove === "paper" && playerMove === "paer") {
    result = "tie";
  } else if (computerMove === "scissors" && playerMove === "paper") {
    result = "You lose";
  } else if (computerMove === "rock" && playerMove === "scissors") {
    result = "You lose";
  } else if (computerMove === "paper" && playerMove === "scissors") {
    result = "You win";
  } else if (computerMove === "scissors" && playerMove === "scissors") {
    result = "tie";
  }
  console.log(
    `You picker ${playerMove} and the computer ${computerMove}. ${result}`
  );
}
