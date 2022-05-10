
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let cpuChoices = ['rock', 'paper', 'scissors'];
    let cpuChoice = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    return cpuChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt('Choose: rock, paper, scissors');

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log('tie'); 
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('cpu wins - paper beats rock');
        computerPoints += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('player wins- rock beats scissors');
        playerPoints += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('player wins - paper beats rock');
        playerPoints += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('cpu wins - scissors beats paper');
        computerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('cpu wins - rock beats scissors');
        computerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('player wins - scissors beats paper');
        playerPoints += 1;
    }

}

function playGame() {
    let turns = 5;
    computerPoints = 0;
    playerPoints = 0;
    while (turns != 0) {
        let computerSelection = computerPlay();
        let playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log('computer has %d points, player has %d points.', computerPoints, playerPoints)
        turns = turns - 1
    }
    
    if (computerPoints > playerPoints) {
        console.log('computer wins');
    } else if (playerPoints > computerPoints) {
        console.log('player wins');
    } else if (computerPoints == playerPoints) {
        console.log('its a tie!')
    }


}


playGame();

