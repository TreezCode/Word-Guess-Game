
// GLOBAL VARIABLES
// ==========================================================
// Arrays and variables for holding data
var wordBank = ["allthat", "dagget", "norbert", "arnold", "catdog", "chuckie", "courage", "cow", "chicken", "dexter", "donnie", "doubledare", "doug", "ed", "edd", "edddy", "eliza", "gerald", "guts", "heffer", "helga", "ickis", "zim", "kablam", "kenan", "kel", "krumm", "olmec", "oblina", "otto", "patrick", "patti", "philbert", "pinky", "plank", "prometheus", "regina", "rocko", "roger", "rugrats", "skeeter", "squidward", "tommy"];

var hangmanArray = ["assets/images/hangman0.png", "assets/images/hangman1.png", "assets/images/hangman2.jpg", "assets/images/hangman3.jpg", "assets/images/hangman4.jpg", "assets/images/hangman5.jpg", "assets/images/hangman6.jpg", "assets/images/hangman7.jpg", "assets/images/hangman8.jpg", "assets/images/hangman9.jpg", "assets/images/hangman10.jpg", "assets/images/hangman11.jpg", "assets/images/hangman12.jpg", "assets/images/hangman13.jpg"]
var hangmanImage = document.getElementById("hangman-image");

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
// =====================================================

function startGame() {
    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = selectWord.split("");
    numBlanks = lettersInWord.length;

    // Reset
    guessesLeft = 13;
    wrongLetters = [];
    blanksAndSuccesses = [];
    hangmanIndex = 1;
    hangmanImage.setAttribute("src", "assets/images/hangman0.png");
    
    
    for (var i = 0; i < numBlanks; i++) {
        if (selectWord[i] === " ") {
            blanksAndSuccesses.push("&nbsp;");
        } else {
            blanksAndSuccesses.push("_ ");
        }
    }

    // Display HTML to reflect conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    // Testing
    // console.log(selectWord);
    console.log(lettersInWord);
    // console.log(numBlanks);
    // console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        // var userGuess = event.key
        if (wrongLetters.includes(letter)) {
            document.getElementById("alert-text").textContent = "You've already guessed that letter.";
        }

        // Check if letter exists in code at all
        var isLetterInWord = false;
        for (var i = 0; i < numBlanks; i++) {
            if (selectWord[i] == letter) {
                isLetterInWord = true;
            }
            if (selectWord[i] === "&nbsp;") {
                isLetterInWord = true;
            }
        }

        // Check where in the word letter exists, then populate blanksandsuccesses array
        if (isLetterInWord) {
            for (var i = 0; i < numBlanks; i++) {
                if (selectWord[i] == letter) {
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
        // console.log(blanksAndSuccesses);
    }
}

function roundComplete() {
    // console.log("Wins Count: " + winCount + "| Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    // Update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    // Cheeck if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;

        // Display image on win
        if (selectWord === "allthat") {
            hangmanImage.setAttribute("src", "assets/images/allthat.gif");
        }
        if (selectWord === "arnold") {
            hangmanImage.setAttribute("src", "assets/images/arnold.jpg");
        }
        if (selectWord === "catdog") {
            hangmanImage.setAttribute("src", "assets/images/catdog.jpg");
        }
        if (selectWord === "dagget") {
            hangmanImage.setAttribute("src", "assets/images/angry-beavers.png");
        }
        if (selectWord === "norbert") {
            hangmanImage.setAttribute("src", "assets/images/angry-beavers.png");
        }
        if (selectWord === "chuckie") {
            hangmanImage.setAttribute("src", "assets/images/chuckie.jpg");
        }
        if (selectWord === "courage") {
            hangmanImage.setAttribute("src", "assets/images/courage-cowardly-dog.jpg");
        }
        if (selectWord === "cow") {
            hangmanImage.setAttribute("src", "assets/images/cowAndChicken.jpg");
        }
        if (selectWord === "chicken") {
            hangmanImage.setAttribute("src", "assets/images/cowAndChicken.jpg");
        }
        if (selectWord === "dexter") {
            hangmanImage.setAttribute("src", "assets/images/dexters-lab.jpg");
        }
        if (selectWord === "doubledare") {
            hangmanImage.setAttribute("src", "assets/images/double_dare_logo.png");
        }
        if (selectWord === "doug") {
            hangmanImage.setAttribute("src", "assets/images/doug.jpg");
        }
        if (selectWord === "ed") {
            hangmanImage.setAttribute("src", "assets/images/ed-edd-eddy.jpg");
        }
        if (selectWord === "edd") {
            hangmanImage.setAttribute("src", "assets/images/ed-edd-eddy.jpg");
        }
        if (selectWord === "eddy") {
            hangmanImage.setAttribute("src", "assets/images/ed-edd-eddy.jpg");
        }
        if (selectWord === "eliza") {
            hangmanImage.setAttribute("src", "assets/images/eliza.jpg");
        }
        if (selectWord === "gerald") {
            hangmanImage.setAttribute("src", "assets/images/gerald.jpg");
        }
        if (selectWord === "guts") {
            hangmanImage.setAttribute("src", "assets/images/guts.jpg");
        }
        if (selectWord === "heffer") {
            hangmanImage.setAttribute("src", "assets/images/heffer.jpg");
        }
        if (selectWord === "helga") {
            hangmanImage.setAttribute("src", "assets/images/helga.jpg");
        }
        if (selectWord === "ickis") {
            hangmanImage.setAttribute("src", "assets/images/ickis.jpg");
        }
        if (selectWord === "kablam") {
            hangmanImage.setAttribute("src", "assets/images/kablam.jpg");
        }
        if (selectWord === "kenan") {
            hangmanImage.setAttribute("src", "assets/images/Kenan_&_Kel.jpg");
        }
        if (selectWord === "kel") {
            hangmanImage.setAttribute("src", "assets/images/Kenan_&_Kel.jpg");
        }
        if (selectWord === "krumm") {
            hangmanImage.setAttribute("src", "assets/images/krumm.jpg");
        }
        if (selectWord === "olmec") {
            hangmanImage.setAttribute("src", "assets/images/legendsofthehiddentemple.jpg");
        }
        if (selectWord === "oblina") {
            hangmanImage.setAttribute("src", "assets/images/oblina.jpg");
        }
        if (selectWord === "otto") {
            hangmanImage.setAttribute("src", "assets/images/otto.jpg");
        }
        if (selectWord === "patrick") {
            hangmanImage.setAttribute("src", "assets/images/patrick.jpg");
        }
        if (selectWord === "pinky") {
            hangmanImage.setAttribute("src", "assets/images/pinkyTheBrain.jpg.jpg");
        }
        if (selectWord === "plank") {
            hangmanImage.setAttribute("src", "assets/images/plank.jpg");
        }
        if (selectWord === "prometheus") {
            hangmanImage.setAttribute("src", "assets/images/pro-bob.jpg");
        }
        if (selectWord === "regina") {
            hangmanImage.setAttribute("src", "assets/images/regina.jpg");
        }
        if (selectWord === "rocko") {
            hangmanImage.setAttribute("src", "assets/images/rockos.jpg");
        }
        if (selectWord === "roger") {
            hangmanImage.setAttribute("src", "assets/images/roger.jpg");
        }
        if (selectWord === "rugrats") {
            hangmanImage.setAttribute("src", "assets/images/Rugrats.png");
        }
        if (selectWord === "skeeter") {
            hangmanImage.setAttribute("src", "assets/images/skeeter.jpg");
        }
        if (selectWord === "spongebob") {
            hangmanImage.setAttribute("src", "assets/images/spongebob.jpg");
        }
        if (selectWord === "tommy") {
            hangmanImage.setAttribute("src", "assets/images/tommy.jpg");
        }
        if (selectWord === "thornberrys") {
            hangmanImage.setAttribute("src", "assets/images/wild_thornberrys.jpg");
        }
        if (selectWord === "zim") {
            hangmanImage.setAttribute("src", "assets/images/invader-zim.jpg");
        }
        
        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;
        setTimeout(startGame, 2500);
    }

    // Check if usr lost
    else if (guessesLeft == 0) {
        lossCount++;

        // Update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;
        setTimeout(startGame, 1500);
    }
}

// Changes hangman canvas
var changeHangman = () => {
    hangmanImage.setAttribute("src", hangmanArray[hangmanIndex]);
    hangmanIndex++;
    if (hangmanIndex > hangmanArray.length) {
        hangmanIndex = 0;
    }
}

// Hides the instructions text
function hideIntro() {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("game-container").style.display = "grid";
}

// MAIN LOGIC
//============================================================
startGame();
document.onkeydown = function (event) {
    hideIntro(event.key);

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        document.onkeyup = function (event) {
            var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
            checkLetters(letterGuessed);
            roundComplete();
        }
    } else {
        document.getElementById("alert-text").textContent = ("Please select a valid letter.");
    }
}
