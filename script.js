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
    let humanChoice = prompt("(R)ock, (P)aper, (S)cissors?\nPlease Enter 'R', 'P' or 'S': ");
// Switch statement for choice where
    switch (humanChoice) {
// Case "R" and Case "r" return "rock", break
        case "r":
        case "R":
            return "rock";
            break;
// Case "P" and Case "p" return "paper", break
        case "p":
        case "P":
            return "paper";
            break;
// Case "S" and Case "s" return "scissors", break
        case "s":
        case "S":
            return "scissors";
            break;
    }
}