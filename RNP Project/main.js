// Random RPS generator
function computerPlay() {
    const rnp = ['Rock', 'Paper', 'Scissors']
    return rnp[Math.floor(Math.random()*3)]
}


// Make a function that will play a round of rock paper scissors

function playRound() {
    let playerSelection = prompt('Please enter selection')
    let computerSelection = computerPlay();
    
    if (((playerSelection == 'Scissors') && (computerSelection == 'Paper'))||
        ((playerSelection == 'Rock') && (computerSelection == 'Scissors'))||
        ((playerSelection == 'Paper') && (computerSelection == 'Rock'))) {
        outcome = 'win'
        winner = playerSelection
        loser = computerSelection
        verbAct = 'beats'
        whoWon = 'Player'   
    }
    else if (((playerSelection == 'Scissors') && (computerSelection == 'Rock'))||
             ((playerSelection == 'Rock') && (computerSelection == 'Paper'))||
             ((playerSelection == 'Paper') && (computerSelection == 'Scissors'))) {
        outcome = 'lose'
        loser = playerSelection
        winner = computerSelection
        verbAct = 'beats'
        whowon = 'Computer'
    }
    else {
        outcome = 'tied';
        winner = playerSelection;
        loser = computerSelection;
        verbAct = 'ties with';
        whoWon = 'tied'
    }
    return `You ${outcome}! ${winner} ${verbAct} ${loser}`
}



// Play 5 rounds 
function game() { 
    for (let i = 1; i <= 5; i++) { 
        console.log(playRound()); 
    }
}
game();



