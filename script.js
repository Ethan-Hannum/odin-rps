// Function getComputerChoice will randomly return "rock", "paper", or "scissors"
function getComputerChoice() {    
// Initialze randNum variable assigning Math.random to the randNum
    let randNum = Math.random();
// Create if statement with the condition if randNum is less than or equal to 0.33 then return "rock"
    if (randNum <= 0.33) {
        return "rock"
// Else if randNum is greater than 0.33 AND if randNum is less or equal to 0.66 then return "paper"
    } else if ((randNum > 0.33) && (randNum <= 0.66)) {
        return "paper"
// Else return "scissors"
    } else {
        return "scissors"
    }
}