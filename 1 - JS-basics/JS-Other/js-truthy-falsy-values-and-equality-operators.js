/**************************************************/
/* TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS */
/**************************************************/

// Truthy values: Not falsy values 
// Falsy values: undefined, null, 0, '', NaN

var age;
age = 21;

// Useful way to check if a variable is defined 
if(age || age === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has not been defined.');
}

// Equality operators 
if (age === '21') { // It's a best practice to use the strict equality operator - '==='
    console.log('The == operator does type coercion!');
}