'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const gameOverMessage = `💥 Better Luck Next Time! My number was ${randomNumber}`;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('?');
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When theres no input
  if (!guess) {
    displayMessage('⛔️ No number!');
    document.querySelector('.guess').value = '';
    score--;
    displayScore(score);

    // User gets the random number
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!!! 🎉');
    displayNumber(randomNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Checks score then sets high score
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    // User guess number if its to high or to low
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '👍🏻 To High!!' : '👎🏻 To Low!!');
      score--;
      displayScore(score);
    } else {
      displayMessage(gameOverMessage);
      displayScore(0);
    }
  }
});
