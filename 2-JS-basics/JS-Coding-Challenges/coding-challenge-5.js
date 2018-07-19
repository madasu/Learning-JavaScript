/***********************/
/* CODING CHALLENGE #5 */
/***********************/

/*

* This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42. 

* John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

* Implement a tip calcultor using objects and loops: 

* 1. Create an object with an array for the John values;
* 2. Add a method to calculate the tip; 
* 3. This method should include a loop to iterate over all the paid bills and do the tip calculations;
* 4. As an output, create: 
    * 1) A new array containing all tips;
    * 2) An array containing final paid amounts (bill + tip). 
    * HINT: Start with two empty arrays as properties and then fill them up in the loop.

* EXTRA: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110 and $45.
* Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is more than $3000 (different than John). 

* 5. Implement the same functionality as before, this time using Mark's tipping rules;
* 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average);
* 7. Calculate the average tip for each family;
* 8. Log to the console which family paid the highest tips on average.

*/

/*********************************/
/* HOW I SOLVED THE CHALLENGE #5 */
/*********************************/

// Creating the billObj (containing the bills, tips and final paid values)
var johnCustomer = {
    fullName: 'John Smith',
    billValues: [124, 48, 268, 180, 42],
    tipValues: [],
    finalPaidValues: [],
    calcValues: function() {
        var tipValue, finalPaidValue;
        for(var i = 0; i < this.billValues.length; i++) {
            if(this.billValues[i] < 50) {
                tipValue = this.billValues[i] * 0.20;
                this.tipValues.push(tipValue);
                finalPaidValue = this.billValues[i] + tipValue;
                this.finalPaidValues.push(finalPaidValue);
            } else if(this.billValues[i] >= 50 && this.billValues[i] <= 200) {
                tipValue = this.billValues[i] * 0.15;
                this.tipValues.push(tipValue);
                finalPaidValue = this.billValues[i] + tipValue;
                this.finalPaidValues.push(finalPaidValue);
            } else {
                tipValue = this.billValues[i] * 0.10;
                this.tipValues.push(tipValue);
                finalPaidValue = this.billValues[i] + tipValue;
                this.finalPaidValues.push(finalPaidValue);
            }
        }
    }
};

// Calculating the tips and final paid values for Bill
johnCustomer.calcValues();
console.log(johnCustomer.tipValues, johnCustomer.finalPaidValues);


// Creating the markObj (containing the bills, tips and final paid values)
var markCustomer = {
    fullName: 'Mark Thomas',
    billValues: [77, 475, 110, 45],
    tipValues: [],
    finalPaidValues: [],
    calcValues: function() {
        var tipValue, finalPaidValue;
        for(var i = 0; i < this.billValues.length; i++) {
            if(this.billValues[i] < 100) {
                tipValue = this.billValues[i] * 0.20;
                this.tipValues.push(tipValue);
                finalPaidValue = this.billValues[i] + tipValue;
                this.finalPaidValues.push(finalPaidValue);
            } else if(this.billValues[i] >= 100 && this.billValues[i] <= 300) {
                tipValue = this.billValues[i] * 0.10;
                this.tipValues.push(tipValue);
                finalPaidValue = this.billValues[i] + tipValue;
                this.finalPaidValues.push(finalPaidValue);
            } else {
                tipValue = this.billValues[i] * 0.25;
                this.tipValues.push(tipValue);
                finalPaidValue = this.billValues[i] + tipValue;
                this.finalPaidValues.push(finalPaidValue);
            }
        }
    }
};

// Calculating the tips and final paid values for Mark
markCustomer.calcValues();
console.log(markCustomer.tipValues, markCustomer.finalPaidValues);

// Function that calculates the average of a given array of tips 
function calcTipAverage(tipValues) {
    var tipSum = 0, tipAvg; 

    for(var i = 0; i < tipValues.length; i++) {
        tipSum += tipValues[i];
        tipAvg = tipSum / tipValues.length;
        return tipAvg;
    }
    
}

// Calculating the average tip for John and Mark using the function above 
johnCustomer.averageTip = calcTipAverage(johnCustomer.tipValues);
markCustomer.averageTip = calcTipAverage(markCustomer.tipValues);

// Log to the console which man/family paid the highest tips on average 
if(johnCustomer.averageTip > markCustomer.averageTip) {
    console.log(johnCustumer.fullName + "'s family paid the highest tips on average ($" + johnCustomer.averageTip + ").");
} else if(markCustomer.averageTip > johnCustomer.averageTip) {
    console.log(markCustomer.fullName + "'s family paid the highest tips on average ($" + markCustomer.averageTip + ").");
} else {
    console.log('Both ' + johnCustomer.fullname + '\'s and ' + markCustomer.fullName + '\'s families have paid the same amount of tips on average(' + johnCustomer.averageTip + '$)');
}

/******************************************/
/* HOW THE INSTRUCTOR SOLVED CHALLENGE #5 */
/******************************************/

// Creating the John object
var john = {
    fullName: 'John Smith',
    bills: [124, 47, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            
            // Determine the percentages based on the tipping rules 
            var percentage;
            var bill = this.bills[i];

            if(bill < 50) {
                percentage = .2;
            } else if(bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            
        }
    }
};

// Creating the Mark object
var mark = {
    fullname: 'Mark Thomas',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {

            // Determine the percentages based on the tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 100) {
                percentage = .2; 
            } else if(bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;

        }
    }
};

// Function that calculates the average tip of a given array of tips 
function calcAverage(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

// Calculating the tips for John and Mark
john.calcTips();
mark.calcTips();

// Priting to the screen both John and Mark objects 
console.log(john, mark);

// Calculating the average tip for both John and Mark 
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average) {
    console.log(john.fullName + '\'s family paid higher tips, with an average of $' + john.average + '.');
} else if(mark.average > john.average) {
    console.log(mark.fullname + '\'s family paid higher tips, with an average of $' + mark.average + '.');
}