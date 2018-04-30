/* EVERYTHING IS AN OBJECT: INHERITANCE AND THE PROTOTYPE CHAIN */

// Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript;

// The prototype property of an object is where we put methods and properties that we want other objects to inherit;

// The Constructor's prototype property is NOT the protoype of the Constructor itself, it's the prototype of ALL instances that are created through it;

// When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.

/* OBJECT.CREATE METHOD */
var personProto = {
		calculateAge: function() {
				console.log(2018 - this.yearOfBirth);
		}
};

var paulo = Object.create(personProto);
paulo.name = 'Paulo';
paulo.yearOfBirth = 1997;
paulo.occupation = 'Student';

var henrique = Object.create(personProto,
{
		name: {value: 'Paulo'},
		yearOfBirth: {value: 1995},
		occupation: {value: 'Nothing'}
});