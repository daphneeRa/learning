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


var playGame = function(){
    var playRound = function(humanChoise, computerChoise){
    humanChoise = humanChoise.toLowerCase();
    if (humanChoise === computerChoise) {
        console.log("It's a tie!");
    } else if (
        (humanChoise === "rock" && computerChoise === "scissors") ||
        (humanChoise === "paper" && computerChoise === "rock") ||
        (humanChoise === "scissors" && computerChoise === "paper")
    ) {
        console.log(`You win! ${humanChoise} beats ${computerChoise}`);
        humanScore ++;
    } else {
        console.log(`You lose! ${computerChoise} beats ${humanChoise}`);
        computerScore ++;
    }
    }
    let humanScore=0, computerScore=0;
    
    for (let i = 0; i <5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final scores: human score - ${humanScore}, computer score - ${computerScore}`);
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
