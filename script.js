let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);
const compareGuesses = (userGuess, computerGuess, targetNum) => {
  const userAb = Math.abs(targetNum - userGuess);
  const compAb = Math.abs(targetNum - computerGuess);
  if(userAb < compAb) {
    return false;
  } else {
    return true;
  }
}

const updateScore = winner => {
  if(winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;