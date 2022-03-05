//There will be a start button to begin the quiz
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


<div class="questions">
<span>2. How do you write Good Luck! in an alert box?</span>
</div>
<div class="option_list">
<div class="choices">
    <span>alertBox("Good Luck!");</span>
</div>
<div class="choices">
    <span>alert("Good Luck!");**</span>
</div>
<div class="choices">
    <span>msgBox("Good Luck");</span>
</div>
<div class="choices">
    <span>msg("good Luck");</span>
</div>


<div class="questions">
    <span>3. What is the correct format to create a function in javaScript?</span>
</div>
<div class="option_list">
    <div class="choices">
        <span>function myFunction()**</span>
    </div>
    <div class="choices">
        <span>function:myFunction()</span>
    </div>
    <div class="choices">
        <span>function=myFunction()</span>
    </div>
    <div class="choices">
        <span>var myFunction()</span>
    </div>


    <div class="questions">
        <span>4. How does the code look for if statements that are not equal to 8?</span>
    </div>
    <div class="option_list">
        <div class="choices">
            <span>if i=!8 then</span>
        </div>
        <div class="choices">
            <span>if i<>8</span>
        </div>
        <div class="choices">
            <span>if(i<>8)</span>
        </div>
        <div class="choices">
            <span>if(i !=8)**</span>
        </div>


        <div class="questions">
            <span>5. What format do you use to add a comment in javaScript?</span>
        </div>science data
        <div class="option_list">
            <div class="choices">
                <span>!--This is a comment--</span>
            </div>
            <div class="choices">
                <span>'This is a comment'</span>
            </div>
            <div class="choices">
                <span>//This is a comment**</span>
            </div>
            <div class="choices">
                <span>"This is a comment"</span>
            </div>
        </div>


//When the question is answered, the user will be told if it is correct or incorrect
//if the question was correct, it will move on to the next question with out penalty
//if the question was incorrect, it will notify you it was wrong, the timer will deduct 10 seconds and the next question will show
//after question 5, the quiz will end and the timer will stop
//the user's answers will be recorded as correct or incorrect and a score will be displayed 
//after the last question, the user's score is displayed on the screen and they will need to input their initials
//the user's data will be saved to local storage in the quiz and store all the high scores


<div class="end_quiz_btn">
            <button class="submit">Submit</button>
        </div>
        <div class="navigate">
            <button class="try_again">Try Again</button>
        </div>