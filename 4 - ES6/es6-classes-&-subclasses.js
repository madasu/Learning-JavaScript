/********************************/
/* ES6 - CLASSES AND SUBCLASSES */
/********************************/

// ES5 - CONNECT 2 FUNCTION CONSTRUCTORS

// Create the superclass
var Person5 = function(name, yearOfBirth, occupation) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.occupation = occupation;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

// Create the subclass
var Athlete5 = function(name, yearOfBirth, occupation, olympicGames, medals) {

    // Call the superclass
    Person5.call(this, name, yearOfBirth, occupation);

    // Setting the properties of the subclass
    this.olympicGames = olympicGames;
    this.medals = medals;

};

// Setting the Athlete prototype to become the prototype of Person5
Athlete5.prototype = Object.create(Person5.prototype);

/* Method added to the prototype of Athlete5 (a method that increases the number of medals by 1) */
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
};

// Creating a instance of the Athlete5 subclass 
var pauloAthlete5 = new Athlete5('Paulo', 1997, 'kickboxer', 3, 0); 

// Calling the 'calculateAge' (superclass) and the 'wonMedal' (subclass) methods 
pauloAthlete5.calculateAge();
pauloAthlete5.wonMedal();

// ES6 - CONNECT 2 FUNCTION CONSTRUCTORS
class Person6 {

    // Create the function constructor
    constructor(name, yearOfBirth, occupation) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.occupation = occupation;
    }

    // Methods 
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

// Create a subclass of Person6
class Athlete6 extends Person6 {
 
    // Create the function constructor
    constructor(name, yearOfBirth, occupation, olympicGames, medals) {

        // Call the superclass    
        super(name, yearOfBirth, occupation);
        
        // Setting the properties of the subclass
        this.olympicGames = olympicGames;
        this.medals = medals;

    }

        /* Add a method associated with the subclass Athlete6 (a method that increases the number of medals by 1) */
        wonMedal() {
            this.medals++;
            console.log(this.medals);
        }
          
} 

// Creating an instance of the Athlete5 subclass
const pauloAthlete6 = new Athlete6('Paulo', 1997, 'kickboxer', 3, 0);

// Calling the 'calculateAge' (superclass) and the 'wonMedal' (subclass) methods
pauloAthlete6.calculateAge();
pauloAthlete6.wonMedal();