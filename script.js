'use strict';

let score = 20;
let highScore = 0;
let secret = Math.trunc((Math.random() * 20) + 1);
console.log(secret);

const gameOver = () => {
    document.querySelector('.message').textContent = 'Game Over!';
    document.querySelector('.score').textContent = 0;
}

const scoreCalc = (highLow) => {
    document.querySelector('.message').textContent = `Too ${highLow}`;
    score--;
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess)
    {
        document.querySelector('.message').textContent = 'No Number';
    }
    else if (guess === secret) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if (guess > secret && score > 1) {
        scoreCalc('High');
    }
    else if (guess < secret && score > 1) {
        scoreCalc('Low');
    }
    else {
        gameOver();
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = '20';
    score = 20;
    secret = Math.trunc((Math.random() * 20) + 1);
    console.log(secret);
});