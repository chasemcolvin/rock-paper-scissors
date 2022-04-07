// start from 0 and increment by 1 to 5 
let playerScore = 0;
let computerScore = 0;

function random(number) {
    return Math.floor(Math.random() * number + 1);
}
// computer randomly chooses rock, paper, or scissors, assigns case outcome to var cGuess string and return result
function getComputerChoice() {
    let cNum = random(3);
    let cGuess = '';

// 3 choices to choose from; rock, paper, scissors
    switch (cNum) {
        case 1:
            cGuess == 'Rock';
            break;
        case 2:
            cGuess == 'Paper';
            break;
        case 3:
            cGuess == 'Scissors';
            break;
        default:
            break;
    }
    return cGuess;
}

function playGame(playerChoice, computerChoice) {
    let log = ''

    if (playerChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            log = 'You Lose! Paper beats Rock';
        }
    }

}


//console.log(getComputerChoice());