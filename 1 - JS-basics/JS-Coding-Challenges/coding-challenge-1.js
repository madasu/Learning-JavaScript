/***********************/
/* CODING CHALLENGE #1 */
/***********************/

/* 

* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). Mass in kg and height in meters.

* 1. Store Mark's and John's mass and height in variables;
* 2. Calculate both their BMIs;
* 3. Create a boolean variable containing information about whether Mark has a higher BMI than John;
* 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

*/

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

// Checking if Mark has a higher BMI than John 
var BMIMarkHigher = BMIMark > BMIJohn;

// Priting to the screen the result of the comparison
console.log('Is Mark\'s BMI higher than John\'s? ' + BMIMarkHigher); 