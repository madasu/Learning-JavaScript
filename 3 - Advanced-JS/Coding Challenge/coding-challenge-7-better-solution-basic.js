/****************************************************************************************************/
/* ADVANCED JAVASCRIPT: OBJECTS AND FUNCTIONS CODING CHALLENGE (UDEMY'S INSTRUCTOR SOLUTION - BASIC)*/
/****************************************************************************************************/


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

/* ---------------------------------------------------------------------------------------------------- */

(function() {

    // Creating the Question function constructor
    function Question(question, answers, correct) {
        this.question = question; 
        this.answers = answers; 
        this.correct = correct;
    }

    // Creating the method that selects a random question 
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };

    // Creating the method that checks if an answer is correct
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)');
        }
    };

    // Creating the questions 
    var q1 = new Question('Is JavaScript the coolest programming language in the world?', 
                         ['Yes', 'No'], 
                         0);

    var q2 = new Question('What\'s the name of this course\'s teacher?',
                         ['John', 'Michael', 'Jonas'],
                         2);

    var q3 = new Question('What does best describe coding?', 
                         ['Boring', 'Hard', 'Fun', 'Tedious'],
                         2);

    // Saving the questions in an array 
    var questions = [q1, q2, q3];

    // Creating a random number that will be used to select a random question
    var n = Math.floor(Math.random() * questions.length);

    // Calling the 'displayQuestion' method 
    questions[n].displayQuestion();

    // Prompt the user for an answer and saving it on a variable 
    var answer = parseInt(prompt('Please select the correct answer.'));

    // Calling the 'checkAnswer' method
    questions[n].checkAnswer(answer);

})();

/* ---------------------------------------------------------------------------------------------------- */