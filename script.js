// Function getComputerChoice will randomly return "rock", "paper", or "scissors"
function getComputerChoice() {    
// Initialize randNum variable assigning Math.random to the randNum
    let randNum = Math.random();
// Create if statement with the condition if randNum is less than or equal to 0.33 then return "rock"
    if (randNum <= 0.33) {
        return "rock";
// Else if randNum is greater than 0.33 AND if randNum is less or equal to 0.66 then return "paper"
    } else if ((randNum > 0.33) && (randNum <= 0.66)) {
        return "paper";
// Else return "scissors"
    } else {
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
            return "rock";
            break;
// Case "p" and Case "paper" return "paper", break
        case "p":
        case "paper":
            return "paper";
            break;
// Case "s" and cases "scissor(s)" return "scissors", break
        case "s":
        case "scissor":
        case "scissors":
            return "scissors";
            break;
    }
}

// Variables humanScore and computerScore keep track of human and computer score respectively
let humanScore = 0;
let computerScore = 0;

// Function playRound will have humanChoice and computerChoice as parameters
// humanChoice and computerChoice will take getHuman/ComputerChoice respectivlyp
// If humanChoice equals computerChoice, return "Tie"
// Else-If humanChoice equals rock and computerChoice equals paper, return "Paper Wins" ++ the winner
// Else-If humanChoice equals rock and computerChoice equals scissors, return "Rock win" ++ the winner
// Else-If humanChoice equals paper and computerChoice equals rock, return "Paper Wins" ++ the winner
// Else-If humanChoice equals paper and computerChoice equals scissors, return "Scissors win" ++ the winner
// Else-If humanChoice equals scissors and computerChoice equals rock, reutrn "Rock wins" ++ the winner
// Else-If humanChoice equals scissors and computerChoice equals paper, return "Scissors win" ++ the winner
