/*************************************/
/* JAVASCRIPT 'IF / ELSE' STATEMENTS */
/*************************************/

var firstName = 'Paulo';
var role = 'student';

if (role === 'worker') {
    console.log(firstName + ' is a worker!');
} else {
    console.log(firstName + ' is a student!');
}

var isAWorker = true;

if(isAWorker) {
    console.log(firstName + ' is a worker!');
} else {
    console.log(firstName + ' is a student!');
}

// Improving the coding challenge #1 with a conditional statement 

// Storing the mass and height of both John and Mark in variables 
var massMark, massJohn, heightMark, heightJohn;
massMark = 65; // kg 
massJohn = 70; // kg
heightMark = 1.80; // meters
heightJohn = 1.78; // meters 

// Calculate the BMI of both John and Mark 
var BMIJohn, BMIMark;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Conditional statement to check if Mark's BMI is higher than John's 
if(BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s!');
} else {
    console.log('Mark\'s BMI isn\'t higher than John\'s!');
}