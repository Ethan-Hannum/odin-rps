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


// Function getHumanChoice will ask user "(R)ock, (P)aper or (S)cissors?" and return one of the choices
function getHumanChoice() {
// Initialize humanCoice variable assigning a prompt asking the user their choice
    let humanChoice = prompt("(R)ock, (P)aper, (S)cissors?\nPlease Enter your answer: ");
    let lowerChoice = humanChoice.toLowerCase();
// Switch statement for choice where
    switch (lowerChoice) {
// Case "r" and Case "rock" return "rock", break
        case "r":
        case "rock":
            console.log("Player: Rock")
            return "rock";
            break;
// Case "p" and Case "paper" return "paper", break
        case "p":
        case "paper":
            console.log("Player: Paper")
            return "paper";
            break;
// Case "s" and cases "scissor(s)" return "scissors", break
        case "s":
        case "scissor":
        case "scissors":
            console.log("Player: Scissors")
            return "scissors";
            break;
    }
}

// Initialize humanSelection and computerSelection variables to getHumanChoice() and getComputerChoice() respectively
console.log("Round 1... Fight")
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

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
playGame();