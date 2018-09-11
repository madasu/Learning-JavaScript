/*****************/
/* ES6 - STRINGS */
/*****************/

// Data used in the example
let firstName = 'Paulo';
let lastName = 'Cunha';
const yearOfBirth = 1997;
function calcAge(year) {
    return 2018 - year;
}

// ES5 version of putting this data together in a string
console.log('This\'s ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he\'s ' + calcAge(yearOfBirth) + ' years old.');

// ES6 version of putting this data together in a string (template literals)
console.log(`This\'s ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he\'s ${calcAge(yearOfBirth)} years old.`);

// ES6 - New string methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('P'));
console.log(n.endsWith('nha')); 
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));