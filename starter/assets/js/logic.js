var secsRemaining = 60;
var timeDisplay = document.getElementById("time");
var questionDisplay = document.getElementById("question-title")
var answersDisplay = document.getElementById("choices")
var startScreen = document.getElementById("start-screen")
var questionsDiv = document.getElementById("questions")
var answersDiv = document.getElementById("choices")
var questionNumber = 0;
var feedback = document.getElementById("feedback")
var endscreen = document.getElementById("end-screen")



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

document.getElementById("start").addEventListener("click", startQuiz)


// starts quiz

function startQuiz() {

    quizTimer();
    startScreen.style.display = "none"
    questionsDiv.removeAttribute("class", ".hide")
    feedback.removeAttribute("class", ".hide")
    // answersDiv.createElement("button")
    displayQuestion()



    // for (i = 0; i < questions.length; i++) {
    //     questionDisplay.textContent = questions[i].Question;

    //     for (j = 0; j < 4; j++) {
    //         var button = document.createElement('button')
    //         answersDiv.appendChild(button);
    //         button.innerText = questions[i].Answers[j]
    //     }







    // }
}

function displayQuestion() {

    var question = questions[questionNumber].Question;
    questionDisplay.textContent = question;
    for (i = 0; i < 4; i++) {
        var button = document.createElement('button')
        answersDiv.appendChild(button);
        button.innerText = questions[questionNumber].Answers[i]
    }


}

function nextQuestion() {
    questionsDiv.innerHTML = " ";
    questionNumber++
    if (questionNumber > questions.length) {
        questionsDiv.setAttribute("class", ".hide")
        feedback.setAttribute("class", ".hide")
        endscreen.removeAttribute("class", ".hide")

    } else {
        displayQuestion()
    }
}

// function questionClick() {
//     var element = button.addEventListener("click")
//     var userAnswer = element.getAttribute("data")
//     if (userAnswer === questions[questionNumber].Correct) {
//         feedback.innerText = "Correct"
//     } else {
//         feedback.innerText = "Incorrect"
//     }

// }
answersDiv.addEventListener("click", function questionClick(click) {
    click.preventDefault();


})
