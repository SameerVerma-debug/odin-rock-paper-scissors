function getComputerChoice(){
  let choice = "";
  const choices = ["rock","paper","scissors"];
  let choiceNo = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;

  choice = choices[choiceNo];
  return choice;
}

function getPlayerChoice(){
  let choice = "";
  choice = prompt("Enter your choice: rock/paper/scissors");
  choice = choice.toLowerCase();
  return choice;
}

function game(){
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  console.log("You Chose: "+playerSelection);
  console.log("Computer Chose: "+computerSelection);

  let result = "";
  
  if(playerSelection === computerSelection){
      playerWinCount++;
      computerWinCount++;
      result = "Round tied";
  }
  else if((playerSelection === "rock" && computerSelection === "scissors")
          || (playerSelection === "paper" && computerSelection === "rock")
          || (playerSelection === "scissors" && computerSelection === "paper")){
      playerWinCount++;
      result = "You won this round";
  }
  else if((playerSelection === "rock" && computerSelection === "paper")
  || (playerSelection === "paper" && computerSelection === "scissors")
  || (playerSelection === "scissors" && computerSelection === "rock")){
      computerWinCount++;
      result = "You lost this round";
  }
  return result;
}

let playerWinCount = 0;
let computerWinCount = 0;
for(let i = 0 ; i<5 ; i++){
  console.log(game());
}

if(playerWinCount>computerWinCount){
  console.log("You Won the game!");
}
else if(computerWinCount>playerWinCount){
  console.log("You lost the game!");
}
else{
  console.log("Game Tied!");
}