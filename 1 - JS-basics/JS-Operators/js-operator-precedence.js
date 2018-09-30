/**********************************/
/* JAVASCRIPT OPERATOR PRECEDENCE */
/**********************************/

var currentYear = 2018;
var yearPaulo = 1997;
var fullAge = 18;

// Multiple operators 
var isFullAge = currentYear - yearPaulo >= fullAge; // The 'minus' operator has a precedence value of 16, while the 'greater than or equal' operator has a value of 11. The 'assignment' has a value of 3 (data from the precedence table)
console.log(isFullAge);

// Grouping operator
var agePaulo = currentYear - yearPaulo;
var ageHenrique = 25;
var average = (agePaulo + ageHenrique) / 2; // The 'division' operator has a higher precedence than the 'plus' operator. The parenthesis are needed to group the first two values (the 'grouping' operator has a value of 20 at the table)
console.log(average);

// Multiple assignments 
var x, y;
x = y = (5 + 8) * 3 - 1; // 13 * 3 - 1 // 39 - 1 // 33
console.log(x, y); // Assigment works from the right to left in terms of associativity

// More operators 
x *= 2; // The same has x = x * 2
console.log(x); 
x += 10; // The same has x = x + 10
console.log(x);
x++; // The same has x = x + x;
console.log(x);