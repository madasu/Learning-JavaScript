/***********************************************/
/* FUNCTIONS RETURNING FUNCTIONS IN JAVASCRIPT */
/***********************************************/

// Example function that returns another functions based on the job passed as an argument
function interviewQuestion(job) {
    if(job === 'programmer') {
        return function(name) {
            console.log(name + ', what is your area of action? Front-end or back-end?');
        };
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you like teaching the most, ' + name + '? If you teach more than one, of course.');
        };
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do for living?');
        };
    }
}

// Creating 'specific' functions based on the 'job' passed to the 'generic' function above 
var programmerQuestion = interviewQuestion('programmer');
var teacherQuestion = interviewQuestion('teacher');

// Using the functions created above 
programmerQuestion('Henrique');
teacherQuestion('Mike');
teacherQuestion('John');
teacherQuestion('James');

// Calling both functions on the same line (there's no need to store the function on a variable)
interviewQuestion('programmer')('Peter');