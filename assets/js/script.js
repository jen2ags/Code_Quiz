
var startButton = document.querySelector(".quiz-directions .start-button");
var quizQuest = document.querySelector(".quiz-questions");
var  tryAgain= document.querySelector(".end-buttons .try-again");
var  quit= document.querySelector(".end-buttons .quit");
var optionsList = document.querySelector(".option-list");
var countdownTimer = document.querySelector(".timer .seconds")


//array with all of my questions and answers in them
 questions = [
    {
       question: "1. How does a while loop start?",
       answer: "while (i<=10)",
       options: [
           "while i=1 to 10",
           "while (i<=10)",
           "while (i<=10; i++)",
           "while (i)"
       ]
    },

    { 
        question: "2. Where us the correct place to insert a JavaScript?",
        answer: "The body section",
        options: [
            "The head section",
            "Both the head section and the body section are correct",
            "The body section",
            "The header section"
        ]
     },

     { 
        question: "3. What is the correct format to create a function in javaScript?",
        answer: "function myFunction()",
        options: [
            "function myFunction()",
            "function:myFunction()",
            "function=myFunction()",
            "var myFunction()"
        ]
     },

     { 
        question: "4. How does the code look for if statements that are not equal to 8?",
        answer: "if(i !=8)",
        options: [
            "if i=!8 then",
            "if i<>8",
            "if(i<>8)",
            "if(i !=8)"
        ]
     },

     { 
        question: "5. Under which HTML element do we put the JavaScript?",
        answer: "script tag",
        options: [
            "js tag",
            "javascript tag",
            "script tag",
            "scripting tag"
        ]
     },

     
]

//There will be a start button to begin the quiz
startButton.onclick = function() {
    quizQuest.classList.add("activeQuiz");
    displayQuestions(questionCount);
    startTimer(60);
}

let questionCount = 0;
let timer;
let score = 0;

var nextButton = quizQuest.querySelector(".next");
var results = document.querySelector(".results");
var tryAgain = results.querySelector(".end-buttons .try-again");
var quitQuiz = results.querySelector(".end-buttons .quit");

//when the next button is clicked, the next question and answer choices will show up until the last question is shown
nextButton.onclick = function() {
    if(questionCount < questions.length - 1) {
    questionCount++;
    displayQuestions(questionCount);
    }
    else {
        console.log("Questions completed");
        showResults();
    }
}

//pull questions from questions.js and
function displayQuestions(i) {
    var questionText = document.querySelector(".quiz-quest");
    let questionTag = '<span>'+ questions[i].question +'</span>';
    let optionsTag = '<div class="choices">'+ questions[i].options[0] +'<span></span></div>'
                    + '<div class="choices">'+ questions[i].options[1] +'<span></span></div>'
                    + '<div class="choices">'+ questions[i].options[2] +'<span></span></div>'
                    + '<div class="choices">'+ questions[i].options[3] +'<span></span></div>';
    questionText.innerHTML = questionTag;
    optionsList.innerHTML = optionsTag;

    var choices = optionsList.querySelectorAll(".choices");
        for (let i=0; i < choices.length; i++) {
            choices[i].setAttribute("onclick", "choicesSelected(this)");
        }

}
//When the question is answered, the user will be told if it is correct or incorrect
function choicesSelected(answer) {
    let selection = answer.textContent;
    console.log(selection);
    let correct = questions[questionCount].answer;
    let options = optionsList.children.length;
    if(selection === correct) {
        score += 1;
        answer.classList.add("correct");
    console.log("Answer is correct");
    }
    //if the question was incorrect, it will notify you it was wrong
    else {
        score += 0;
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
    }


//user can only select one answer choice and will not allow a change
for (let i = 0; i < options; i++) {
    optionsList.children[i].classList.add("disable");
}
}

//Once the start button is clicked, the first question will show and the timer will start the countdown from 60 seconds
//timer function that is global and set interval to countdown
function startTimer(timeLeft) {
    timer = setInterval(timer, 1000);
    function timer() {
        countdownTimer.textContent = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            countdownTimer.textContent = "00";
        }
    
    }
}
//the user's answers will be recorded as correct or incorrect and a score will be displayed 
function showResults() {
    //hide the quiz questions
    quizQuest.classList.remove("activeQuiz");
    //show the results
    results.classList.add("activeResults");
    var scoreNum = results.querySelector(".score");
    if(score >= 0) {
        var displayScore = '<span>You got a <p>'+ score +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreNum.innerHTML =displayScore;
    }
}

quitQuiz.onclick = function() {
    window.location.reload();
}


tryAgain.onclick = function() {
    window.location.reload();
}

//if the question was correct, it will move on to the next question with out penalty

//the timer will deduct 10 seconds and the next question will show
//after question 5, the quiz will end and the timer will stop

//after the last question, the user's score is displayed on the screen and they will need to input their initials
//the user's data will be saved to local storage in the quiz and store all the high scores


