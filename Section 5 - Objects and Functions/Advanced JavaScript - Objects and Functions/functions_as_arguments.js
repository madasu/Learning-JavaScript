/* FIRST CLASS FUNCTIONS */

// A function is an instance of the Object type;
// A function behaves like any other object;
// We can store functions in a variable;
// We can pass a function as an argument to another function;
// We can return a function from a function.

/* PASSING FUNCTIONS AS ARGUMENTS */

// Creating an example array
var years = [1997, 1981, 1955, 1989, 2005];

// Creating a function that loop through the array and uses a callback function on each of its elements
function arrayCalc(arr, fn) {
		var arrRes = [];
		for(var i = 0; i < arr.length; i++) {
					arrRes.push(fn(arr[i]));
		}
		return arrRes;
}

// Example of a callback function #1
function calculateAge(el) {
		return 2018 - el;
}

// Example of a callback function #2
function isFullAge(el) {
		return el >= 18;
}

// Example of a callback function #3
function maxHeartRate(el) {
		if(el >= 18 && el <= 81) {
				return Math.round(206.9 - (0.67 * el));
		} else {
				return -1;
		}
}

/* Calling the arrayCalc function and passing it each one of the example callback functions as arguments, then printing the results to the screen */
var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);