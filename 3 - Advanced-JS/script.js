/****************************************************************************/
/* ADVANCED JAVASCRIPT: OBJECTS AND FUNCTIONS CODING CHALLENGE (MY SOLUTION)*/
/****************************************************************************/

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



/* ---------------------------------------------------------------------------------------------------- */

/***************************************/
/* CREATING THE QUESTIONS FOR THE QUIZ */
/***************************************/

// Storing the questions #1, #2 and #3 in variables


// Storing the possible answers for question #1, #2 and #3 in arrays


// Pointing out the correct answer for question #1, #2 and #3


// Creating the objects for questions #1, #2 and #3

/* ---------------------------------------------------------------------------------------------------- */

/*********************************************/
/* STORING ALL THE QUESTIONS INSIDE AN ARRAY */
/*********************************************/


/* ---------------------------------------------------------------------------------------------------- */

/*************************************************/
/* METHOD THAT DISPLAYS THE SCORE IN THE CONSOLE */
/*************************************************/


/* ---------------------------------------------------------------------------------------------------- */

/*******************************************************************************************************/
/* METHOD THAT SELECTS A RANDOM QUESTION AND LOG IT TO THE CONSOLE, TOGETHER WITH THE POSSIBLE ANSWERS */
/*******************************************************************************************************/

// Declaring the 'randomQuestion', 'answerCorrect' and 'score' variables on the global scope

// Creating the method that selects a random question 
        
/* Declaring a variable containing the returned random question (it will be used on the 'checkAnswer' 
method) */

/* ---------------------------------------------------------------------------------------------------- */

/********************************************************************/
/* USING THE PROMPT FUNCTION TO ASK THE USER FOR THE CORRECT ANSWER */
/********************************************************************/

// The variable 'answer' that will hold the answer typed at the prompt 

/* ---------------------------------------------------------------------------------------------------- */

/**********************************/
/* CHECK IF THE ANSWER IS CORRECT */
/**********************************/

// Creating the method that checks if the answer is correct 

// Displaying the current score in the console 

// Calling the 'next question' function

/* ---------------------------------------------------------------------------------------------------- */

/********************************************/
/* --- EXPERT LEVEL VERSION OF THE QUIZ --- */
/********************************************/

/* ---------------------------------------------------------------------------------------------------- */

/****************************************/
/* 'NEXT RANDOM QUESTION' FUNCTIONALITY */
/****************************************/

// Declaring the fundamental variables associated with the 'next question' functionality

/* Creating the function that selects a 'next random question' after the result of the previous one has 
been displayed */
    
    // Select the next random question 

    // Prompt the user for a new answer 

    // Correcting the new question 

        // Displaying the current score in the console 

        // Calling the 'next question' function
        
        // Displaying the current score in the console 

        // Calling the 'next question' function

/* ---------------------------------------------------------------------------------------------------- */