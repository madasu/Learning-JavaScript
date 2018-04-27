/* JAVASCRIPT ARRAYS */

// First way of defining an array
var names = ['Paulo', 'Henrique', 'John'];

// Second way of defining an array
var years = new Array(1997, 1995, 1980);

// Acessing the elements of the array
console.log(names[0]);

// Changing the values of the array
names[1] = 'Michael';
console.log(names);

// Example of an array with different data types
var paulo = ['Paulo', 'Cunha', 1997, 'student', true];

// Functions that are specific to arrays
paulo.push('blue'); // Adds an element to the end of the array
paulo.unshift('Mr.'); // Adds an element to the beggining of the array
paulo.pop(); // Removes the last element of the array, returning it
paulo.shift(); // Removes the first element of the array, returning it
paulo.indexOf('student'); // Returns the position which an element is stored at the array, if the element isn't part of the array, it returns -1

console.log(paulo);

if(paulo.indexOf('worker') === -1) {
		console.log('Paulo is not a worker.');
}