/*********************/
/* JAVASCRIPT ARRAYS */
/*********************/

// Initialize new arrays 
var names = ['Paulo', 'Henrique', 'Mike'];
var years = new Array(1997, 1995, 1980);

// Accessing the elements of an array
console.log(names[0]);
console.log(names.length);

// Mutating the data of an array 
names[1] = 'Mark';
names[names.length] = 'James';
console.log(names);

// Arrays with diffrent data types inside 
var paulo = ['Paulo', 'Cunha', 1997, 'student', true];

// Array methods examples 
paulo.push('Ponta Delgada'); // Adds an element to the end of the array 
paulo.unshift('Mr.'); // Adds an element to the beggining of the array 
paulo.pop(); // Removes the element that is at the end of the array
paulo.shift(); // Removes the element that is at the beggining of the array
console.log(paulo);

console.log(paulo.indexOf('student')); // Returns the position of a given element of the array
console.log(paulo.indexOf(21)); // Returns '-1' because the element is not inside the array (useful for checking if a given element is part of an array or not) 

// Using the ternary operator to check the occupation present at the array above 
var isProgrammer = paulo.indexOf('programmer') === -1 ? 'Paulo is\'t a programmer!' : 'Paulo is a programmer!';
console.log(isProgrammer);