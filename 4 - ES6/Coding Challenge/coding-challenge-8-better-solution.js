/**************************************************/
/* ES6 - CODING CHALLENGE - INSTRUCTOR'S SOLUTION */
/**************************************************/

/*

* Suppose that you're working in a small town admnistration and you're in charge of two town elements: 
* 1. Parks
* 2. Streets

* It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name an a build year. 

* At the end-of-year meeting, your boss wants a final report with the following:
* 1. Tree density of each park in the town (formula: number of trees/park area)
* 2. Average age of all the parks (formula: sum of all ages/number of parks)
* 3. The name of the park that has more than 1000 trees
* 4. Average and total length of the town's streets 
* 5. Size classification of all streets: tiny/small/normal/big/huge (if the size is unknown, the default is normal)

* All the report data should be printed to the console. 

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

/* ---------------------------------------------------------------------------------------------------- */

// SUPERCLASS THAT CONTAINS THE PROPERTIES THAT THE ELEMENTS 'PARK' AND 'STREET' HAVE IN COMMON 
class Element {

    // Constructor of the superclass 'Element'
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

}

/* ---------------------------------------------------------------------------------------------------- */

// CREATE THE SUBCLASS 'PARK'
class Park extends Element {
    
    // Constructor of the subclass 'Park'
    constructor(name, buildYear, area, numTrees) {
        
        // Calling the properties of the 'superclass' 
        super(name, buildYear);
        
        // Defining the properties of the 'subclass' 
        this.area = area; // km2
        this.numTrees = numTrees;
    }

    // Method that calculates the tree density of each park 
    treeDensity() {
        const density = this.numTrees / this.area; 
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

/* ---------------------------------------------------------------------------------------------------- */

// CREATE THE SUBLCASS 'STREET' 
class Street extends Element {

    // Constructor of the subclass 'Street'
    constructor(name, buildYear, length, size = 3) {
        
        // Calling the properties of the 'superclass'
        super(name, buildYear);

        // Defining the properties of the 'subclass'
        this.length = length;
        this.size = size;

    }

    // Method that classifies the street accordingly
    classifyStreet() {
        
        // Using 'maps' to classify the given streets 
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);

    }

}

/* ---------------------------------------------------------------------------------------------------- */

// DEFINING AN ARRAY THAT CONTAINS ALL CREATED PARKS
const allParks = [new Park('Green Park', 1987, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)];

// DEFINING AN ARRAY THAT CONTAINS ALL CREATED STREETS
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('3rd Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

/* ---------------------------------------------------------------------------------------------------- */

/* Helper external function that calculates the average and the total for every array that is passed into it (used in the 'reportParks' and 'reportStreets' functions) */
function calc(arr) {

    // Using a method that calculates the total of the array (using the 'reduce' method)
    // [3, 5, 7] - 0 + 3 = 3, 3 + 5 = 8, 8 + 7 = 15 (example of using the 'reduce' method)   
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    // Using 'destructuring' for getting the average and the total sum 
    return [sum / arr.length, sum];

}

/* ---------------------------------------------------------------------------------------------------- */

// GENERATING THE REPORTS (DEFINING FUNCTIONS TO ACHIEVE THIS GOAL) 
function reportParks(p) {

    // Printing the 'Parks Report' title 
    console.log('------PARKS REPORT------');

    // Calculating the density of each park 
    p.forEach(el => el.treeDensity());

    // Creating an array with all the ages for all of the parks
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    
    // Getting the average and the total of the ages (using 'destructuring')
    const [avgAge, totalAge] = calc(ages);

    // Printing to the console only the average of the ages 
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Figuring out which of the parks has more than 1000 trees (using the 'findIndex' method)
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {

    // Printing the 'Trees Report' title 
    console.log('------TREES REPORT------');

    /* Getting the average and total length of the streets (using 'destructuring' and building an array composed of lengths) */
    const [avgLength, totalLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have an average length of ${avgLength}, with a total of ${totalLength} km.`);

    // Classifying the sizes of each street
    s.forEach(el => el.classifyStreet());
    
}

// Calling the 'report functions'
reportParks(allParks);
reportStreets(allStreets);

/* ---------------------------------------------------------------------------------------------------- */