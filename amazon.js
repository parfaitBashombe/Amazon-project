function randonNumber() {
  const number = Math.random();
  let choice;
  if (number >= 0 && number < 1 / 3) {
    choice = "Rock";
  } else if (number >= 1 / 3 && number < 2 / 3) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  console.log(choice);
}
