let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function restartGame() {
  alert("Game is restarting");
  humanScore = 0;
  computerScore = 0;
}

const myArray = ["rock", "paper", "scissors"];
function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";

    if (playerSelection == computerSelection){
      result = ("Draw. " + playerSelection + " and " + computerSelection + " Are the same" + 
      '<br><br> Your Score: ' + humanScore + " Computer Score: " + computerScore);
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper')|| 
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'rock' && computerSelection == 'paper') ){
        computerScore += 1;
        result = ("Lose. " + playerSelection + " loses to " + computerSelection + 
        '<br><br> Your Score: ' + humanScore + " Computer Score: " + computerScore);
        if (computerScore == 5) {
          result += '<br><br> You lost the game!'
          restartGame()
        }
    }
    else{
        humanScore += 1;
        result = ("Win. " + playerSelection + " beats " + computerSelection + 
        '<br><br> Your Score: ' + humanScore + " Computer Score: " + computerScore);
        if (humanScore == 5) {
          result += '<br><br> You won the game!'
          restartGame()
        }
    }
  document.getElementById('result').innerHTML = result;
}

buttons.forEach(button => {
  button.addEventListener('click', function(){
    playRound(button.value)
  })
})