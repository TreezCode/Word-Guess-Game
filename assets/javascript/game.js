
// GLOBAL VARIABLES
// ==========================================================
// Arrays and variables for holding data
var wordBank = ["all that", "angry beavers", "arnold", "catdog", "courage", "cow", "chicken", "dexters laboratory", "double dare", "doug funny", "eliza", "gerald", "global guts", "heffer", "helga", "hey arnold", "ickis", "invader zim", "johnny bravo", "kablam", "krumm", "oblina", "otto", "patrick", "patti mayonaise", "philbert", "plank", "prometheus", "reggie", "rocket power", "rocko", "roger klotz", "rugrats", "skeeter valentine", "squidward", "tommy pickles"];
var hangmanArray = ["assets/images/hangman0.png", "assets/images/hangman1.png", "assets/images/hangman2.jpg", "assets/images/hangman3.jpg", "assets/images/hangman4.jpg", "assets/images/hangman5.jpg", "assets/images/hangman6.jpg", "assets/images/hangman7.jpg", "assets/images/hangman8.jpg", "assets/images/hangman9.jpg", "assets/images/hangman10.jpg", "assets/images/hangman11.jpg", "assets/images/hangman12.jpg", "assets/images/hangman13.jpg"]
var hangmanImage = document.getElementById("hangman-image");
var selectWord = "";
var lettersInWord = [];
var numOfLetters = 0;
var hiddenWord = [];
var wrongLetters = [];
var pause = false;

// Score counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 13;

// FUNCTIONS
// =====================================================
var reset = () => {

    selectWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = selectWord.split("");
    numOfLetters = lettersInWord.length;
    var space = selectWord.indexOf(" ");

    // Reset
    guessesLeft = 13;
    wrongLetters = [];
    hiddenWord = [];
    hangmanIndex = 1;
    hangmanImage.setAttribute("src", "assets/images/hangman0.png");
    pause = false;

    // Creates underscores to hide word in HTML.
    for (var i = 0; i < numOfLetters; i++) {
        hiddenWord.push("_");
    }
    // Removes any space from the array of letters and replaces it with a space (white space issue RESOLVED)
    if (space !== -1) {
        hiddenWord.splice(space, 1, " ");
    }
    console.log(selectWord);

    // Display HTML to reflect conditions
    document.getElementById("wordToGuess").innerHTML = hiddenWord.join("");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongGuesses").innerHTML = "";
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

}

var checkLetters = (letter) => {

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var alreadyGuessed = false;
        if (wrongLetters.includes(letter)) {
            document.getElementById("alert-text").textContent = "You've already guessed that letter.";
            alreadyGuessed = true;
        }
        // Check if letter exists in code
        var isLetterInWord = false;
        for (var i = 0; i < numOfLetters; i++) {
            if (selectWord[i] == letter) {
                isLetterInWord = true;
            }
        }
        // Check where the letter exists then populate it in hidden word array
        if (isLetterInWord && pause === false) {
            for (var i = 0; i < numOfLetters; i++) {
                if (selectWord[i] == letter) {
                    hiddenWord[i] = letter;
                    document.getElementById("alert-text").textContent = "";
                }
            }
        }
        if (isLetterInWord === false && alreadyGuessed === false && pause === false) {
            wrongLetters.push(letter);
            changeHangman();
            guessesLeft--
            document.getElementById("alert-text").textContent = "";
        }
    }
}

var roundComplete = () => {

    // Update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = hiddenWord.join("");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    // Cheeck if user won
    if (lettersInWord.toString() == hiddenWord.toString() && pause === false) {
        winCount++;
        switch (selectWord) {
            case "all that":
                hangmanImage.setAttribute("src", "assets/images/allthat.gif");
                break;
            case "angry beavers":
                hangmanImage.setAttribute("src", "assets/images/angry-beavers.png");
                break;
            case "arnold":
                hangmanImage.setAttribute("src", "assets/images/arnold.jpg");
                break;
            case "angelica":
                hangmanImage.setAttribute("src", "assets/images/angelica.jpg");
                break;
            case "catdog":
                hangmanImage.setAttribute("src", "assets/images/catdog.jpg");
                break;
            case "chuckie":
                hangmanImage.setAttribute("src", "assets/images/chuckie.jpg");
                break;
            case "courage":
                hangmanImage.setAttribute("src", "assets/images/courage-cowardly-dog.jpg");
                break;
            case "cow":
                hangmanImage.setAttribute("src", "assets/images/cowAndChicken.jpg");
                break;
            case "chicken":
                hangmanImage.setAttribute("src", "assets/images/cowAndChicken.jpg");
                break;
            case "dexters laboratory":
                hangmanImage.setAttribute("src", "assets/images/dexters-lab.jpg");
                break;
            case "double dare":
                hangmanImage.setAttribute("src", "assets/images/double_dare_logo.png");
                break;
            case "doug funny":
                hangmanImage.setAttribute("src", "assets/images/doug.jpg");
                break;
            case "eliza":
                hangmanImage.setAttribute("src", "assets/images/wild_thornberrys.jpg");
                break;
            case "gerald":
                hangmanImage.setAttribute("src", "assets/images/gerald.jpg");
                break;
            case "global guts":
                hangmanImage.setAttribute("src", "assets/images/guts.jpg");
                break;
            case "heffer":
                hangmanImage.setAttribute("src", "assets/images/heffer.jpg");
                break;
            case "helga":
                hangmanImage.setAttribute("src", "assets/images/helga.jpg");
                break;
            case "hey arnold":
                hangmanImage.setAttribute("src", "assets/images/hey arnold.png");
                break;
            case "ickis":
                hangmanImage.setAttribute("src", "assets/images/ahhRealMonsters.jpg");
                break;
            case "invader zim":
                hangmanImage.setAttribute("src", "assets/images/invaderZim.jpg");
                break;
            case "johnny bravo":
                hangmanImage.setAttribute("src", "assets/images/johhnyBravo.jpg");
                break;
            case "kablam":
                hangmanImage.setAttribute("src", "assets/images/kablam.jpg");
                break;
            case "krumm":
                hangmanImage.setAttribute("src", "assets/images/ahhRealMonsters.jpg");
                break;
            case "oblina":
                hangmanImage.setAttribute("src", "assets/images/ahhRealMonsters.jpg");
                break;
            case "otto":
                hangmanImage.setAttribute("src", "assets/images/otto.jpg");
                break;
            case "patti mayonaise":
                hangmanImage.setAttribute("src", "assets/images/patti.jpg");
                break;
            case "patrick":
                hangmanImage.setAttribute("src", "assets/images/patrick.jpg");
                break;
            case "philbert":
                hangmanImage.setAttribute("src", "assets/images/philbert.jpg");
                break;
            case "plank":
                hangmanImage.setAttribute("src", "assets/images/plank.jpg");
                break;
            case "prometheus":
                hangmanImage.setAttribute("src", "assets/images/pro-bob.jpg");
                break;
            case "reggie":
                hangmanImage.setAttribute("src", "assets/images/reggie.jpg");
                break;
            case "rocket power":
                hangmanImage.setAttribute("src", "assets/images/rocket-power.jpg");
                break;
            case "rocko":
                hangmanImage.setAttribute("src", "assets/images/rockos.jpg");
                break;
            case "roger klotz":
                hangmanImage.setAttribute("src", "assets/images/roger.jpg");
                break;
            case "rugrats":
                hangmanImage.setAttribute("src", "assets/images/Rugrats.png");
                break;
            case "skeeter valentine":
                hangmanImage.setAttribute("src", "assets/images/skeeter.jpg");
                break;
            case "spongebob squarepants":
                hangmanImage.setAttribute("src", "assets/images/spongebob.jpg");
                break;
            case "squidward":
                hangmanImage.setAttribute("src", "assets/images/squidward.jpg");
                break;
            case "tommy pickles":
                hangmanImage.setAttribute("src", "assets/images/tommy.jpg");
                break;
        }
        document.getElementById("button-grid").style.display = "grid";
        document.getElementById("winCounter").innerHTML = winCount;
        pause = true;
    }

    // Check if user lost
    else if (guessesLeft == 0 && pause === false) {
        lossCount++;
        document.getElementById("lossCounter").innerHTML = lossCount;
        pause = true;

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
var hideIntro = () => {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("game-container").style.display = "grid";
    document.getElementById("button-grid").style.display = "grid";
}

// Main Logic
//============================================================
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

reset();
