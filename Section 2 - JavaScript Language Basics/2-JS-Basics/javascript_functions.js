/* JAVASCRIPT FUNCTIONS */

/* Example function to calculate the age of a person by passing the year
of birth as an argument */
function calculateAge(yearOfBirth) {
		var age = 2018 - yearOfBirth;
		return age;
}

var agePaulo = calculateAge(1997);
var ageHenrique = calculateAge(1990);
var ageJohn = calculateAge(1983);

console.log(agePaulo);
console.log(ageHenrique);
console.log(ageJohn);

// Function that returns how many years a person has left until retirement
function yearsUntilRetirement(name, year) {
		var age = calculateAge(year);
		var retirement = 65 - age;

		if(retirement >= 0) {
			console.log(name + ' retires in ' + retirement + ' years.');
		} else {
			console.log(name + ' is already retired.');
		}
}

yearsUntilRetirement('John', 1983);
yearsUntilRetirement('Michael', 1965);
yearsUntilRetirement('Arthur', 1930);

/* DIFFERENCE BETWEEN STATEMENTS AND EXPRESSIONS */

// A statement performs some action
function someFun(par) {
	// code
}

// An expressions produces an outcome
var someFun = function(par) {
	//code
}

// Examples of expressions
3 + 4;
var x = 3;

// Examples of statements
if(x === 5) {
		// do something
}