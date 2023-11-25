var orgNumber, guessedNumber, guessesRemaining, remaining, result;
remaining = document.getElementById('remaining');
result = document.getElementById('result');
guessesRemaining = 10;
function generateNumber() {
    orgNumber = Math.floor(Math.random() * 100) + 1;
}

function submitGuess() {

    guessesRemaining -= 1;
    remaining.innerHTML = "Tries Remaining: " + guessesRemaining;

    guessedNumber = parseInt(document.getElementById('guess').value);

    if (guessedNumber > orgNumber) {
        result.innerHTML = 'The number is Lower.';
    } else if (guessedNumber < orgNumber) {
        result.innerHTML = 'The number is Higher.';
    } else if (guessedNumber === orgNumber) {
        result.innerHTML = 'Congrats! You guessed the number correct!';
        setTimeout(function() {
            generateNumber();
            result.innerHTML = '<i>Result and Higher or lower will be shown here</i>';
            guessesRemaining = 10;
            remaining.innerHTML = 'Tries Remaining: ' + guessesRemaining;
            document.getElementById('guess').value = '';
        }, 5000);
        return;
    }

    if (guessesRemaining <= 0){
        result.innerHTML = "Sorry! You failed in guessing the correct number in 10 tries.";
        setTimeout(function() {
            generateNumber();
            result.innerHTML = '<i>Result and Higher or lower will be shown here</i>';
            guessesRemaining = 10;
            remaining.innerHTML = 'Tries Remaining: ' + guessesRemaining;
            document.getElementById('guess').value = '';
        }, 5000);
        return;
    }
}

guessesRemaining = 10;
remaining.innerHTML = "Tries Remaining: " + guessesRemaining;
generateNumber();
