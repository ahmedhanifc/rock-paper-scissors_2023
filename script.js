// DOM Selectors

const buttons = document.querySelectorAll('.button')
const playerScoreDisplay = document.querySelector(".playerScoreDisplay")
const computerScoreDisplay = document.querySelector(".computerScoreDisplay")
const gameOverview = document.querySelector('.game-overview')
const gameResult = document.querySelector('.game-result')
const resetGameState = document.querySelector('.resetGameState')

// Variables
let playerMove;
let computerMove;
let roundWinner;
let gameOverviewText = "3 Weapons | 5 Lives";
let gameResultText = "Rock Beats Scissors | Scissors Beats Paper | Paper Beats Rock";

// DOM Functions
buttons.forEach(gameLoop)
resetGameState.addEventListener('click', resetGame)

// Functions

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

    'Returns Player Move' 
function gameLoop(button){

    button.addEventListener('click', () => {

        playerMove = button.getAttribute('data-value');
        computerMove = getComputerChoice();
        playRound(playerMove,computerMove);
        isGameOver()
        updateDisplayScore()

        
    })


}

function isGameOver() {
    buttons.forEach(button => {

        if ((gameState['playerScore'] == 5) || (gameState['computerScore'] == 5)) {
            button.disabled = true;
        }
    })
}

    'Returns Computer Moves '
function getComputerChoice() {
    const moves = ['rock','paper','scissors'];

    return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerMove, computerMove) {


    if((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'scissors' && computerMove == 'paper') || (playerMove == 'paper' && computerMove == 'rock') ) {
        gameState['playerScore'] += 1;
        gameState['roundsPlayed'] += 1;
        roundWinner = 'player'
    } else if (playerMove == computerMove) {
        gameState['roundsPlayed'] += 1;
        gameState['number_of_draws'] +=1;
        roundWinner = 'draw'
    } else {
        gameState['computerScore'] += 1;
        gameState['roundsPlayed'] += 1; 
        roundWinner = 'computer'
    }


}
// Update Display Score

function updateDisplayScore() {
    playerScoreDisplay.innerText = `Player Score: ${gameState['playerScore']}`;
    computerScoreDisplay.innerText = `Computer Score: ${gameState['computerScore']}`;
    if(roundWinner == 'player') {
        gameOverview.innerText = `${computerMove.toProperCase()} is beaten by ${playerMove.toProperCase()}`
        gameResult.innerText = "You Won!"
    } else if(roundWinner == 'computer') {
        gameOverview.innerText = `${playerMove.toProperCase()} is beaten by ${computerMove.toProperCase()}`
        gameResult.innerText = "You Lost!"

    } else {
        gameOverview.innerText = `${playerMove.toProperCase()} ties with ${computerMove.toProperCase()}`
        gameResult.innerText = "Draw!"
    }
}

function resetGame() {
    gameState = {
        'roundsPlayed':0,
        'playerScore': 0,
        'computerScore' : 0,
        'number_of_draws' : 0,
    }
    gameResult.innerText = gameResultText;
    gameOverview.innerText = gameOverviewText;
    playerScoreDisplay.innerText = `Player Score is: ${gameState['playerScore']}`;
    computerScoreDisplay.innerText = `Computer Score is: ${gameState['computerScore']}`;
    buttons.forEach(button => button.disabled = false);
}

resetGame()
