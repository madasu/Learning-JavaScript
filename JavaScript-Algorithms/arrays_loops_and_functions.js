/* CODING CHALLENGE 2 */

/*
1. Create an array with some years where persons were born
2. Create an empty array
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person if of full
age (18 or older), as well as their age
5. Finally, create a function called printFullAge, which receives the array
of the years as an argument, executes the setps 2., 3. and 4., and returns
an array of true /false boolean values afterwards. True if the person is of
full age (<= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two
variables: full_1 and full_2

Example input: [1965, 2008, 1993]
Example output: [true, false, true]

Hint: You can use a loop not only to read an array, like y[i], but also to set
values in  an array, like y[i] = ..., you can also use the specific array
methods
*/

// Creating the array containing the years of birth
var yearsOfBirth = [1997, 1995, 2005, 2003, 1990, 1983, 2007];

// Creating the empty array that will contain the ages of
var ages = [];

// Loop that will fill the empty array with the ages of the persons
for(var i = 0; i < yearsOfBirth.length; i++) {
		ages[i] = 2018 - yearsOfBirth[i];
}

/* loop that will log into the console whether each person is of full age(18 or
older, as well as their age */
j = 0;
while(j < ages.length) {

		if(ages[j] >= 18) {
				console.log('Person ' + (j + 1) + ' is of full age. This person is ' + ages[j] + ' years old.');
		} else {
				console.log('Person ' + (j + 1) + ' isn\'t of full age. This person is ' + ages[j] + ' years old.');
		}
		j++;
}

// Creating the function printFullAge containing all the steps above
function printFullAge(yearsOfBirth) {

		// Creating an empty array that will contain the ages
		var ages = [];

		/* Creating an empty array that will contain the true/false boolean values,
		associated with the age of the person. True if the person is
		18 or older, False if the person is younger than 18 years old */
		var personIsFullAge = [];

		// Loop that will fill the array with the ages of the persons
		for(var i = 0; i < yearsOfBirth.length; i++) {
				ages[i] = 2018 - yearsOfBirth[i];
		}

		/* Loop that will log into the console whether each person if of full age
		(18 or older), as well as their age */
		var j = 0;
		while(j < ages.length) {

				if(ages[j] >= 18) {
						console.log('Person ' + (j + 1) + ' is of full age. This person is ' + ages[j] + ' years old.');
						personIsFullAge.push(true);
				} else {
						console.log('Person ' + (j + 1) + ' isn\'t of full age. This person is ' + ages[j] + ' years old.');
						personIsFullAge.push(false);
				}
				j++;
		}

		return personIsFullAge;
}

var full_1 = printFullAge([1993, 1991, 2006, 2003, 1997, 1989, 2004]);
var full_2 = printFullAge([1990, 2005, 2003, 2006, 1950, 2011, 1973]);