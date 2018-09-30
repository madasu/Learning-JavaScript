/****************************************/
/* ES6 - CODING CHALLENGE - MY SOLUTION */
/****************************************/

/*

* Suppose that you're working in a small town admnistration and you're in charge of two town elements: 
* 1. Parks
* 2. Streets

* It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name an a build year. 

* At the end-of-year meeting, your boss wants a final report with the following:
* 1. Tree density of each park in the town (formula: number of trees/park area)
* 2. Average age of all the parks (formula: sum of all ages/number of parks)
* 3. The name of the park that has more than 1000 trees
* 4. Total and average length of the town's streets 
* 5. Size classification of all streets: tiny/small/normal/big/huge (if the size is unknown, the default is normal)

* All the report data should be printed to the console. 

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

/* ---------------------------------------------------------------------------------------------------- */

// CREATING THE TOWN ELEMENT CLASS
class TownElement {

    // Element function constructor
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

}

/* ---------------------------------------------------------------------------------------------------- */

// Variable that will hold the number of existing parks 
let numberOfParks = 0;

// Array that will contain the ages of each park
const parkAges = [];

// Array that will hold the parks that have more than 1000 trees
let moreThan1000 = [];

/* ---------------------------------------------------------------------------------------------------- */

// CREATING THE PARK SUBCLASS
class Park extends TownElement {

    // Park subclass function constructor
    constructor(name, buildYear, parkArea, numberOfTrees) {

        // Using the superclass properties
        super(name, buildYear);

        // Setting the properties of the subclass 
        this.parkArea = parkArea;
        this.numberOfTrees = numberOfTrees;

        // Increasing the number of parks by 1
        numberOfParks += 1;

        // Checking if the park has more than 1000 trees
        if (this.numberOfTrees >= 1000) {
            moreThan1000.push(this.name);
        }
    
    }

    // Method that calculates the tree density of each park in the town 
    calcTreeDensity() {
        let treeDensity = this.numberOfTrees / this.parkArea;
        this.treeDensity = treeDensity;
        console.log(`${this.name} has a tree density of ${this.treeDensity} per square km.`);
        return treeDensity;
    }

    // Method that calculates the age of each town's park
    calcParkAge() {
        let parkAge = new Date().getFullYear() - this.buildYear;
        this.parkAge = parkAge;
        parkAges.push(this.parkAge);
        return parkAge;
    }

}

/* ---------------------------------------------------------------------------------------------------- */

// Logging the 'Park Report' title 
console.log('----------PARKS REPORT----------');

/* ---------------------------------------------------------------------------------------------------- */

// Creating the first park ('Green Park') and calculating its age
let greenPark = new Park('Green Park', 1980, 0.2, 215);
greenPark.calcParkAge();

/* ---------------------------------------------------------------------------------------------------- */

// Creating the second park ('National Park') and calculating its age
let nationalPark = new Park('National Park', 1990, 2.9, 3541);
nationalPark.calcParkAge();

/* ---------------------------------------------------------------------------------------------------- */

// Creating the third park ('Oak Park') and calculating its age
let oakPark = new Park('Oak Park', 2003, 0.4, 949);
oakPark.calcParkAge();

/* ---------------------------------------------------------------------------------------------------- */

// Function that calculates the average age of each town's park 
function calcAvgParkAge(ages) {

    // Getting the summed ages
    const summedAges = ages.reduce((a, b) => a + b);

    // Calculate the average age 
    const avgParkAge = summedAges / numberOfParks;
    console.log(`Our ${numberOfParks} parks have an average of ${avgParkAge} years.`);

}
calcAvgParkAge(parkAges);

/* ---------------------------------------------------------------------------------------------------- */

// Calculating the tree density of the 3 created parks 
greenPark.calcTreeDensity();
nationalPark.calcTreeDensity();
oakPark.calcTreeDensity();

/* ---------------------------------------------------------------------------------------------------- */

// Function that retrieves the name of the park(s) with more than 1000 trees 
function logMoreThan1000(...numbers) {
    numbers.forEach(el => {
        if (numbers.length === 1) {
            console.log(`${el} has more than 1000 trees.`);
        } 
    });
}
logMoreThan1000(moreThan1000);

/* ---------------------------------------------------------------------------------------------------- */

// Variable that will hold the number of streets in the town
let numberOfStreets = 0;

// Array that will hold the lengths of all streets 
let streetLengths = []; 

/* ---------------------------------------------------------------------------------------------------- */

// CREATING THE STREET SUBCLASS
class Street extends TownElement {
    
    // Street subclass function constructor 
    constructor(name, buildYear, streetLength, streetCategory = 'normal') {

        // Using the superclass properties
        super(name, buildYear);

        // Setting the properties of the subclass
        this.streetLength = streetLength;
        this.streetCategory = streetCategory;

        // Increasing the number of streets of the town by 1
        numberOfStreets += 1;

        // Adding the street length to the array that contains all of the lengths
        streetLengths.push(this.streetLength);

    }

    // Method that describes the created street
    streetDescription() {
        console.log(`${this.name}, built in ${this.buildYear}, is a ${this.streetCategory} street.`);
    }

}

/* ---------------------------------------------------------------------------------------------------- */

// Logging the 'Street Report' title 
console.log('----------STREETS REPORT----------');

/* ---------------------------------------------------------------------------------------------------- */

// Creating the first street ('Ocean Avenue') 
let oceanAvenue = new Street('Ocean Avenue', 1999, 1.5, 'big');

// Creating the second street ('Evergreen Street') 
let evergreenStreet = new Street('Evergreen Street', 2008, 0.3, 'small');

// Creating the third street ('3th Street') 
let thirdStreet = new Street('3rd Street', 2015, 1.1);

// Creating the forth street ('Sunset Boulevard')
let sunsetBoulevard = new Street('Sunset Boulevard', 1982, 1.9, 'huge');

/* ---------------------------------------------------------------------------------------------------- */

// Method that calculates the total and average length of all streets 
function totalAndAvglength(lengths) {

    // Calculating the total length of all streets 
    let totalLength = lengths.reduce((a, b) => a + b);

    // Calculating the average length of all streets
    let avgLength = totalLength / numberOfStreets;

    // Logging to the console the total and average length of all streets 
    console.log(`Our ${numberOfStreets} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

}

/* ---------------------------------------------------------------------------------------------------- */

// Calling the method that calculates the total and average length of the streets
totalAndAvglength(streetLengths);

/* ---------------------------------------------------------------------------------------------------- */

// Calling the 'description' method on each of the 4 created streets 
oceanAvenue.streetDescription();
evergreenStreet.streetDescription();
thirdStreet.streetDescription();
sunsetBoulevard.streetDescription();

/* ---------------------------------------------------------------------------------------------------- */