var orgNumber, guessedNumber, guessesRemaining;

guessesRemaining = 10;
function generateNumber() {
    orgNumber = Math.floor(Math.random() * 100) + 1;
}

function submitGuess() {

    guessesRemaining -= 1;
    document.getElementById('remaining').innerHTML = "Tries Remaining: " + guessesRemaining;

    guessedNumber = parseInt(document.getElementById('guess').value);

    if (guessedNumber > orgNumber) {
        document.getElementById('result').innerHTML = 'The number is Lower.';
    } else if (guessedNumber < orgNumber) {
        document.getElementById('result').innerHTML = 'The number is Higher.';
    } else if (guessedNumber === orgNumber) {
        document.getElementById('result').innerHTML = 'Congrats! You guessed the number correct!';
        generateNumber();
    }

    if (guessesRemaining <= 0){
        document.getElementById('result').innerHTML = "Sorry! You failed in guessing the correct number in 10 tries.";
        setTimeout(generateNumber, 5000);
        guessesRemaining = 10;
        document.getElementById('remaining').innerHTML = "Tries Remaining: " + guessesRemaining;
    }
}

guessesRemaining = 10;
document.getElementById('remaining').innerHTML = "Tries Remaining: " + guessesRemaining;
generateNumber();