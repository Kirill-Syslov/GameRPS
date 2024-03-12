const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const posableChoice = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

posableChoice.forEach((posableChoice) =>
  posableChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult ();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * posableChoice.length + 1);
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult () {
  if(computerChoice === userChoice){
    result = "Its a draw"
  }
  if(computerChoice === "rock" && userChoice === "paper"){
    result = "YOU WIN !!!"
  }
  if(computerChoice === "paper" && userChoice === "rock"){
    result = "YOU LOSE !!!"
  }
  if(computerChoice === "scissors" && userChoice === "paper"){
    result = "YOU LOSE !!!"
  }
  if(computerChoice === "paper" && userChoice === "scissors"){
    result = "YOU WIN !!!"
  }
  if(computerChoice === "rock" && userChoice === "scissors"){
    result = "YOU LOSE !!!"
  }
  if(computerChoice === "scissors" && userChoice === "rock"){
    result = "YOU WIN !!!"
  }
  resultDisplay.innerHTML = result;
 }
