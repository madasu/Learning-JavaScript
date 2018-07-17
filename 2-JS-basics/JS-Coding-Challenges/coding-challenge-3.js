/***********************/
/* CODING CHALLENGE #3 */
/***********************/

/*
 
* John and his family went on a holiday and have been to 3 different restaurants. The bills were $124, $48 and $268.

* To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

* In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

*/

/*******************/
/* HOW I SOLVED IT */
/*******************/

// Declaring the tips array 
var tips = [];

// Function that calculates the tips 
function calculateTip(bill) {

    if(bill < 50) {
        tips.push(bill * 0.2);
    } else if(bill >= 50 && bill <= 200) {
        tips.push(bill * 0.15);
    } else {
        tips.push(bill * 0.1);
    }

    return tips;

}

// Calculating the tips based of each of the three bills 
calculateTip(124);
calculateTip(48);
calculateTip(268);

// Checking the array containing the tips
console.log(tips); 

// Checking the array containing the final paid amounts (bill + tip)
var paidAmounts = [124 + tips[0], 48 + tips[1], 268 + tips[2]];
console.log(paidAmounts);


/********************************/
/* HOW THE INSTRUCTOR SOLVED IT */
/********************************/

// Function that calculates the tips 
function tipCalculator(bill) {
    var percentage;
    if(bill < 50) {
        percentage = .2;
    } else if(bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return bill * percentage;
}

// Creating the array of bills 
var bills = [124, 48, 268];

// Calculting the tips for each bill present at the array 
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

// Creating the array contained final paid amounts 
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);