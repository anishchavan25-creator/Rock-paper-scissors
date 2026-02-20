const butons=document.querySelectorAll
("button");
const resultEl=document.getElementById("result");

const playerScoreEl=document.getElementById("user-score");
const computerScoreEl=document.getElementById("computer-score");

let playerScore=0;
let computerScore= 0;

butons.forEach((button)=>{
    button.addEventListener("click",()=>{
       const result=playRound(button.id,computerPlay());
       resultEl.textContent=result;
       
    });
});

function computerPlay(){
    const choice=["rock","paper","scissors"];
    const randomChoice=Math.floor(Math.random()*
    choice.length);
    return choice[randomChoice];
}
function playRound(playerSelection, computerSelection) {   
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player === computer) {
        return "It's a tie!";
    }   
    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent=playerScore;
        return "You win! " + player + " beats " + computer;
    } 
    else {
        computerScore++;
        computerScoreEl.textContent=computerScore;
        return "You lose! " + computer + " beats " + player;
    }
}