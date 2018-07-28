/************************************************/
/* PASSING FUNCTIONS AS ARGUMENTS IN JAVASCRIPT */
/************************************************/

// Example of an array containing years 
var years = [1997, 1990, 2008, 1980, 1995];

/* The 'Calculation function' that will do the calculations based on another function that will be passed to it */
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// Creating the first 'callback' function 
function calcAge(el) {
    return 2018 - el;
} 

// Creating the second 'callback' function 
function isFullAge(el) {
    return el >= 18;
}

// Creating the third 'callback' function 
function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return - 1;
    }
}

// Calling the 'arrayCalc()' function 
var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRates);