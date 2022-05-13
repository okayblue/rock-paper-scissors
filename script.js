let playerPoints = 0;
let computerPoints = 0;

let buttons = document.querySelectorAll('.btn');
let results = document.querySelector('.results');
let scoreBoard = document.querySelector('.score');

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
        results.textContent = 'Tie'; 
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        results.textContent = 'Computer wins - paper beats rock';
        computerPoints += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        results.textContent = 'Player wins- rock beats scissors';
        playerPoints += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        results.textContent = 'Player wins - paper beats rock';
        playerPoints += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        results.textContent = 'Computer wins - scissors beats paper';
        computerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        results.textContent = 'Computer wins - rock beats scissors';
        computerPoints += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        results.textContent = 'Player wins - scissors beats paper';
        playerPoints += 1;
    }
    // Display the running score, and announce a winner of the game once one player reaches 5 points. 

    scoreBoard.textContent = `Computer: ${computerPoints} || Player: ${playerPoints}`;

    if (playerPoints == 5 || computerPoints == 5) {
        finalResults();
        // disable the buttons after the game is over
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

    function finalResults() { 
        if (computerPoints > playerPoints) {
            results.textContent = 'Computer wins!';
        } else if (playerPoints > computerPoints) {
            results.textContent = 'Player wins!';
        } else {
            results.textContent = 'It\'s a tie!';
        }
    }
