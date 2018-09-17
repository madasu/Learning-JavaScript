/***********************/
/* ES6 - DESTRUCTURING */
/***********************/

// Data used in the examples
var paulo5 = ['Paulo', 21];

// ES5 VERSION OF STORING EACH ELEMENT OF A DATA STRUCTURE IN A SINGLE VARIABLE
var name5 = paulo5[0];
var age5 = paulo5[1];

// ES6 VERSION OF STORING EACH ELEMENT OF A DATA STRUCTURE IN A SINGLE VARIABLE (EXAMPLE #1)
const [name6, age6] = ['Paulo', 21];
console.log(name6);
console.log(age6);

// ES6 VERSION OF STORING EACH ELEMENT OF A DATA STRUCTURE IN A SINGLE VARIABLE (EXAMPLE #2) 
const obj = {
    firstName: 'Paulo',
    lastName: 'Cunha'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);  

// Saving the values to different variables (not matching them with the key names)
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

/* MORE PRACTICAL APPLICATION OF 'DESTRUCTURING' (RETURNING MULTIPLE VALUES FROM A FUNCTION). IN ES5, USUALLY, IF THERE WAS MORE THAN 1 VALUE TO RETURN AN OBJECT SHOULD BE RETURNED. WITH DESTRUCTURING THE TASK OF RETURNING MULTIPLE VALUES GOT EASIER */
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age, retirement] = calcAgeRetirement(1980);
console.log(age);
console.log(retirement);