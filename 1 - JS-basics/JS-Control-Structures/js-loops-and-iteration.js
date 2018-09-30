/**********************************/
/* JAVASCRIPT LOOPS AND ITERATION */
/**********************************/

// Example of a 'for' loop #1
for(var i = 0; i < 10; i++) { 
    console.log(i);
}

// i = 0, 0 < 10 = true, log i to the console, i++
// i = 1, 1 < 10 = true, log i to the console, i++
// (...)
// i = 9, 9 < 10 = true, log i to the console, i++
// i = 10, i < 10 = false, exit

// Exemple of a 'for' loop #2 (using it to loop through an array)
var paulo = ['Paulo', 'Cunha', 1997, 'student', true, 'blue'];

for(var i = 0; i < paulo.length; i++) {
    console.log(paulo[i]);
}

// Example of an 'while' loop using the array above 
var i = 0;
while(i < paulo.length) {
    console.log(paulo[i]);
    i++;
}

// 'continue' and 'break' statements
var paulo = ['Paulo', 'Cunha', 1997, 'student', true, 'blue'];

// Example of using the 'continue' keyword
for(var i = 0; i < paulo.length; i++) {
    if(typeof paulo[i] !== 'string') continue;
    console.log(paulo[i]);
}

// Example of using the 'break' keyword
for(var i = 0; i < paulo.length; i++) {
    if(typeof paulo[i] !== 'string') break;
    console.log(paulo[i]);
}

// Looping through an array from the last element to the first (challenge) 
var paulo = ['Paulo', 'Cunha', 1997, 'student', true, 'blue'];

for(var i = paulo.length - 1; i >= 0; i--) {
    console.log(paulo[i]);
}