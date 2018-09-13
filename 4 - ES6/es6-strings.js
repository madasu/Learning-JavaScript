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

// ES5 VERSION OF PUTTING THIS DATA TOGETHER IN A STRING
console.log('This\'s ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he\'s ' + calcAge(yearOfBirth) + ' years old.');

// ES6 VERSION OF PUTTING THIS DATA TOGETHER IN A STRING (TEMPLATE LITERALS)
console.log(`This\'s ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he\'s ${calcAge(yearOfBirth)} years old.`);

// ES6 - NEW STRING METHODS
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('P'));
console.log(n.endsWith('nha')); 
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));