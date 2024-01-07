// Rock Paper Scissors Script 

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
            
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent= `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    //Resetting the color of the resultDisplay with each new game 
    resultDisplay.classList.remove("greenText", "redText")

    //A switch statement to turn the resultDisplay red or green depending on the result variable
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    
    //checking if the playGame computer choice function works whens pressing a button 
    console.log(computerChoice)
}