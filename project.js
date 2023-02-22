function getComputerChoice (choice) {
 
  return choice [Math.floor(Math.random()*choice.length)]; }
    
    const choice = ["rock", "paper", "scissors"];
    
    
    function playRound(playerSelection, computerSelection) {
    
      let playerScore = 0;
      let computerScore = 0;
    

    if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    console.log(computerScore, playerScore)
    return "You lose! Paper beats rock!" 

  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    console.log(computerScore, playerScore)
    return "You lose! Rock beats scissors!" 
  
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    console.log(computerScore, playerScore)
    return "You lose! Scissors beat paper!" 
  
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    console.log(computerScore, playerScore)
    return "You win! Paper beats rock!" 
  
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
    console.log(computerScore, playerScore)
    return "You win! Rock beats scissors!" 
  
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore ++;
    console.log(computerScore, playerScore)
    return "You win! Scissors beat paper!" 
  
  } else {
    return "It's a tie!"; }
  
  }
 

const playerSelection = prompt("Enter your choice: ");
const computerSelection = getComputerChoice(choice);

console.log(playRound(playerSelection, computerSelection));


function game () { 

for (let round = 0; round < 5; round++ ) {
  
playRound (playerSelection, computerSelection); {

 playerSelection = prompt("Enter your choice: ");
 computerSelection = getComputerChoice(choice);
   
 console.log(game) 
}
  
}

}

  

