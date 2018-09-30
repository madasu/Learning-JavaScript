/*****************************/
/* ES6 - THE SPREAD OPERATOR */
/*****************************/

// Data associated with the examples
function addFourAges(a, b, c, d) {
    return a + b + c + d; 
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5 - HOW TO PASS AN ARRAY INTO A FUNCTION

// Creating an array composed of the ages
var ages = [18, 30, 12, 21];

/* Using the 'apply' method to use the array and call the specified function using the elements as arguments */  
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6 - HOW TO PASS AN ARRAY INTO A FUNCTION
const sum3 = addFourAges(...ages);
console.log(sum3);

// ANOTHER USE CASE FOR THE SPREAD OPERATOR #1 (JOINING ARRAYS)
const johnFriends = ['Mike', 'Michael', 'Peter'];
const arthurFriends = ['James', 'Patrick', 'Mack'];
const allFriends = [...johnFriends, 'Lucas',  ...arthurFriends];
console.log(allFriends);

// ANOTHER USE CASE FOR THE SPREAD OPERATOR #2 (NODE LISTS)
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');