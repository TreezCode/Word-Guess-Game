
// * * * * Global Variables. * * * * //
var wins = 0;
var losses = 0;
var lives = 13;
var underscore = [];
var wrongGuesses = [];

// * * * * Create an array of words and phrases. * * * * //
var wordBank = ["allthat", "angelica", "dagget", "norbert", "arnold", "catdog", "chuckie", "courage", "cow", "chicken", "darwin", "dexter", "donnie", "doubledare", "doug", "ed", "edd", "edddy", "eliza", "gerald", "guts", "heffer", "helga", "ickis", "zim", "johnny", "kablam", "kenan", "kel", "krumm", "olmec", "lil", "nigel", "oblina", "otto", "patrick", "patti", "phil", "philbert", "pinky", "plank", "prometheus", "regina", "rocko", "roger", "rugrats", "skeeter", "squid", "susie", "thebrain", "tommy", "twister"];

// * * * * Choose a random word or phrase. * * * * //
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);

// randomWord = randomWord.replace(/\s/g, "-");
// console.log (randomWord)

//  * * * * Create array of images for hangman canvas. * * * * //
var hangmanImage = document.getElementById("hangman-image");
var hangmanArray = ["assets/images/hangman0.png", "assets/images/hangman1.png", "assets/images/hangman2.jpg", "assets/images/hangman3.jpg", "assets/images/hangman4.jpg", "assets/images/hangman5.jpg", "assets/images/hangman6.jpg", "assets/images/hangman7.jpg", "assets/images/hangman8.jpg", "assets/images/hangman9.jpg", "assets/images/hangman10.jpg", "assets/images/hangman11.jpg", "assets/images/hangman12.jpg", "assets/images/hangman13.jpg"]
var hangmanIndex = 1;

document.getElementById("wins-text").textContent = wins;
document.getElementById("losses-text").textContent = losses;
document.getElementById("underscore-text").textContent = underscore.join("");
document.getElementById("wrong-guesses").textContent = wrongGuesses.join("");
document.getElementById("alert-text").textContent = "";
document.getElementById("lives-counter").textContent = lives;

// * * * * Create underscore dependent on randomWord length.* * * * //
var createUnderscores = () => {
    for (var i = 0; i < randomWord.length; i++) {
        underscore.push("_ ");
    }
    document.getElementById("underscore-text").textContent = underscore.join("");
}
createUnderscores();

// NEED TO FIX SPACE BUG IN UNDERSCORES //

// * * * * If user presses any key the game will start. * * * * //
document.onkeydown = function (event) {
    gameStart(event.key);

    // * * * * Capture user guess.* * * * //
    document.onkeydown = function (event) {

        var userGuess = event.key.toLowerCase();

        if (event.keyCode >= 65 && event.keyCode <= 90) {
            console.log(userGuess);
            evaluateGuess(userGuess);
        } else {
            document.getElementById("alert-text").textContent = "Please select a valid letter.";
        }
    }
}

// * * * * Evaluate letter guessed. * * * * //
var evaluateGuess = (letter) => {

    if (wrongGuesses.includes(letter)) {
        document.getElementById("alert-text").textContent = "You've already guessed that letter.";
    } else {
        if (randomWord.indexOf(letter) === -1) {
            wrongGuesses.push(letter);
            lives--;
            changeHangman();
            if (lives === 0) {
                losses++;
            }
            document.getElementById("lives-counter").textContent = lives;
            document.getElementById("wrong-guesses").textContent = wrongGuesses.join("");
            document.getElementById("losses-text").textContent = losses;
        }
        else {
            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === letter) {
                    underscore.splice(i, 1, letter + " ");
                    document.getElementById("underscore-text").textContent = underscore.join("");
                }
            }
            if (underscore.join("").replace(/\s/g, "") === randomWord) {
                handleWin();
            }
        }
    }
}


// * * * * FUNTIONS * * * * //
var gameStart = () => {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("game-container").style.display = "grid";
}

var gameReset = () => {
    
}
var handleWin = () => {
    wins++;
    document.getElementById("wins-text").textContent = wins;
}

var changeHangman = () => {
    hangmanImage.setAttribute("src", hangmanArray[hangmanIndex]);
    hangmanIndex++;
    if (hangmanIndex > hangmanArray.length) {
        hangmanIndex = 0;
    }
}
