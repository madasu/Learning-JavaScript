/* IMMEADIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) */

/* Example of a function that will serve as a base to present the IIFE functions (this function is basically a game where the player wins if he get a score that is equal or bigger than 5) */
// function game() {
// 		var score = Math.random() * 10;
// 		console.log(score >= 5);
// }
//
// game();

// Example of an IIFE function
(function() {
		var score = Math.random() * 10;
		console.log(score >= 5);
})();

/* Proving that the variable score is not accessible outside of the function score (due to the scoping chain) */
// console.log(score);

// Example of the same IIFE function using a parameter
(function(goodLuck){
		var score = Math.random() * 10;
		console.log(score >= 5 - goodLuck);
})(5);