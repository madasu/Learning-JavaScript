/***********************/
/* JAVASCRIPT CLOSURES */
/***********************/

/* Example of a function that calculates how many years a person has left until 
retirement (explaining closures) */
function retirement(retirementAge) {
    return function(yearOfBirth) {
        var a = ' years left until retirement.';
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

// Calling the 'generic' function and creating a 'specific' one - Way of doing it #1 
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementUS(1980);
retirementGermany(1980);
retirementIceland(1980);

// Calling the 'generic' function and creating a 'specific' one - Way of doing it #2
// retirement(66)(1980);
// retirement(65)(1980);
// retirement(67)(1980);

/* Rewriting the interviewQuestion() function from the 'functions returning functions' 
topic now using closures */
function interviewQuestion(job) {
    return function(name) {
        if(job === 'programmer') {
            console.log(name + ', what is your area of action? Front-end or back-end?');
        } else if(job === 'teacher') {
            console.log('What subject do you like teaching the most, ' + name + '? If you teach more than one, of course.');
        } else {
            console.log('Hello ' + name + ', what do you do for living?');
        }
    }
}

interviewQuestion('programmer')('Henrique');
interviewQuestion('teacher')('Mike');
interviewQuestion('chef')('James');