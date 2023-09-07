function getComputerChoice(){
  const choices = ['rock','paper','scissors'];
  let choice = choices[Math.floor(Math.random() * (2 - 0) + 0)];
  return choice;
}

function game(e){
  if(playerScore.textContent == '5' && computerScore.textContent == '5'){
    roundWinner.textContent = 'GAME TIED! PLAY AGAIN?';
    roundWinner.setAttribute('style','color:black; font-size:30px; font-weight:bolder; text-align:center;')
    tools.forEach((tool) => tool.removeEventListener('click'));
  }
  else if(playerScore.textContent == '5'){
    roundWinner.textContent = 'YOU WON! PLAY AGAIN?';
    roundWinner.setAttribute('style','color:black; font-size:30px; font-weight:bolder; text-align:center;')
    tools.forEach((tool) => tool.removeEventListener('click'));
  }
  else if(computerScore.textContent == '5'){
    roundWinner.textContent = 'COMPUTER WON! PLAY AGAIN?';
    roundWinner.setAttribute('style','color:black; font-size:30px; font-weight:bolder; text-align:center;')
    tools.forEach((tool) => tool.removeEventListener('click'));
  }

  let playerChoice = this.classList.value; 
  let computerChoice = getComputerChoice();

  if(playerChoice === computerChoice){
    playerScore.textContent = Number(playerScore.textContent) + 1;
    computerScore.textContent = Number(computerScore.textContent) + 1;
    roundWinner.textContent = `Round tied! (Computer Chose: ${computerChoice})`;
  }
  else if((playerChoice === "rock" && computerChoice === "scissors")
  || (playerChoice === "paper" && computerChoice === "rock")
  || (playerChoice === "scissors" && computerChoice === "paper")){
    playerScore.textContent = Number(playerScore.textContent) + 1;
    roundWinner.textContent = `You won this round! (Computer Chose: ${computerChoice})`;
  }
  else if((playerChoice === "rock" && computerChoice === "paper")
  || (playerChoice === "paper" && computerChoice === "scissors")
  || (playerChoice === "scissors" && computerChoice === "rock")){
    computerScore.textContent = Number(computerScore.textContent) + 1;
    roundWinner.textContent = `Computer Won this round! (Computer Chose: ${computerChoice})`;
  }
}

function reset(){
  roundWinner.textContent = "Start Game";
  playerScore.textContent = '0';
  computerScore.textContent = '0';
}

const tools = document.querySelectorAll('.options-buttons button');
tools.forEach((tool) => tool.addEventListener('click',game));
const playerScore = document.querySelector('.human-score');
const computerScore = document.querySelector('.robot-score');
const roundWinner = document.querySelector('.round-winner');
const resetGame = document.querySelector('.reset-game-button');
resetGame.addEventListener('click',reset);