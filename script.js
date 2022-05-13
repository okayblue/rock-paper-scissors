let playerPoints = 0;
let computerPoints = 0;

let buttons = document.querySelectorAll('.btn');
let results = document.querySelector('.results');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        // choose rock, paper, scissors based on the text of the button
        playerChoice = button.textContent.toLowerCase();
        playRound(playerChoice, computerPlay());
    });

});


function computerPlay() {
    let cpuChoices = ['rock', 'paper', 'scissors'];
    let cpuChoice = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    return cpuChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = 'tie'; 
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        results.textContent = 'cpu wins - paper beats rock';
        computerPoints += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        results.textContent = 'player wins- rock beats scissors';
        playerPoints += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        results.textContent = 'player wins - paper beats rock';
        playerPoints += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        results.textContent = 'cpu wins - scissors beats paper';
        computerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        results.textContent = 'cpu wins - rock beats scissors';
        computerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        results.textContent = 'player wins - scissors beats paper';
        playerPoints += 1;
    }
    // Display the running score, and announce a winner of the game once one player reaches 5 points. 

    console.log('computer has %d points, player has %d points.', computerPoints, playerPoints)
    
    if (playerPoints == 5 || computerPoints == 5) {
        finalResults();
    }
}

    function finalResults() { 
        if (computerPoints > playerPoints) {
            console.log('computer wins');
        } else if (playerPoints > computerPoints) {
            console.log('player wins');
        } else {
            console.log('its a tie!')
        }

    }
