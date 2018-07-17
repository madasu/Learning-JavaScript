/***********************/
/* CODING CHALLENGE #2 */
/***********************/

/* 

* John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

* 1. Calculate the average score for each team 
* 2. Decide which teams wins in average (highest average score) and print the winner to the console. Also include the average score in the output.
* 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score) 
* 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the '&&' operator to take the decision. 
* 5. Like before, change the scores to generate different winners, keeping in mind there might be draws. 

*/

var teamJohnScore1, teamJohnScore2, teamJohnScore3, teamMikeScore1, teamMikeScore2, teamMikeScore3, teamMaryScore1, teamMaryScore2, teamMaryScore3;

teamJohnScore1 = 189;
teamJohnScore2 = 120;
teamJohnScore3 = 103;

teamMikeScore1 = 116;
teamMikeScore2 = 194;
teamMikeScore3 = 123;

teamMaryScore1 = 97;
teamMaryScore2 = 134;
teamMaryScore3 = 105;

var avgTeamJohn = (teamJohnScore1 + teamJohnScore2 + teamJohnScore3) / 3;
var avgTeamMike = (teamMikeScore1 + teamMikeScore2 + teamMikeScore3) / 3;
var avgTeamMary = (teamMaryScore1 + teamMaryScore2 + teamMaryScore3) / 3;
console.log(avgTeamJohn, avgTeamMike, avgTeamMary);

if(avgTeamJohn > avgTeamMike && avgTeamJohn > avgTeamMary) {
    console.log('John\'s team is the winner with an average of ' + avgTeamJohn + ' points.');
} else if(avgTeamMike > avgTeamJohn && avgTeamMike > avgTeamMary) {
    console.log('Mike\'s team is the winner with an average of ' + avgTeamMike + ' points.');
} else if(avgTeamMary > avgTeamJohn && avgTeamMary > avgTeamMike) {
    console.log('Mary\'s team is the winner with an average of ' + avgTeamMary + ' points.');
} else {
    console.log('There\'s a draw!');
}