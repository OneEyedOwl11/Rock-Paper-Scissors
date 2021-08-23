let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";

    if (playerSelection == computerSelection){
      result = ("Draw. " + playerSelection + " and " + computerSelection + "Are the same");
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper')|| 
    (playerSelection == 'paper' && computerSelection == 'scissor') ||
    (playerSelection == 'rock' && computerSelection == 'paper') ){
        computerScore += 1;
        result = ("Lose. " + playerSelection + " loses to " + computerSelection);
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors')|| 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'rock' && computerSelection == 'scissors'))
     {
        humanScore += 1;
        result = ("Win. " + playerSelection + " beats " + computerSelection);
    }
    document.getElementById('result').innerHTML = result;
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
const buttons = document.querySelectorAll('input')
buttons.forEach(button => {
  button.addEventListener('click', function(){
    playRound(button.value)
  })
})