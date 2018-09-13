/*****************************************/
/* ES6 - ARRAYS AND LOOPING THROUGH THEM */
/*****************************************/

// Selecting all the boxes from the section's page 
const boxes = document.querySelectorAll('.box');

// ES5 - TRANSFORMING THE BOXES 'NODELIST' INTO AN ARRAY
var boxesArr5 = Array.prototype.slice.call(boxes);

/* Using array methods on the new created array (changing the background color of the boxed to 'dodgerblue') */
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6 - TRANSFORMING THE BOXES 'NODELIST' INTO AN ARRAY
const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

/* ES5 - USING A 'FOR' LOOP TO CHANGE THE TEXT OF THE BOXES THAT WERE TURNED BLUE */
for (var i = 0; i < boxesArr5.length; i++) {
    
    // Condition that looks for the box with the classes 'box' and 'blue' on it
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    // Change the text of the remaining boxes
    boxesArr5[i].textContent = 'I changed to blue';

}

/* ES6 - USING A 'FOR' LOOP TO CHANGE THE TEXT OF THE BOXES THAT WERE TURNED BLUE */
const boxesArr6ForOf = Array.from(boxes);

for (const cur of boxesArr6ForOf) {
    // Condition that looks for the box with the classes 'box' and 'blue' on it
    if (cur.className.includes('blue')) {
        continue;
    }
    // Change the text of the remaining boxes
    cur.textContent = 'I changed to blue';
}

/* ES5 - FINDING OUT A SPECIFIC ELEMENT (IN THIS EXAMPLE FINDING OUT WHICH PERSON IS OF FULL AGE) */
var ages = [11, 15, 17, 9, 21, 7];

var fullAge = ages.map(function(cur) {
    return cur >= 18;
});
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6 - 2 NEW USEFUL METHODS THAT ALLOW TO FIND ELEMENTS IN AN ARRAY
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));