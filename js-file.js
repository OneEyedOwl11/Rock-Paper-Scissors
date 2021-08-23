let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    playerSelection = prompt().toLowerCase;
    let computerSelection = computerPlay();

    if ((playerSelection == 'rock' && computerSelection == 'rock')|| 
    (playerSelection == 'paper' && computerSelection == 'paper') ||
    (playerSelection == 'rock' && computerSelection == 'rock')){
        console.log("Draw");
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper')|| 
    (playerSelection == 'paper' && computerSelection == 'scissor') ||
    (playerSelection == 'rock' && computerSelection == 'paper') ){
        computerScore++;
        console.log("Lose");
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors')|| 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'rock' && computerSelection == 'scissors'))
     {
        humanScore++;
        console.log("Win");
    }
  }
  //comment
  function game (){
      if (humanScore == 5){
        console.log("Human has won, well done human")
      }

      else if (computerScore == 5) {
        console.log("Computer has won")
      }

      else {
          playRound();
      }
  }
  function alertIfIncorrect(){
      if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
          alert("Please choose: Rock, Paper or Scissors");
      }
  }


  const myArray = ["rock", "paper", "scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}
  window.onload = game();