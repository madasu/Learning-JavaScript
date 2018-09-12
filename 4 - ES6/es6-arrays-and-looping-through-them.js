/*****************************************/
/* ES6 - ARRAYS AND LOOPING THROUGH THEM */
/*****************************************/

// Selecting all the boxes from the section's page 
const boxes = document.querySelectorAll('.box');

// ES5 - Transforming the boxes 'NodeList' into an array 
var boxesArr5 = Array.prototype.slice.call(boxes);

/* Using array methods on the new created array (changing the background color of the boxed to 'dodgerblue') */
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6 - Transforming the boxes 'NodeList' into an array
const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5 - Using a 'for' loop to change the text of the boxes that were turned blue
for (var i = 0; i < boxesArr5.length; i++) {
    
    // Condition that looks for the box with the classes 'box' and 'blue' on it
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    // Change the text of the remaining boxes
    boxesArr5[i].textContent = 'I changed to blue';

}

// ES6 - Using a 'for of' loop to change the text of the boxes that were turned blue
const boxesArr6ForOf = Array.from(boxes);

for (const cur of boxesArr6ForOf) {
    // Condition that looks for the box with the classes 'box' and 'blue' on it
    if (cur.className.includes('blue')) {
        continue;
    }
    // Change the text of the remaining boxes
    cur.textContent = 'I changed to blue';
}

// ES5 - Finding out a specific element (in this example finding out which person is of 'full age') 
var ages = [11, 15, 17, 9, 21, 7];

var fullAge = ages.map(function(cur) {
    return cur >= 18;
});
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6 - 2 new useful methods that allow to find elements in an array
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));