// const game = () => {
//   let playerScore = 0;
//   let aiScore = 0;
//   let gamesPlayed = 0;

// const playGame = () => {
const aiChoice = document.getElementById("ai-choice");
const playerSelectedChoice = document.getElementById("player-choice");
const choices = document.querySelectorAll("button");
const resultDisplay = document.getElementById("result");
let playerChoice;
let computerChoice;
let result;

choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerSelectedChoice.innerHTML = playerChoice;
    generateAiChoice();
    gameResult();
  })
);

function generateAiChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  console.log(randomChoice);
  if (randomChoice === 1) {
    computerChoice = "rock";
  }
  if (randomChoice === 2) {
    computerChoice = "paper";
  }
  if (randomChoice === 3) {
    computerChoice = "scissors";
  }
  aiChoice.innerHTML = computerChoice;
}

function gameResult() {
  if (computerChoice === playerChoice) {
    result = "its a tie!";
  }
  if (computerChoice === "rock" && playerChoice === "paper") {
    result = "Winner, Winner Chicken Dinner!";
  }
  if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "You are a big Loser!!!";
  }
  if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "Winner, Winner Chicken Dinner!";
  }
  if (computerChoice === "paper" && playerChoice === "rock") {
    result = "You are a big Loser!!!";
  }
  if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "Winner, Winner Chicken Dinner!";
  }
  if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "You are a big Loser!!!";
  }
  resultDisplay.innerHTML = result;
}
// };
// };
