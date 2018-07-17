/*************************************/
/* JAVASCRIPT OBJECTS AND PROPERTIES */
/*************************************/

// Initializing an object (first way) - Object literal 
var paulo = {
    firstName: 'Paulo',
    lastName: 'Cunha',
    birthYear: 1997,
    hobbies: ['Programming', 'walking', 'exercise'], 
    occupation: 'student', 
    likesCoding: true
};

// Accessing the object properties 
console.log(paulo.firstName); // 1st way of doing it 
console.log(paulo['lastName']); // 2nd way of doing it

var x = 'birthYear'; // Saving the property on a variable 
console.log(paulo[x]); // 3rd way of doing it 

// Mutating the object's properties 
paulo.occupation = 'programmer';
paulo['firstName'] = 'Henrique';
console.log(paulo);

// Initializing an object (second way) - new Object syntax
var henrique = new Object();
henrique.firstName = 'Henrique';
henrique.birthYear = 1995;
henrique['lastName'] = 'Costa';
console.log(henrique);