/* FIRST CLASS FUNCTIONS */

// A function is an instance of the Object type;
// A function behaves like any other object;
// We can store functions in a variable;
// We can pass a function as an argument to another function;
// We can return a function from a function.

/* FUNCTIONS RETURNING FUNCTIONS */

// Example of a function that returns functions
function interviewQuestion(job) {
		if(job === 'programmer') {
				return function(name) {
						console.log(name + ', what are the programming languages that you know?');
				}
		} else if(job === 'teacher') {
				return function(name) {
						console.log('What subject do you hate teaching, ' + name + '?');
				}
		} else {
				return function(name) {
						console.log('Hello ' + name + ', are you a student?');
				}
		}
}

// Example of calling the general function and then the function that is returned #1
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('James');

// Example of calling the general function and then the function that is returned #2
var programmerQuestion = interviewQuestion('programmer');
programmerQuestion('John');
programmerQuestion('Peter');
programmerQuestion('Michael');

// Examples of calling the general function and then the function that is returned on the same line
interviewQuestion('teacher')('Bob');
interviewQuestion('student')('Paulo');