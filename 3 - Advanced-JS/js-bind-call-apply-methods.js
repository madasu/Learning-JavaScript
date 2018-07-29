/*******************************************/
/* JAVASCRIPT BIND, CALL AND APPLY METHODS */
/*******************************************/

// Example of an a simple object #1
var paulo = {
    name: 'Paulo',
    age: 21,
    occupation: 'student',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ' to everyone present! My name\'s ' + this.name + ', I\'m a ' + this.occupation + ' and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly') {
            console.log('Hey! What\'s up? My name\'s ' + this.name + '! I\'m a ' + this.occupation + ' and I\'m ' + this.age + '. Have a nice ' + timeOfDay + '!');
        }
    }
};

// Example of an a simple object #2 (that doesn't have the 'presentation' method)
var henrique = {
    name: 'Henrique',
    age: 25,
    occupation: 'programmer'
};

// Testing the presentation method from the first object
paulo.presentation('formal', 'morning');

/* Using the 'call' method to make the 'presentation' method able to be used by another object ('method 
borrowing') */
paulo.presentation.call(henrique, 'friendly', 'afternoon');

/* Using the 'apply' method to make the 'presentation' method able to be used by another object ('method 
borrowing'). The difference between the 'call' and 'apply' methods is that the 'apply' method accepts
the 'secondary arguments' (not the 'this' variable) as an array */
paulo.presentation.apply(henrique, ['formal', 'evening']);

/* Using the 'bind' method to make the 'presentation' method able to be used by another object ('method 
borrowing'). The difference between the 'call' and 'bind' methods is that the 'bind' doesn't immediately 
call the function, but instead generates a copy of the function, so that we can store it. It's useful to 
create a function with preset arguments */
// Using the 'carrying' technique
var pauloFormal = paulo.presentation.bind(paulo, 'formal');
pauloFormal('morning');
pauloFormal('afternoon');
pauloFormal('evening');

// Using the 'carrying' technique on the second object created (that doesn't have the presentation method)
var henriqueFriendly = paulo.presentation.bind(henrique, 'friendly');
henriqueFriendly('morning');
henriqueFriendly('afternoon');
henriqueFriendly('evening');

/* Another example of using the 'call', 'bind' and 'apply' methods (from the 'passing functions as 
arguments' topic) */

// Example of an array containing years 
var years = [1997, 1990, 2008, 1980, 2001];

/* The 'calculation function' that will do the calculations based on another function ~
that will be passed to it */
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


// Creating the first 'callback' function 
function calculateAge(el) {
    return 2018 - el;
}

// Creating a second 'callback' functio
function isFullAge(limit, el) {
    return el >= limit;
}

/* Calling the 'arrayCalc()' generic function with the 'specific' function 'calculateAge()' as a second argument */
var ages = arrayCalc(years, calculateAge);

/* Using the bind method to preset a limit on the 'isFullAge()' function and make possible to pass two 
arguments to the 'generic' function */
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);