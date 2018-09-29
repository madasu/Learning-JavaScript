/*****************/
/* ES6 - CLASSES */
/*****************/

// Classes simply make it easier to implement inheritance and to create objects based on blueprints 

// ES5 - CREATE A FUNCTION CONSTRUCTOR AND ADD A METHOD TO IT

// Create an example function constructor
var Person5 = function(name, yearOfBirth, occupation) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.occupation = occupation;
};

// Add a method to the prototype of the function constructor
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

// Create a new instance of Person5
var paulo5 = new Person5('Paulo', 1997, 'student');

// ES6 - USING CLASSES TO DO THE SAME TASK REPRESENTED ABOVE

// Creating the class
class Person6 {
    
    // Create the function constructor
    constructor(name, yearOfBirth, occupation) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.occupation = occupation;
    }

    // Add a method
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    // Add a static method
    static greeting() {
        console.log('Hey there!');
    }
    
}

// Create an instance of the class
const paulo6 = new Person6('Paulo', 1997, 'student');

// Call the example static method
Person6.greeting();