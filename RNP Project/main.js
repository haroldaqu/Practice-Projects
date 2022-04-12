// Random RPS generator
function computerPlay() {
    const rnp = ['rock', 'paper', 'scissors']
    return rnp[Math.floor(Math.random()*3)]
}


// Make a function that will play a round of rock paper scissors
let playerScore = 0;
let computerScore = 0;



function playRound() {
    let playerSelection = prompt('Please enter selection').toLowerCase();
    let computerSelection = computerPlay();
    if (((playerSelection == 'scissors') && (computerSelection == 'paper'))||
        ((playerSelection == 'rock') && (computerSelection == 'scissors'))||
        ((playerSelection == 'paper') && (computerSelection == 'rock'))) {
        outcome = 'win'
        winner = playerSelection
        loser = computerSelection
        verbAct = 'beats'
        whoWon = 'Player'
        playerScore = playerScore +1;

    }
    else if (((playerSelection == 'scissors') && (computerSelection == 'rock'))||
             ((playerSelection == 'rock') && (computerSelection == 'paper'))||
             ((playerSelection == 'paper') && (computerSelection == 'scissors'))) {
        outcome = 'lose'
        loser = playerSelection
        winner = computerSelection
        verbAct = 'beats'
        whowon = 'Computer'
        computerScore = computerScore + 1;
    }
    else if (playerSelection === computerSelection) {
        outcome = 'tied';
        winner = playerSelection;
        loser = computerSelection;
        verbAct = 'ties with';
        whoWon = 'tied'
    }
    else {
        alert('Type in Rock, Paper, or Scissors')
        playRound();
    }
    return `You ${outcome}! ${winner} ${verbAct} ${loser}`
}



// Play 5 rounds 
function game() { 
    for (let i = 1; i <= 5; i++) { 
        console.log(playRound()); 
    }
    if (playerScore > computerScore) {
        console.log('You win the game!')
    }
    else if (computerScore > playerScore) {
        console.log('You lose the game!')
    }
    else {
        console.log('Tie game!')
    }
    console.log('-------Score Below -------')
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}
game();



