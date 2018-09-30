/***********************/
/* CODING CHALLENGE #4 */
/***********************/

/* 

* Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods. 

* 1. For each of them, create an object with properties for their full name, mass and height;
* 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method;
* 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI. 

* Remember: BMI = mass / height^2 = mass / (height * height). Mass in kg and height in meters. 

*/

var Mark = {
    fullName: 'Mark Thomas',
    mass: 65,
    height: 1.79,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var John = {
    fullName: 'John Smith',
    mass: 67,
    height: 1.83,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if(Mark.calcBMI() > John.calcBMI()) {
    console.log(Mark.fullName + ' has a higher BMI than John\'s! Mark\'s BMI is ' + Mark.bmi + '.');
} else if(John.bmi > Mark.bmi) {
    console.log(John.fullName + ' has a higher BMI than Mark\'s! John\'s BMI is ' + John.bmi + '.');
} else {
    console.log(Mark.fullName + ' and ' + John.fullName + ' have the same BMI (' + Mark.bmi + ')!');
}