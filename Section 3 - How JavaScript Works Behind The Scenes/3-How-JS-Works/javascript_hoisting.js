/* JAVASCRIPT HOISTING */

// FUCTIONS HOISTING

// First example with a function declaration
calculateAge(1997);

function calculateAge(year) {
		console.log(2018 - year);
}

// Second example with a function expression
retirement(1984);

var retirement = function(year) {
		console.log(65 - (2018 - year));
}

// VARIABLES HOISTING

/* First example (trying to print the value of the variable before
the definition of it will lead to an undefined value */
console.log(age);
var age = 21;

/* Second example (checking the differences between a variable being
declared inside a function and outside of it */
function foo() {
		console.log(age);
		var age = 50;
		console.log(age);
}

foo();
