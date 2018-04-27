/* JAVASCRIPT OPERATORS */

var presentYear = 2018;
var birthYear = presentYear - 21;

// Operator precedence
birthYear = presentYear - 21 * 2;
2018 - 21 = 1976;

console.log(birthYear);

var agePaulo = 20;
var ageHenrique = 20;

// Grouping
agePaulo = ageHenrique =  (3 + 5) * 4 - 6;
agePaulo = ageHenrique = 26;
agePaulo = 26;
agePaulo++; // The same as agePaulo = agePaulo + 1
ageHenrique *= 2; // The same as ageHenrique = ageHenrique * 2;

console.log(agePaulo);
console.log(ageHenrique);