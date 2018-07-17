/***********************/
/* OBJECTS AND METHODS */
/***********************/

// Using the same object from the introductory lecture (now with a function/method)
var paulo = {
    firstName: 'Paulo',
    lastName: 'Cunha',
    birthYear: 1997, 
    hobbies: ['programming', 'walking', 'exercise'], 
    occupation: 'student',
    likesCoding: true,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    } 
};

paulo.calcAge();
console.log(paulo);