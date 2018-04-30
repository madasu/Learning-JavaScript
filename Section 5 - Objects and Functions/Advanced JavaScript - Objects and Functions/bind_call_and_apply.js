/* BIND, CALL AND APPLY METHODS */

/* The main object used as an example of the bind, call and apply methods */
var paulo = {
		name: 'Paulo',
		age: 20,
		occupation: 'student',
		presentation: function(style, timeOfDay) {
				if(style === 'formal') {
						console.log('Good ' + timeOfDay + ' to everyone present. I\'m ' + this.name + '. I\'m a ' + this.occupation + ' and I\'m ' + this.age + ' years old.');
				} else if(style === 'friendly') {
						console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.occupation + ' and I\'m ' + this.age + ' years old. Have a good ' + timeOfDay + '!');
				}
		}
};

/* Secondary object used as an example of the bind, call and apply methods */
var john = {
		name: 'John',
		age: 25,
		occupation: 'programmer'
};

/* Example of using the bind method with the objects created */
var johnInformal = paulo.presentation.bind(john, 'formal');
johnInformal('afternoon');

var pauloFriendly = paulo.presentation.bind(paulo, 'friendly');
pauloFriendly('night');
pauloFriendly('morning');

/* Example of using the bind method with an example used at the "functions returning functions" theory
lecture */
var years = [1999, 1993, 1997, 1983, 2004];

function arrayCalc(arr, fn) {
		var arrRes = [];
		for (var i = 0; i < arr.length; i++) {
				arrRes.push(fn(arr[i]));
		}
		return arrRes;
}

function calculateAge(el) {
		return 2018 - el;
}

function isFullAge(limit, el) {
		return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

/* Example of using the call method with the objects created */
paulo.presentation('formal', 'morning');

paulo.presentation.call(john, 'friendly', 'afternoon');

/* Example of using the apply method with the objects created */
// paulo.presentation.apply(john, ['friendly', 'afternoon']);