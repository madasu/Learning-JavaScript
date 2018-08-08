/***************************************************************/
/* ADVANCED JAVASCRIPT: OBJECTS AND FUNCTIONS CODING CHALLENGE */
/***************************************************************/

/*

--- BASIC VERSION OF THE QUIZ ---

* 1. Build a function constructor called 'Question' to describe a question. A question should include: 
* a) The question itself;
* b) The answers from which the player can choose the correct one (choose an adequate data structure here: array, object, etc.);
* c) The correct answer (a number is recommended for this one).

* 2. Create a couple of questions using the constructor;

* 3. Store them all inside an array; 

* 4. Select one random question an log it to the console, together with the possible answers (each question should have a number). Hint: write a method for the question objects to succeed at the task;

* 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on 'task 4';

* 6. Check if the answer chosen is the correct one and print to the console whether the answer is correct or not. Hint: write another method for this;

* 7. Suppose this could would be a plugin for other programmers to use in their code, so make sure that all your code is private and doesn't interfere with the other programmers code. Hint: a special technique that we learned does exactly that. 

--- EXPERT LEVEL OF THE QUIZ --- 

* 8. After you display the result, display the next random question, so that the game never ends. Hint: write a function for this and call it right after displaying the result; 

* 9. Be careful: after the 'task 8', the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, don't call the function from 'task 8';

* 10. Track the user's score to make the game more fun. So each time an answer is correct, add 1 point to the score. Hint: do with the tools you fell more comfortable at this point, but the 'power' of closures can be used to complete the task;

* 11. Display the score in the console. Use yet another method for this task.

*/

/* ---------------------------------------------------------------------------------------------------- */

/************************************/
/* --- BASIC VERSION OF THE QUIZ --- */
/************************************/

/* ---------------------------------------------------------------------------------------------------- */

/**********************************************/
/* CREATING THE QUESTION FUNCTION CONSTRUCTOR */
/**********************************************/

var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}; 

/* ---------------------------------------------------------------------------------------------------- */

/***************************************/
/* CREATING THE QUESTIONS FOR THE QUIZ */
/***************************************/

// Storing the questions #1, #2 and #3 in variables
var q1 = 'Is JavaScript the coolest programming language in the world?';
var q2 = 'What is the name of this course\'s teacher?';
var q3 = 'What word does best in describing coding?';

// Storing the possible answers for question #1, #2 and #3 in arrays
var answers1 = ['yes', 'no'];
var answers2 = ['John', 'Michael', 'Jonas'];
var answers3 = ['Boring', 'Hard', 'Fun', 'Tedious'];

// Pointing out the correct answer for question #1, #2 and #3
var correctAnswer1 = answers1[0];
var correctAnswer2 = answers2[2];
var correctAnswer3 = answers3[2];

// Creating the objects for questions #1, #2 and #3
var question1 = new Question(q1, answers1, correctAnswer1);
var question2 = new Question(q2, answers2, correctAnswer2);
var question3 = new Question(q3, answers3, correctAnswer3);

/* ---------------------------------------------------------------------------------------------------- */

/*********************************************/
/* STORING ALL THE QUESTIONS INSIDE AN ARRAY */
/*********************************************/

var questions = [question1, question2, question3];

/* ---------------------------------------------------------------------------------- */

/*******************************************************************************************************/
/* METHOD THAT SELECTS A RANDOM QUESTION AND LOG IT TO THE CONSOLE, TOGETHER WITH THE POSSIBLE ANSWERS */
/*******************************************************************************************************/

// Declaring the 'randomQuestion' variable on the global scope
var randomQuestion;

// Creating the method that selects a random question 
var selectQuestion = Question.prototype.selectQuestion = (function() {

    function createQuestion() {
        
        var randomQuestionNumber = Math.floor(Math.random() * 3);
        randomQuestion = questions[randomQuestionNumber];
        console.log(randomQuestion.question);
    
        for(var i = 0; i < randomQuestion.answers.length; i++) {
            console.log(i + ': ' + randomQuestion.answers[i]);
        }
    
        return randomQuestion.question;

    }

    createQuestion();
    return createQuestion;

})();

/* Declaring a variable containing the returned random question (it will be used on the 'checkAnswer' 
method) */
var question = randomQuestion.question;

/* ---------------------------------------------------------------------------------------------------- */

/********************************************************************/
/* USING THE PROMPT FUNCTION TO ASK THE USER FOR THE CORRECT ANSWER */
/********************************************************************/

// The variable 'answer' that will hold the answer typed at the prompt 
function answerPrompt() {
    var answer = prompt('Please select the correct answer (just type the number) Or type \'exit\' to quit.');
    return answer; 
}

var questionAnswer = answerPrompt(); 

/* ---------------------------------------------------------------------------------------------------- */

/**********************************/
/* CHECK IF THE ANSWER IS CORRECT */
/**********************************/

var response;

// Creating the method that checks if the answer is correct 
var checkAnswer = Question.prototype.checkAnswer = (function() {

    function checkAnswer() {
        
        if((question === questions[0].question && questionAnswer === '0') ||
        (question === questions[1].question && questionAnswer === '2') || 
        (question === questions[2].question && questionAnswer === '2')) {
           console.log('Correct answer!');
        } else if(questionAnswer === 'exit') {
            return;           
        } else {
           console.log('Wrong answer. Try again! :)');
        }

    }       

    checkAnswer();
    return checkAnswer;
        
})();

nextQuestion();
/* ---------------------------------------------------------------------------------------------------- */

/********************************************/
/* --- EXPERT LEVEL VERSION OF THE QUIZ --- */
/********************************************/

/* ---------------------------------------------------------------------------------------------------- */

/****************************************/
/* 'NEXT RANDOM QUESTION' FUNCTIONALITY */
/****************************************/

var newQuestion, newQuestionAnswer;

/* Creating the function that selects a 'next random question' after the result of the previous one has 
been displayed */
function nextQuestion() {
    
    // Select the next random question 
    newQuestion = selectQuestion();

    // Prompt the user for a new answer 
    newQuestionAnswer = answerPrompt();

    if((newQuestion === questions[0].question && newQuestionAnswer === '0') ||
    (newQuestion === questions[1].question && newQuestionAnswer === '2') || 
    (newQuestion === questions[2].question && newQuestionAnswer === '2')) {
        console.log('Correct answer!');
    } else if(newQuestionAnswer === 'exit') {
        return;
    } else {
        console.log('Wrong answer. Try again :)');
    }

}

/* ---------------------------------------------------------------------------------------------------- */

/***********************************************************************/
/* 'NEXT RANDOM QUESTION' FUNCTIONALITY CONDITIONALS AND 'EXIT' OPTION */
/***********************************************************************/