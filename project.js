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
  for (let i = 1; i < 5; i++) { 
  console.log(playRound())
  console.log("Player: "+playerScore+", Computer: "+computerScore+"")
  playerSelection = prompt("Enter your choice: ");
  computerSelection = getComputerChoice(choice);
}

console.log(playRound(playerSelection, computerSelection));

}
 game ();




  

