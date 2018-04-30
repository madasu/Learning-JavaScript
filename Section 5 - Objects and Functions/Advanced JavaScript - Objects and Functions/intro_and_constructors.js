/* EVERYTHING IS AN OBJECT: INHERITANCE AND THE PROTOTYPE CHAIN */

// Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript;

// The prototype property of an object is where we put methods and properties that we want other objects to inherit;

// The Constructor's prototype property is NOT the protoype of the Constructor itself, it's the prototype of ALL instances that are created through it;

// When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.

/* USING THE CONCEPT BY CODING */

/* FUNCTION CONSTRUCTOR */
var paulo = {
		name: 'Paulo',
		yearOfBirth: 1997,
		occupation: 'student'
};

// Creating the object Person
var Person = function(name, yearOfBirth, occupation) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.occupation = occupation;
}

// Attaching a method to the Person object
Person.prototype.calculateAge = function() {
		console.log(2018 - this.yearOfBirth);
};

// Attaching a property to the Person object
Person.prototype.lastName = 'Cunha';

// Creating new Person objects
var paulo = new Person('Paulo', 1997, 'student');
var henrique = new Person('Henrique', 1995, 'nothing');
var john = new Person('John', 1980, 'sleep');

// Using the method attached to the prototype of the constructor function
paulo.calculateAge();
henrique.calculateAge();
john.calculateAge();

// Using the property attached to the prototype of the constructor function
console.log(paulo.lastName);
console.log(henrique.lastName);
console.log(john.lastName);