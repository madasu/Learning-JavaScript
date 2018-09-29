/**************************************************/
/* JAVASCRIPT VARIABLE MUTATION AND TYPE COERCION */
/**************************************************/

/*****************/
/* TYPE COERCION */
/*****************/
var firstName = 'Paulo';
var age = 21;

// Example of type coercion with numbers 
console.log(firstName + ' ' + age);

// Creating variables before assigning them a value (a cleaner way of defining)
var occupation, likesCoding;

occupation = 'Student';
likesCoding = true; // Commented out for demonstration of the undefined value type coercion

// Example of type coercion using numbers, boolean and undefined values 
console.log(firstName + ' is a ' + age + ' year old ' + occupation + '. Does he likes to code? ' + 
likesCoding);

/*********************/
/* VARIABLE MUTATION */
/*********************/
age = 'twenty one';
occupation = 'programmer aspirant';

// Using an alert to show a popup window instead of printing to the console 
alert(firstName + ' is a ' + age + ' year old ' + occupation + '. Does he likes to code? ' + likesCoding);

// Using a prompt and saving the answer on a variable 
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);