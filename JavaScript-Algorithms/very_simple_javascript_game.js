/* CODING CHALLENGE 1 */

/*
John and a friend invented a simple game where the player with the highest
value of his height (in centimeters) plus five times his age wins.

1. Create variables for the heights and ages of the two friends and assign
them some values;

2. Calculate their scores;

3. Decide who wins and print the winner to the console. Include the score
in the string that you output to the console. Don't forget that there can
be a draw (both players with the same score)

4. EXTRA: Add a thir player and now decide who wins. Hint: you will need the &&
operator to take the decision
*/

// Defining the heights of both friends
var johnHeight = 173;
var michaelHeight = 173;
var arthurHeight = 173;

// Defining the ages of both friends
var johnAge = 26;
var michaelAge = 26;
var arthurAge = 26;

// Multiplying the ages of both friends by 5
var johnAgeTimesFive = johnAge *= 5;
var michaelAgeTimesFive = michaelAge *= 5;
var arthurAgeTimesFive = arthurAge *= 5;

// Getting the scores of both friends
var johnScore = johnHeight + johnAgeTimesFive;
var michaelScore = michaelHeight + michaelAgeTimesFive;
var arthurScore = arthurHeight + arthurAgeTimesFive;

// Printing the results to the console
if(johnScore > michaelScore && johnScore > arthurHeight) {
		console.log('John is the winner with a total of ' + johnScore + ' points!');
} else if(michaelScore > johnScore && michaelScore > arthurScore) {
		console.log('Michael is the winner with a total of ' + michaelScore + ' points!');
} else if(arthurScore > johnScore && arthurScore > michaelScore) {
		console.log('Arthur is the winner with a total of ' + arthurScore + ' points!');
} else {
		var score = johnScore = michaelScore = arthurScore;
		console.log('There\'s a draw! The score of the three friends/players it\'s ' + score + '!');
}