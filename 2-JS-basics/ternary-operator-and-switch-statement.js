/**********************************************/
/* THE TERNARY OPERATOR AND SWITCH STATEMENTS */
/**********************************************/

var firstName = 'Paulo';
var age = 21;

// First example of using the ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// Using the ternary operator to assign a value to a given variable
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if(age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement example #1
var occupation = 'student';

switch(occupation) {
    case 'teacher':
    case 'instructor':
    console.log(firstName + ' teaches people!');
    break;

    case 'driver':
    console.log(firstName + ' drives cars!');
    break;

    case 'programmer':
    console.log(firstName + ' is a programmer!');
    break;

    default: 
    console.log(firstName + ' is probably a student!');
}

// Switch statement example #2 (using previous written code - boolean logic section)
switch(true) {
    case age < 13:
    console.log(firstName + ' is a boy.');
    break;

    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;

    case age >= 20 && age <= 30:
    console.log(firstName + ' is a young man.');
    break;

    default:
    console.log(firstName + ' is a man.');
}