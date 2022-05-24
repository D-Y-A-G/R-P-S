const game = () => {
  let playerScore = 0;
  let aiScore = 0;
  let gamesPlayed = 0;

  const playGame = () => {
    const rockOpt = document.querySelector("rock");
    const paperOpt = document.querySelector("paper");
    const scissorOpt = document.querySelector("scissors");
    const aiChoice = ["rock", "paper", "scissors"];
    const userChoice = [rockOpt, paperOpt, scissorOpt];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const choice = Math.floor(Math.random() * 3);
        const aiChoice = aiOptions[choiceNumber];
      });
    });
  };
};
