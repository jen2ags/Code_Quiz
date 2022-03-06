
var startButton = document.querySelector(".quiz-directions .start-button")
var quizQuest = document.querySelector(".quiz-questions")
var  tryAgain= document.querySelector(".end-buttons .try-again")
var  quit= document.querySelector(".end-buttons .quit")


//There will be a start button to begin the quiz
startButton.onclick = function() {
    quizQuest.classList.add("activeQuiz");
}

let questionCount = 0;


//Once the start button is clicked, the first question will show and the timer will start the countdown from 60 seconds
//timer function that is global and set interval to countdown
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        
    })
}






//When the question is answered, the user will be told if it is correct or incorrect
//if the question was correct, it will move on to the next question with out penalty
//if the question was incorrect, it will notify you it was wrong, the timer will deduct 10 seconds and the next question will show
//after question 5, the quiz will end and the timer will stop
//the user's answers will be recorded as correct or incorrect and a score will be displayed 
//after the last question, the user's score is displayed on the screen and they will need to input their initials
//the user's data will be saved to local storage in the quiz and store all the high scores


