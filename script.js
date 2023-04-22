
function getComputerChoice(moves) {

    return moves[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(moves) {
    
    let move = prompt("What move would you like to make? ").toLowerCase();
    while (true) {
        if(!moves.includes(move)) {
            move = prompt("Incorrect! What move would you like to make? ").toLowerCase();
        } else {
            return move;
        }
    }
}

function playRound(playerMove, computerMove) {
    console.log(playerMove,computerMove);

    if((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'scissors' && computerMove == 'paper') || (playerMove == 'paper' && computerMove == 'rock') ) {
        gameState['playerScore'] += 1;
        gameState['roundsPlayed'] += 1;
    } else if (playerMove == computerMove) {
        gameState['roundsPlayed'] += 1;
        gameState['number_of_draws'] +=1;
    } else {
        gameState['computerScore'] += 1;
        gameState['roundsPlayed'] += 1; 
    }
}

gameState = {
    'roundsPlayed':0,
    'playerScore': 0,
    'computerScore' : 0,
    'number_of_draws' : 0,
}

const moves = ['rock','paper','scissors'];

//let playerMove = getPlayerChoice(moves);
playerMove = 'rock'

// Play Five Rounds of Rock Paper Scissors

for (let i = 1; i <= 5; i++) {
    let computerMove = getComputerChoice(moves);
    playRound(playerMove,computerMove);

    if(i === 5) {
        console.log('Player Score is: ',gameState['playerScore']);
        console.log("Computer Score is: ", gameState['computerScore']);
    }
}