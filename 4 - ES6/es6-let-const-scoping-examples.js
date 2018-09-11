/* ***************************************** */
/* ES6 - USING LET & CONST (SCOPING EXAMPLE) */
/* ***************************************** */

// ES5 version
function driversLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName); // The value of 'firstName' is set to undefined
        var firstName = 'Paulo';
        var yearOfBirth = 1997;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6 version 
function driversLicence6(passedTest) {
    
    // console.log(firstName); - The value of 'firstName' is said to be not defined
    let firstName;
    const yearOfBirth = 1997;

    if (passedTest) {   
        firstName = 'Paulo';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);

// More practical example of ES6's syntax
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);