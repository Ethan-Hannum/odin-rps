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

    /* playRound will use correct human selection and call getComputerChoice
    to play out the round */
    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
});

let humanScore = 0;
let computerScore = 0;

const score = document.querySelector("#score");
function changeScore(result) {
    // If result of playRound is human winning, add one to humanScore,
    // Else add one to computerScore
    (result === "human") ? ++humanScore : ++computerScore;
    // If humanScore or computerScore is equal to or greater than 5, announce win
    if ((humanScore >= 5) || (computerScore >= 5)) { 
        if (humanScore >= 5) {
            return score.textContent = "You have won the game!";
        } else if (computerScore >= 5) {
            return score.textContent = "The Computer has won the game"
        }
    } else {
        return score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    }
}

const results = document.querySelector("#results");

// Function playRound will have humanChoice and computerChoice as parameters
// results div will had it's textContent changed to the results, apprearing on page
function playRound(humanChoice, computerChoice) {
// If humanChoice equals computerChoice, return "Tie Game!"
    if (humanChoice === computerChoice) {
        return results.textContent = "Tie!";
// Else-If humanChoice equals rock and computerChoice equals paper, return "Paper Wins" ++ the winner
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        changeScore("computer");
        return results.textContent = "Computer chose paper. You Lose!";
// Else-If humanChoice equals rock and computerChoice equals scissors, return "Rock win" ++ the winner
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        changeScore("human");
        return results.textContent = "Computer chose scissors. You Win!";
// Else-If humanChoice equals paper and computerChoice equals rock, return "Paper Wins" ++ the winner
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        changeScore("human");
        return results.textContent = "Computer chose rock. You Win!";
// Else-If humanChoice equals paper and computerChoice equals scissors, return "Scissors win" ++ the winner
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        changeScore("computer");
        return results.textContent = "Computer chose scissors. You Lose!";
// Else-If humanChoice equals scissors and computerChoice equals rock, reutrn "Rock wins" ++ the winner
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        changeScore("computer");
        return results.textContent = "Computer chose rock. You Lose!";
// Else-If humanChoice equals scissors and computerChoice equals paper, return "Scissors win" ++ the winner
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        changeScore("human");
        return results.textContent = "Computer chose paper. You Win!";
    }
}