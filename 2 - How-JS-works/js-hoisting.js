/***********************/
/* JAVASCRIPT HOISTING */
/***********************/

// FUNCTION HOISTING

// Example that explains the topic of 'hoisting' using a simple function (declaration)
calculateAge(1997);

// The 'calculateAge()' function is already avaliable when we enter the execution phase 
function calculateAge(year) { 
    console.log(2018 - year);
}

// Example that explains the topic of 'hoisting' using a simple function (expression) 
// retirement(1993);

// The 'retirement()' function is not avaliable when we enter the execution phase
var retirement = function(year) {
    console.log(65 - (2018 - year));
}

// VARIABLE HOISTING

// The variable is set to 'undefined' when we enter the execution phase 
console.log(age); 
var age = 25;

// The 'foo()' function has is own execution context 
function foo() {
    console.log(age);
    var age = 35;
    console.log(age);
}

foo();
console.log(age);