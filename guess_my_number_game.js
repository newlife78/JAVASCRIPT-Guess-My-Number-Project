'use strict';

// Define the secret number, initial score and initial high score
let secretNumber = secretNumberGenerator();
let score = 20;
let highScore = 0;

// Functions
function secretNumberGenerator() {
  return Math.trunc(Math.random() * 20 + 1);
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Check Inputs from User
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // When the player wins
  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // High score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is wrong
  if (guess >= 1 && guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// Play Again Button
document.querySelector('.again').addEventListener('click', () => {
  // New secret number and score
  secretNumber = secretNumberGenerator();
  score = 20;

  // Restore the initial number, message, score and input field
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';

  // Restore the initial DOM styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
