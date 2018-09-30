/**************/
/* ES6 - MAPS */
/**************/

/* JavaScript objects can be used as 'hash maps', which means that string keys are mapped to arbitrary values. In ES6, objects are not needed for this tasks, as a new 'key-value' data structure exists (maps). In 'maps', anything can be used as keys (in objects only strings can be used) */

// Creating an example map
const question = new Map();

// Adding data to the method (a question in this case)
question.set('question', 'What is the official name of the JS version discussed in this section?');

// Adding data to the method (the answers in this case)
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);

// Adding the result (what happens if the answer is correct or wrong)
question.set(true, 'Correct answer! :D');
question.set(false, 'Wrong answer, please try again! :)');  

// Retrieving data from the map
console.log(question.get('question'));
// console.log(question.size);

// Checking if the map has a given key and deleting it if the key is there
if(question.has(4)) { 
    // question.delete(4); 
    // console.log('Answer 4 is here!');   
}

// Deleting all the keys at the same time (using the 'clear' method)
// question.clear();

// Maps are iterable (a loop can be used through them) - using 'forEach'
// question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

// Maps are iterable (a loop can be used through them) - using 'for... of...'
// for (let [key, value] of question.entries()) {
//     console.log(`This is ${key}, and it's set to ${value}`);
// }

// Printing to the screen only the answers (using the data type 'number' to our 'advantage')
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// Using the 'prompt' function to write the answer 
const ans = parseInt(prompt('Write the correct answer!'));

// Checking if the answer is correct
console.log(question.get(ans === question.get('correct')));