/************************************/
/* JAVASCRIPT PRIMITIVES VS OBJECTS */
/************************************/

// Variables containing primitives hold that data inside the object itself. 
/* Variables associated with objects don't contain the object, but a reference to the 
place in memory where the object is stored */

// Primitives example
var a = 23;
var b = a;
a = 30;
console.log(a);
console.log(b);

// Objects example 
var obj1 = {
    name: 'Paulo',
    age: 21
};

var obj2 = obj1;
obj1.age = 35;

console.log(obj1.age);
console.log(obj2.age);

// Functions (primitives and objects examples)
var age = 25;
var obj = {
    name: 'Henrique',
    city: 'Ponta Delgada'
};

function change(a, b) {
    a = 28;
    b.city = 'Madrid';
}

change(age, obj);

console.log(age);
console.log(obj.city);