/****************************/
/* ES6 - DEFAULT PARAMETERS */
/****************************/

// ES5 - CREATING 'DEFAULT PARAMETERS'

// Function constructor used in the examples
function CunhaPerson(firstName, yearOfBirth, lastName, nationality) {

    // Creating predefined values when the 'lastName' and 'nationality' are not specified
    lastName === undefined ? lastName = 'Cunha' : lastName = lastName;
    nationality === undefined ? nationality = 'portuguese' : nationality = nationality;

    // Finish creating the function constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}

/* Creating a new instance of the 'CunhaPerson' function constructor without specifying all the
parameters */
// var paulo = new CunhaPerson('Paulo', 1997);

/* Creating a new instance of the 'CunhaPerson' function constructor specifying all the
parameters */
// var henrique = new CunhaPerson('Henrique', 1990, 'Costa', 'english');

// ES6 - USING 'DEFAULT PARAMETERS'

// Function constructor used in the examples
function CunhaPerson(firstName, yearOfBirth, lastName = 'Cunha', nationality = 'portuguese') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

/* Creating a new instance of the 'CunhaPerson' function constructor without specifying all the
parameters */
var paulo = new CunhaPerson('Paulo', 1997);

/* Creating a new instance of the 'CunhaPerson' function constructor specifying all the
parameters */
var henrique = new CunhaPerson('Henrique', 1990, 'Costa', 'english');