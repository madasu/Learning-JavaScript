/* JAVASCRIPT LOOPS AND ITERATION */

// For loop example
for(var i = 0; i < 10; i++) {
		console.log(i);
}

/* Explanation of the loop
0, true, print 0, update i to 1
1, true, print 1, update i to 2
2, true, print 2, update i to 3
3, true, print 3, update i to 4
4, true, print 4, update i to 5
5, true, print 5, update i to 6
6, true, print 6, update i to 7
7, true, print 7, update i to 8
8, true, print 8, update i to 9
9, true, print 9, update i to 10
10, false, the loop ends
*/

// More "practical" of using the for loop
var names = ['Paulo', 'Henrique', 'John', 'Michael', 'Bob'];

for(var i = 0; i < names.length; i++) {
		console.log(names[i]);
}

// The for loop above but printing on the inverse order
for(var i = names.length - 1; i >= 0; i--) {
		console.log(names[i]);
}

// While loop example
var i = 0;
while(i < names.length) {
		console.log(names[i]);
		i++;
}

// The statement "break" example
for(var i = 1; i <= 5; i++) {
		console.log(i);

		if(i === 3) {
			break;
		}
}

// The statement "continue" example
for(var i = 1; i <= 5; i++) {
		if(i === 3) {
			continue;
		}

		console.log(i);
}