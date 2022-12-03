var secsRemaining = 60;
var timeDisplay = document.getElementById("time");


// timer
function quizTimer() {
    var timer = setInterval(function () {
        secsRemaining--;
        timeDisplay.textContent = secsRemaining + ' seconds remaining';
        if (secsRemaining === 0) {
            clearInterval(timer);
        }

    }, 1000)
}

document.getElementById("start").addEventListener("click", quizTimer)


