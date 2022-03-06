
var startButton = document.querySelector(".quiz-directions .start-button")
var quizQuest = document.querySelector(".quiz-questions")
var  tryAgain= document.querySelector(".end-buttons .try-again")
var  quit= document.querySelector(".end-buttons .quit")

//There will be a start button to begin the quiz
document.getElementsByClassName("start-button").onclick = function() {
    quizQuest.classList.add(quizQuest);
}



//Once the start button is clicked, the first question will show and the timer will start the countdown from 60 seconds
//timer function that is global and set interval to countdown
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        
    })
}

//5 questions on the quiz
//1. How does a while loop start?
//while i=1 to 10
//while (i<=10)**
//while (i<=10; i++)
//while (i)

//2. How do you write Good Luck! in an alert box?
//alertBox("Good Luck!");
//alert("Good Luck!");**
//msgBox("Good Luck");
//msg("good Luck");

//3. What is the correct format to create a function in javaScript?
//function myFunction()**
//function:myFunction()
//function=myFunction()
//var myFunction()

//4. How does the code look for if statements that are not equal to 8?
//if i=!8 then
//if i<>8
//if(i<>8)
//if(i !=8)**

//5. What format do you use to add a comment in javaScript?
//!--This is a comment--
//'This is a comment'
////This is a comment**
//"This is a comment"





//When the question is answered, the user will be told if it is correct or incorrect
//if the question was correct, it will move on to the next question with out penalty
//if the question was incorrect, it will notify you it was wrong, the timer will deduct 10 seconds and the next question will show
//after question 5, the quiz will end and the timer will stop
//the user's answers will be recorded as correct or incorrect and a score will be displayed 
//after the last question, the user's score is displayed on the screen and they will need to input their initials
//the user's data will be saved to local storage in the quiz and store all the high scores


