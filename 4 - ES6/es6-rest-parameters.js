/*************************/
/* ES6 - REST PARAMETERS */
/*************************/

// Rest parameters allow us to pass an arbitrary number of arguments into a function and use them

/* ES5 - PRACTICAL EXAMPLE OF USING REST PARAMETERS (CREATE A FUNCTION THAT RECEIVES AN ARBITRARY NUMBER
OF YEARS AN THEN PRINTS TO THE CONSOLE WHETHER THE PERSON CORRESPONDING TO THESE YEARS IF OF 'FULL AGE' */
function isFullAge5() {
    
    // Priting to the arguments to the console
    // console.log(arguments);

    // Creating an array with the arguments 
    var argsArr = Array.prototype.slice.call(arguments);
    
    // Checking if there are persons of 'full age' in the array created
    argsArr.forEach(function(cur) {
        console.log((2018) - cur >= 18);
    });

}

// Calling the 'isFullAge5' function (example #1)
// isFullAge5(1997, 2005, 1965);
// isFullAge5(1997, 2005, 1965, 2003, 1970);

/* ES6 - PRACTICAL EXAMPLE OF USING REST PARAMETERS (CREATE A FUNCTION THAT RECEIVES AN ARBITRARY NUMBER
OF YEARS AN THEN PRINTS TO THE CONSOLE WHETHER THE PERSON CORRESPONDING TO THESE YEARS IF OF 'FULL AGE' */
function isFullAge6(...years) {
    years.forEach(cur => console.log((2018 - cur) >= 18));
}

// Calling the 'isFullAge6' function (example #1)
// isFullAge6(1997, 2005, 1965, 2003, 1970);

// EXAMPLE OF MAKING THE 'RESTS PARAMETERS' EVEN MORE USEFUL

// STILL USING THE ES5 EXAMPLE
function isFullAge5(limit) {

    // Creating an array with the arguments
    var argsArr = Array.prototype.slice.call(arguments, 1);

    // Checking if there are persons of 'full age' in the array created and priting the result
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    });
}

// Calling the 'isFullAge5' function (example #2)
// isFullAge5(21, 1997, 2005, 1965);

// USING THE ES6 EXAMPLE
function isFullAge6(limit, ...years) {
    // Checking if there are persons of 'full age' in the array created and priting the result
    years.forEach(cur => console.log((2018 - cur) >= limit));
}

// Calling the 'isFullAge6' function (example #2)
// isFullAge6(21, 1997, 2005, 1965, 2003, 1970);