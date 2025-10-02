// Function getComputerChoice will randomly return "rock", "paper", or "scissors"
function getComputerChoice() {    
// Initialize randNum variable assigning Math.random to the randNum
    const randNum = Math.random();
// Create if statement with the condition if randNum is less than or equal to 0.33 then return "rock"
    if (randNum <= 0.33) {
        console.log("Computer: Rock")
        return "rock";
// Else if randNum is greater than 0.33 AND if randNum is less or equal to 0.66 then return "paper"
    } else if ((randNum > 0.33) && (randNum <= 0.66)) {
        console.log("Computer: Paper")
        return "paper";
// Else return "scissors"
    } else {
        console.log("Computer: Scissors")
        return "scissors";
    }
}

// When selector button is clicked call playRound with correct selection
const btnContainer = document.querySelector("#btnContainer");
btnContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            console.log("rock test")
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
})

let humanScore = 0;
let computerScore = 0;

// Function playRound will have humanChoice and computerChoice as parameters
function playRound(humanChoice, computerChoice) {
// If humanChoice equals computerChoice, return "Tie Game!"
    if (humanChoice === computerChoice) {
        return console.log("Tie!");
// Else-If humanChoice equals rock and computerChoice equals paper, return "Paper Wins" ++ the winner
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        ++computerScore;
        return console.log("You Lose! Paper beats Rock");
// Else-If humanChoice equals rock and computerChoice equals scissors, return "Rock win" ++ the winner
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        ++humanScore;
        return console.log("You Win! Rock beats Scissors");
// Else-If humanChoice equals paper and computerChoice equals rock, return "Paper Wins" ++ the winner
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        ++humanScore;
        return console.log("You Win! Paper beats Rock");
// Else-If humanChoice equals paper and computerChoice equals scissors, return "Scissors win" ++ the winner
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        ++computerScore;
        return console.log("You Lose! Scissors beats Paper");
// Else-If humanChoice equals scissors and computerChoice equals rock, reutrn "Rock wins" ++ the winner
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        ++humanScore;
        return console.log("You Lose! Rock beats Scissors");
// Else-If humanChoice equals scissors and computerChoice equals paper, return "Scissors win" ++ the winner
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        ++computerScore;
        return console.log("You Win! Scissors beats Paper");
    }
}