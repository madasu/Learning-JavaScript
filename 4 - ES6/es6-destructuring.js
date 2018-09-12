/***********************/
/* ES6 - DESTRUCTURING */
/***********************/

// Data used in the examples
var paulo5 = ['Paulo', 21];

// ES5 version of store each element of a data structure in a single variable
var name5 = paulo5[0];
var age5 = paulo5[1];

// ES6 version of store each element of a data structure in a single variable (example #1)
const [name6, age6] = ['Paulo', 21];
console.log(name6);
console.log(age6);

// ES6 version of store each element of a data structure in a single variable (example #2)
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

/* More practical application of 'destructuring' (returning multiple values from a function). In ES5, usually, if there was more than 1 value to return an object should be returned. With destructuring the task of returning multiple values got easier */ 
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age, retirement] = calcAgeRetirement(1980);
console.log(age);
console.log(retirement);