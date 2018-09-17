/**************************/
/* ES6 - CODING CHALLENGE */
/**************************/

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

// CREATING THE TOWN ELEMENT CLASS
class TownElement {

    // Element function constructor
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

}

/* ---------------------------------------------------------------------------------------------------- */

// CREATING THE PARK SUBCLASS
class Park extends TownElement {

    // Park subclass function constructor
    constructor(name, buildYear, parkArea, numberOfTrees) {

        // Call the superclass 
        super(name, buildYear);

        // Setting the properties of the subclass 
        this.parkArea = parkArea;
        this.numberOfTrees = numberOfTrees;

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
        return parkAge;
    }

}

/* ---------------------------------------------------------------------------------------------------- */

// Creating the first park ('Green Park')
greenPark = new Park('Green Park', 1980, 15, 15131);
greenPark.calcTreeDensity();
greenPark.calcParkAge();

// Creating the second park ('National Park')
nationalPark = new Park('National Park', 1990, 5, 6657);
nationalPark.calcTreeDensity();
nationalPark.calcParkAge();

// Creating the third park ('Oak Park')
oakPark = new Park('Oak Park', 2003, 6, 3150);
oakPark.calcTreeDensity();
oakPark.calcParkAge();