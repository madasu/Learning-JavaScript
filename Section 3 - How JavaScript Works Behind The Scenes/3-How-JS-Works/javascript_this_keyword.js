/* JAVASCRIPT SCOPING */

// First scoping example
var a = 'Hello';
first();

function first() {
		var b = 'Hi';
		second();

		function second() {
				var c = 'Hey!';
				console.log(a + b + c);
		}
}

// Example that shows the difference between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
		var b = 'Hi';
		second();

		function second() {
				var c = 'Hey!';
				third();
		}
}

function third() {
		var d = 'John';
		// console.log(c);

		// The third function has access to the variables a and d
		console.log(a + d);
