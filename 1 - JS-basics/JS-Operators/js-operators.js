/************************/
/* JAVASCRIPT OPERATORS */
/************************/

var currentYear, yearPaulo, yearHenrique;
var currentYear = 2018;
agePaulo = 21;
ageHenrique = 25;

// Math operators 
yearPaulo = currentYear - agePaulo;
yearHenrique = currentYear - ageHenrique;

console.log(yearPaulo);
console.log(currentYear + 5);
console.log(currentYear * 3);
console.log(currentYear / 6);

// Logical operators 
var pauloOlder = agePaulo > ageHenrique;
console.log(pauloOlder);

// typeof operator 
console.log(typeof pauloOlder);
console.log(typeof agePaulo);
console.log(typeof 'Paulo isn\'t older');
var x;
console.log(typeof x);