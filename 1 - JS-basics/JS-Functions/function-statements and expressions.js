/****************************************/
/* FUNCTIONS STATEMENTS AND EXPRESSIONS */
/****************************************/

// Example of a function declaration 
// function whatDoYouDo(occupation, firstname) {} 

// Example of a function expression 
var whatDoYouDo = function(occupation, firstName) {
    switch(occupation) { // There's no need to use the 'break' keyword because using 'return' finishes the function immediately
        case 'teacher':
        return firstName + ' teaches people how to code!';

        case 'driver':
        return firstName + ' drives a cab!';

        case 'programmer':
        return firstName + ' develops amazing websites!';

        default:
        return firstName + ' is probably a student.';
    }
}

console.log(whatDoYouDo('student', 'Paulo'));
console.log(whatDoYouDo('teacher', 'Mike'));
console.log(whatDoYouDo('programmer', 'James'));