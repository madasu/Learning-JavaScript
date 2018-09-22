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
* 2. Average age of each town's park (formula: sum of all ages/number of parks)
* 3. The name of the park that has more than 1000 trees
* 4. Total and average length of the town's streets 
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
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

/* ---------------------------------------------------------------------------------------------------- */

// CREATE THE SUBLCASS 'STREET' 
class Street extends Element {

    // Constructor of the subclass 'Street'
    constructor(name, buildYear, length, size) {
        
    }

}