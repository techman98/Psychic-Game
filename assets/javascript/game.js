// Wins goes up if user guesses the correct letter 
var wins = 0;
// Losses goes up after guessesLeft hits 0
var losses = 0;
// guessesLeft goes down each time the user hits a key if the answer isn't correct. guessesLeft goes back up after the user wins or loses.
var guessesLeft = 9;
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guesses = [];
// compChoice picks a random letter from choices Array.
var compChoice = choices[Math.floor(Math.random() * choices.length)];

document.onkeyup = function (event) {
    // Sets all letters pressed to lower case
    var lettersPressed = event.key.toLowerCase();

    if (choices.includes(lettersPressed)) {
        if (lettersPressed == compChoice) {
            wins = wins + 1;
            guessesLeft = 9;
            guesses = [];
            compChoice = choices[Math.floor(Math.random() * choices.length)];
        }
        else if (guessesLeft > 1) {
            // If key pressed is not a letter do not subtract a guess



            guesses.push(lettersPressed);
            
            // if (guesses.includes(lettersPressed)) {
                
            // }
            // else {
                guessesLeft = guessesLeft - 1;
            // }
            console.log(guesses);
        }
        // If guessesLeft = 0 reset lettersPressed, compChoice, and guessesLeft.
        else {
            losses = losses + 1;
            guessesLeft = 9;
            guesses = [];
            compChoice = choices[Math.floor(Math.random() * choices.length)];

        }
    }
    else {
        alert("You dipshit! Pick a fucking letter.")
    }

    // Set the text id in html to this
    document.getElementById("game").innerHTML = ("Psychic" + "<p>Press a key to guess which letter the computer has chosen.</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses: " + guesses + "</p>");
}
