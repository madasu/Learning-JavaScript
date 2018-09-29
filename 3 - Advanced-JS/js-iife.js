/**************************************************************/
/* JAVASCRIPT IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) */
/**************************************************************/

// Example of creating a game where the score variable is 'hidden' ('private variable')
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// Example of an IIFE using the example above
// 'Tricking' the JavaScript parser to 'believe' that the structure is an expression and not a declaration
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// Passing an argument to the IIFE example given 
(function(goodLuck) {
    var score = Math.random() * 5;
    console.log(score >= 5 - goodLuck);
})(5);