/* JAVASCRIPT OBJECTS AND PROPERTIES */

// First way of creating an object
var paulo = {
	firstName: 'Paulo',
	lastName: 'Cunha',
	yearOfBirth: 1997,
	occupation: 'student',
	likesToProgram: true
};

// First way of getting the values out of the object
console.log(paulo.occupation);

// Second way of getting the values out of the objetct
console.log(paulo['occupation']);

// Third way of getting the values out of the object
var xyz = 'name';
console.log(paulo[xyz]);

// Data mutation of an object property
paulo.firstName = 'Henrique';
paulo['occupation'] = 'sleeping';
console.log(paulo);

// Second way of creating an object
var henrique = new Object();
henrique.firstName = 'Henrique';
henrique.lastName = 'Costa';
henrique['yearOfBirth'] = 1995;
henrique['occupation'] = 'sleeping';
henrique['likesToProgram'] = false;
console.log(henrique);

/* OBJECTS AND METHODS */

// Version 1 of the example object
var paulo = {
	firstName: 'Paulo',
	lastName: 'Cunha',
	yearOfBirth: 1997,
	occupation: 'student',
	likesToProgram: true,
	hobbies: ['sleep', 'gaming', 'programming'],
	calculateAge: function() {
			return 2018 - this.yearOfBirth;
	}
};

// Returning the last element of the hobbies array present at the object created
console.log(paulo.hobbies[2]);

// Calling the function present inside of the object created
// console.log(paulo.calculateAge(1990)); // Not the correct way of calling the function
console.log(paulo.calculateAge());

// Adding the calculate age to the object created
var age = paulo.calculateAge();
paulo.age = age;
console.log(paulo);

// Version 2 of the example object
var paulo = {
		firstName: 'Paulo',
		lastName: 'Cunha',
		yearOfBirth: 1997,
		occupation: 'student',
		likesToProgram: true,
		hobbies: ['sleeping', 'gaming', 'programming'],
		calculateAge: function() {
				this.age =  2018 - this.yearOfBirth;
		}
};

// Calculation the value of the age property
paulo.calculateAge();

// Priting the object to the console
console.log(paulo);

// Creating another object with the purpose the show how flexible the keyword "this" is
var henrique = {
		yearOfBirth: 1990,
		calculateAge: function() {
				this.age =  2018 - this.yearOfBirth;
		}
};

// Calcuting the value of the age property (different from the first one)
henrique.calculateAge();

// Priting the object to the console
console.log(henrique);