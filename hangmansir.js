var Hint = "Largest animal in the forest";
var answer = "ELEPHANT";

function generatebox() {
    var n = answer.length;

    var D = document.getElementById("center"); 

    var htmlstring = "";

    for (var i = 0; i < n; i++) {
        htmlstring += "<td class=\"word-box\" id=\"letter" + i + "\"></td>";
    }

    D.innerHTML = "<tr>" + htmlstring + "</tr>";
}

function guessLetter() {
    var guessedLetter = document.getElementById("guess").value.toUpperCase();
    var alreadyGuessed = document.getElementById("already-guessed");

    if (guessedLetter.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }

    var guessedLetters = alreadyGuessed.innerText.split(": ")[1];
    if (guessedLetters.includes(guessedLetter)) {
        alert("You already guessed this letter.");
        return;
    }

    var found = false;

    for (var i = 0; i < answer.length; i++) {
        if (answer[i] === guessedLetter) {
            document.getElementById("letter" + i).innerText = guessedLetter;
            found = true;
        }
    }

    if (!found) {
        var attemptsElement = document.getElementById("attempts");
        var attempts = parseInt(attemptsElement.innerText.split(": ")[1]);
        attempts--;

        attemptsElement.innerText = "Number of attempts remaining: " + attempts;

        alreadyGuessed.innerText += " " + guessedLetter;
    }
}

window.onload = function() {
    generatebox();
};
