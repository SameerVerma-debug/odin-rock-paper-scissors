function getComputerChoice(){
  const choices = ['rock','paper','scissors'];
  let choice = choices[Math.floor(Math.random() * (2 - 0) + 0)];
  return choice;
}

function checkWin(){
  if (playerScore.textContent === '5' || computerScore.textContent === '5') {
    //Removing eventListeners from each tool
    tools.forEach((tool) => tool.removeEventListener('click', game));
    roundWinner.setAttribute('style','color:red; font-weight:bold; font-size:26px; text-align:center;');

    if(playerScore.textContent === '5' && computerScore.textContent === '5'){
      roundWinner.textContent = "Round Tied! Play Again?";
    }
    else if(playerScore.textContent === '5'){
      roundWinner.textContent = "You Won! Play Again?";
    }
    else{
      roundWinner.textContent = "Computer Won! Play Again?";
    }
    return;
  }
}

function game(e){
  let playerChoice = this.classList.value; 
  let computerChoice = getComputerChoice();

  if(playerChoice === computerChoice){
    playerScore.textContent = Number(playerScore.textContent) + 1;
    computerScore.textContent = Number(computerScore.textContent) + 1;
    roundWinner.textContent = `Round tied!`;
  }
  else if((playerChoice === "rock" && computerChoice === "scissors")
  || (playerChoice === "paper" && computerChoice === "rock")
  || (playerChoice === "scissors" && computerChoice === "paper")){
    playerScore.textContent = Number(playerScore.textContent) + 1;
    roundWinner.textContent = `You won this round! (${playerChoice} beats ${computerChoice})`;
  }
  else if((playerChoice === "rock" && computerChoice === "paper")
  || (playerChoice === "paper" && computerChoice === "scissors")
  || (playerChoice === "scissors" && computerChoice === "rock")){
    computerScore.textContent = Number(computerScore.textContent) + 1;
    roundWinner.textContent = `Computer Won this round! (${playerChoice} does not beat ${computerChoice})`;
  }

  //Checks if anybody wins to display result instantly
  checkWin();
}

function reset(){
  roundWinner.setAttribute('style','color:black; font-weight:bold; font-size:26px; text-align:center;')
  roundWinner.textContent = "Start Game";
  playerScore.textContent = '0';
  computerScore.textContent = '0';
  tools.forEach(tool => tool.addEventListener('click',game))
}

const tools = document.querySelectorAll('.options-buttons button');
tools.forEach((tool) => tool.addEventListener('click',game));
const playerScore = document.querySelector('.human-score');
const computerScore = document.querySelector('.robot-score');
const roundWinner = document.querySelector('.round-winner');
const resetGame = document.querySelector('.reset-game-button');
resetGame.addEventListener('click',reset);