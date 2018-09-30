/***********************************/
/* JAVASCRIPT OBJECT.CREATE METHOD */
/***********************************/

/* First an object is defined that will act as the prototype. 
Then a new object is created based on that very prototype. */

// The object that will act as the prototype
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

// The object that is created based on the prototype above
var paulo = Object.create(personProto);
paulo.name = 'Paulo';
paulo.yearOfBirth = 1997;
paulo.occupation = 'student';

// Creating another object based on the fact that the 'Object.create' method accepts another parameter
var henrique = Object.create(personProto,
{
  name: { value: 'Henrique' },
  yearOfBirth: { value: 1980 },
  occupation: { value: 'programmer'}
}); 