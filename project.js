playerScore = 0;
computerScore = 0;

function getComputerChoice (choice) {
 
  return choice [Math.floor(Math.random()*choice.length)]; }
    
    const choice = ["rock", "paper", "scissors"];
    
    
    function playRound(playerSelection, computerSelection) {
    
    if ((computerSelection === "rock" && playerSelection === "paper") ||
      (computerSelection === "paper" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "rock")) {
    
      playerScore++;
      console.log(computerScore, playerScore)
      return "Player Wins!";
    
} else if ((computerSelection === "paper" && playerSelection === "rock") ||
      (computerSelection === "scissors" && playerSelection === "paper") ||
      (computerSelection === "rock" && playerSelection === "scissors")) {
      
        computerScore++;
        console.log(computerScore, playerScore)
        return "Computer Wins!";
 
      } else {
      return "It's a tie!";
    }
  }
  

let playerSelection = prompt("Enter your choice: ");
let computerSelection = getComputerChoice(choice);


function game () {
  for (let i = 0; i < 5; i++) { 
  console.log(playRound(playerSelection, computerSelection))
  console.log("Computer: "+computerScore+", Player: "+playerScore+"")
  playerSelection = prompt("Enter your choice: ");
  computerSelection = getComputerChoice(choice);
}

}
 game ();

 if (playerScore < computerScore) {
   console.log ("Computer wins the match!");
 } else if (playerScore > computerScore) {
  console.log ("Player wins the match!");
 } else {
  console.log ("The match is a tie!");
 }

 



  

