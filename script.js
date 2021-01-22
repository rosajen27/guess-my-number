'use strict';

// save value in the guess box when the check button is clicked
document.querySelector(".check").addEventListener("click", function () {
    
    // Number() turns string into an integer
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // if guess field is empty, no number message appears
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";
    }
});