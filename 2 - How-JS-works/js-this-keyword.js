/*****************************/
/* JAVASCRIPT 'THIS' KEYWORD */
/*****************************/

// The 'this' keyword in the global execution context = window object (default object)
console.log(this);

// The 'this' keyword in a regular function call = window object (default object)
calculateAge(1997);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}

// The 'this' keyword in a method call = the object that called the method 
var paulo = {
    name: 'Paulo',
    yearOfBirth: 1997,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        // The 'this' keyword in a regular function call (even written inside a method) = window object
        function innerFunction() { 
            console.log(this);
        }
        innerFunction();
    }
};

paulo.calculateAge();

// 'Method borrowing' example (using a method from the 'paulo object' on the 'henrique object')
var henrique = {
    name: 'Henrique',
    yearOfBirth: 1980
};

henrique.calculateAge = paulo.calculateAge;
henrique.calculateAge();