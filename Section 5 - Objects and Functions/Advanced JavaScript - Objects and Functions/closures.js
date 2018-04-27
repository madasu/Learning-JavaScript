/* JAVASCRIPT CLOSURES */

/* CLOSURES SUMMARY */

/* An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned */

/* HOW CLOSURES WORK */

// The new function gets a new execution context, that is put on the top of the execution stack;
/* That execution context has an object (which stores the variables, the scope chain and the "this" variable; */
// The scope chain is like a "pointer" to all the variable objects that the function has access to;
// Even when the function returns and the execution context is gone, the variable object is still there;
/* We can access the variables that were created in the function long after the function has completed execution and after its execution context is gone; */
// The current execution context has "closed in" on the outer variable object, so that it can use it (hence the name "closure");
// The scope chain always stays "intact";
// To finish, the function returns and the context is popped off the stack, as usual.

// Example of using closures #1
function retirement(retirementAge) {
		var a = ' years left until retirement.';
		return function(yearOfBirth) {
				var age = 2018 - yearOfBirth;
				console.log((retirementAge - age) + a);
		}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1991);
retirementGermany(1975);
retirementIceland(1981);

/* Example of using cloures #2 (modifying the example function used in the "functions returning functions" section) */
function interviewQuestion(job) {
		return function(name) {
				if(job === 'programmer') {
						console.log(name + ', what programming languages do you know?');
				} else if(job === 'teacher') {
						console.log('What subject do you hate to teach, ' + name + '?');
				} else {
						console.log('Hello ' + name + ', what do you do?');
				}
		}
}

interviewQuestion('teacher')('James');