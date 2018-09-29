/************************/
/* JAVASCRIPT FUNCTIONS */
/************************/

// Example of a function #1 
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var agePaulo = calculateAge(1997); // Saving the returned result on a variable
var ageHenrique = calculateAge(1993); // Saving the returned result on a variable
var ageMike = calculateAge(1990); // Saving the returned result on a variable
console.log(agePaulo, ageHenrique, ageMike);

// Example of a function #2 
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year); // Calling the function above this one 
    var retirement = 65 - age;

    if(retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years.');  
    } else {
      console.log(firstName + ' is already retired.');
    }

}

yearsUntilRetirement(1989, 'James'); // Functions don't need to return a value
yearsUntilRetirement(1975, 'Michael'); // Functions don't need to return a value
yearsUntilRetirement(1950, 'John'); // Functions don't need to return a value