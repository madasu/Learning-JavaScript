/*************************/
/* ES6 - ARROW FUNCTIONS */
/*************************/

// Data used in the example
const years = [1997, 1991, 1980, 1955];

// ES5 - USING THE 'MAP' METHOD TO LOOP OVER AN ARRAY
var ages5 = years.map(function(el) {
    return 2018 - el;
});
console.log(ages5);

/* ES6 - USING THE 'MAP' METHOD TO LOOP OVER AN ARRAY (SHOWING THE 3 DIFFERENT WAYS OF WRITING ARROW FUNCTIONS) */
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