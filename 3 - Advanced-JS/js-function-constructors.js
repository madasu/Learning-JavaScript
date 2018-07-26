/***********************************/
/* JAVASCRIPT FUNCTION CONSTRUCTOR */
/***********************************/

// Creating an object using the object literal
var paulo = {
    name: 'Paulo',
    yearOfBirth: 1997,
    occupation: 'student'
};

// The function constructor is a pattern to write a blueprint
// 1. An empty object is created 
// 2. The function is called
var Person = function(name, yearOfBirth, occupation) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.occupation = occupation;
}

// Adding a method to the constructor's prototype property
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

// Adding a property to the constructor's prototype property
Person.prototype.lastName = 'Cunha';

// Creating new instances of the Person object  
// The 'new' keyword makes it that the variable of the function points to the empty object created at the beggining
var paulo = new Person('Paulo', 1997, 'student');
var henrique = new Person('Henrique', 1986, 'programmer');
var john = new Person('John', 1970, 'teacher');

// Using the added method on the newly created objects (inheritance in practice)
paulo.calculateAge();
henrique.calculateAge();
john.calculateAge();

// Proving that the new property ('lastName') was inherited by all the created objects
console.log(paulo.lastName);
console.log(henrique.lastName);
console.log(john.lastName);