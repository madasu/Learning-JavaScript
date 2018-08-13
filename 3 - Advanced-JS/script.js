/*****************************************************************************************************/
/* ADVANCED JAVASCRIPT: OBJECTS AND FUNCTIONS CODING CHALLENGE (UDEMY'S INSTRUCTOR SOLUTION - EXPERT)*/
/*****************************************************************************************************/

/*

--- EXPERT LEVEL OF THE QUIZ ---

* 8. After you display the result, display the next random question, so that the game never ends. Hint: write a function for this and call it right after displaying the result;

* 9. Be careful: after the 'task 8', the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, don't call the function from 'task 8';

* 10. Track the user's score to make the game more fun. So each time an answer is correct, add 1 point to the score. Hint: do with the tools you fell more comfortable at this point, but the 'power' of closures can be used to complete the task;

* 11. Display the score in the console. Use yet another method for this task.

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
    Question.prototype.checkAnswer = function(ans, callback) {
        
        // Declaring the local score variable
        var sc;

        // Checking if the given answer was correct
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        // Calling the 'displayQuestion' method
        this.displayScore(sc);
    };

    // Creating the method that will display the score in the console 
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('----------------------------');
    };

    // Creating the questions 
    var q1 = new Question('Is JavaScript the coolest language in the world?',
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

    // Creating the function that updates the score 
    function score() {

        // Creating the local score variable 
        var sc = 0;

        /* Returning a function that will check if the answer is correct and returning the score based on that */
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    }

    // Creating the variable that will hold the score
    var keepScore = score();
    
    // Creating the 'next question' functionality 
    function nextQuestion() {
        
        // Creating a random number that will be used to select a random question 
        var n = Math.floor(Math.random() * questions.length);

        // Calling the 'displayQuestion' method
        questions[n].displayQuestion();

        // Prompt the user for an answer and saving it on a variable 
        var answer = prompt('Please select the correct answer.');

        // Apply the 'exit' functionality to end the game 
        if (answer !== 'exit') {
            
            // Calling the 'checkAnswer' method 
            questions[n].checkAnswer(parseInt(answer), keepScore); 
            
            // Calling the 'nextQuestion' function
            nextQuestion();
        
        }

    }

    // Calling the 'nextQuestion' function
    nextQuestion();

})();

/* ---------------------------------------------------------------------------------------------------- */