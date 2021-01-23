'use strict';

// generate a random secretNumber between 1 - 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// starting score is 20
let score = 20;

// save value in the guess box when the check button is clicked
document.querySelector(".check").addEventListener("click", function () {

    // Number() turns string into an integer
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // if guess field is empty, display no number message
    // if guess equals secretNumber, display correct number message
    // if guess is too low or too high, display corresponding message
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";

    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        // display that random secretNumber in the secretNumber div
        document.querySelector(".number").textContent = secretNumber;

        // change background color to green when user wins
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!"
            // reduce score by one point and display new score
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // once score is below 0, display you lost the game message
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }

    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low!"
            // reduce score by one point and display new score
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // once score is below 0, display you lost the game message
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});