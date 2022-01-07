
var playerPoints = 0;
var ComputerPoints = 0;

function computerPlay() {
    var cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice == 0) {
        cpuChoice = "rock";
    } else if (cpuChoice == 1) {
        cpuChoice = "paper";
    } else {
        cpuChoice = "scissors"
    }
    console.log(cpuChoice);
    return cpuChoice;
}

function getPlayerChoice() {
    var playerChoice = prompt('what do u choose\n?');
    console.log(playerChoice);
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
    }

}

function playGame() {
    var turns = 5;
    computerPoints = 0;
    playerPoints = 0;
    while (turns != 0) {
        var computerSelection = computerPlay();
        var playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log('computer has %d points, player has %d points.', computerPoints, playerPoints)
        turns = turns - 1
    }
    
    if (computerPoints > playerPoints) {
        console.log('computer wins');
    } else if (playerPoints > computerPoints) {
        console.log('player wins');
    }


}


playGame();

