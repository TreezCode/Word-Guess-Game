
// GLOBAL VARIABLES
// ==========================================================
// Arrays and variables for holding data
var wordBank = ["all that", "angelica", "dagget", "norbert", "arnold", "catdog", "chuckie", "courage", "cow", "chicken", "darwin", "dexter", "donnie", "doubledare", "doug", "ed", "edd", "edddy", "eliza", "gerald", "guts", "heffer", "helga", "ickis", "zim", "johnny", "kablam", "kenan", "kel", "krumm", "olmec", "lil", "nigel", "oblina", "otto", "patrick", "patti", "phil", "philbert", "pinky", "plank", "prometheus", "regina", "rocko", "roger", "rugrats", "skeeter", "squid", "susie", "thebrain", "tommy", "twister"];

var hangmanImage = document.getElementById("hangman-image");
var hangmanArray = ["assets/images/hangman0.png", "assets/images/hangman1.png", "assets/images/hangman2.jpg", "assets/images/hangman3.jpg", "assets/images/hangman4.jpg", "assets/images/hangman5.jpg", "assets/images/hangman6.jpg", "assets/images/hangman7.jpg", "assets/images/hangman8.jpg", "assets/images/hangman9.jpg", "assets/images/hangman10.jpg", "assets/images/hangman11.jpg", "assets/images/hangman12.jpg", "assets/images/hangman13.jpg"]
var hangmanIndex = 1;

var selectWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = []; 

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 13;

// FUNCTIONS
// ==========================================================

function startGame () {
    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = selectWord.split("");
    numBlanks = lettersInWord.length;

    // Reset
    guessesLeft = 13;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        if (selectWord[i] === " ") {
            blanksAndSuccesses.push("- ");
        } else 
        {
            blanksAndSuccesses.push("_ ");
        }
    }

    // Display HTML to reflect conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing
    console.log(selectWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

    // Check if letter exists in code at all
    var isLetterInWord = false;
    for(var i=0; i<numBlanks; i++) {
        if(selectWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    // Check where in the word letter exists, then populate blanksandsuccesses array
    if(isLetterInWord) {
        for(var i=0; i<numBlanks; i++) {
            if(selectWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }

    // Letter wasn't found
    else {
        wrongLetters.push(letter);
        changeHangman();
        guessesLeft--
    }
    console.log(blanksAndSuccesses);
    
}

function roundComplete() {
    console.log("Wins Count: " + winCount + "| Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    // Update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


    // Cheeck if user won
    if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
        hangmanImage.setAttribute("src", hangmanArray[0]);
        winCount++;
        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;

        setTimeout(startGame, 500);
    }

    // Check if usr lost
    else if (guessesLeft == 0) {
        lossCount++;
        hangmanIndex = 0;
        // Update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;
        setTimeout(startGame, 500);
    }
}

var changeHangman = () => {
    hangmanImage.setAttribute("src", hangmanArray[hangmanIndex]);
    hangmanIndex++;
    if (hangmanIndex > hangmanArray.length) {
        hangmanIndex = 0;
    }
}

// MAIN LOGIC
//============================================================
startGame();

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}