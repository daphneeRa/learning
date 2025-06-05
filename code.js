var getComputerChoice = function(){
    const randNum = Math.random();
    if (randNum < 0.33){
        return "rock";
    }
    if (randNum < 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

var getHumanChoice = function(){
    const choise = prompt("please enter your choise  of: “rock”, “paper” or “scissors”");
    return choise;
}

const curr = document.querySelector(".currentWinner");
const container = document.querySelector("#container");
const scores = document.querySelector(".scores");
const buttons = document.querySelectorAll("button");
let humanScore=0, computerScore=0;


var playGame = function(humanSelection){
    var playRound = function(humanChoise, computerChoise){
        if (humanChoise === computerChoise) {
            curr.textContent = "It's a tie!";
        } else if (
            (humanChoise === "rock" && computerChoise === "scissors") ||
            (humanChoise === "paper" && computerChoise === "rock") ||
            (humanChoise === "scissors" && computerChoise === "paper")
        ) {
            curr.textContent = `You win! ${humanChoise} beats ${computerChoise}`;
            humanScore ++;
        } else {
            curr.textContent = `You lose! ${computerChoise} beats ${humanChoise}`;
            computerScore ++;
        }
    }
    
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanSelection = e.target.id;
    playGame(humanSelection);
    if(humanScore === 5 || computerScore === 5){
        const winner = document.createElement("div");
        winner.classList.add("winner");
        const won = humanScore > computerScore ? "human" : "computer";
        winner.textContent = `The winner is ${won} !`;
        container.appendChild(winner);
    } else{
        scores.textContent = `Running score: human - ${humanScore}, computer - ${computerScore}`;
    }
  });
});



