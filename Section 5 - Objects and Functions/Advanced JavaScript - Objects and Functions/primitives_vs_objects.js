/* EVERYTHING IS AN OBJECT: INHERITANCE AND THE PROTOTYPE CHAIN */

// Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript;

// The prototype property of an object is where we put methods and properties that we want other objects to inherit;

// The Constructor's prototype property is NOT the protoype of the Constructor itself, it's the prototype of ALL instances that are created through it;

// When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.

/* PRIMITIVES VS OBJECTS */

// Primitives (examples)
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects (examples)
var obj1 = {
		name: 'Paulo',
		age: 20
};

var obj2 = obj1;

obj1.age = 21;
console.log(obj1.age);
console.log(obj2.age);

// Functions (example with primitives and objects)
var age = 20;
var obj = {
		name: 'Henrique',
		city: 'Ponta Delgada'
};

function change(a, b) {
		a = 30;
		b.city = 'Madrid';
}

change(age, obj);

console.log(age);
console.log(obj.city);