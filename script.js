'use strict';

// generate a random secretNumber between 1 - 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// starting score is 20
let score = 20;

// display that random secretNumber in the secretNumber div
document.querySelector(".number").textContent = secretNumber;

// save value in the guess box when the check button is clicked
document.querySelector(".check").addEventListener("click", function () {

    // Number() turns string into an integer
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // if guess field is empty, no number message appears
    // if guess equals secretNumber, display correct number message
    // if guess is too low or too high, display corresponding message
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";

    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";

    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "📈 Too high!"
        // reduce score by one point and display new score
        score--;
        document.querySelector(".score").textContent = score;

    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "📉 Too low!"
        // reduce score by one point and display new score
        score--;
        document.querySelector(".score").textContent = score;
    }
});