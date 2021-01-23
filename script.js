'use strict';

// generate a random secretNumber between 1 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// starting score initial value
let score = 20;

// highscore initial value
let highscore = 0;

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

        // saving highest score if user wins
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

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


// restarting the game
document.querySelector(".again").addEventListener("click", function () {
    // restore the initial values of the score and secret number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // restore the initial conditions of the message, number, score and guess input fields
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";

    // restore original background color and number width
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});