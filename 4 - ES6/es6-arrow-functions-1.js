/*************************/
/* ES6 - ARROW FUNCTIONS */
/*************************/

// Data used in the example
const years = [1997, 1991, 1980, 1955];

// ES5 - Using the 'map' method to loop over the array
var ages5 = years.map(function(el) {
    return 2018 - el;
});
console.log(ages5);

/* ES6 - Using the 'map' method to loop over the array (showing the 3 different ways of writing arrow functions) */
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);