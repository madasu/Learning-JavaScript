/* GAME IMPROVEMENTS/NEW RULES */

/*

1. A player looses his ENTIRE score when he gets a 6 two times in a row. After
that, it's the next player's turn;

2. Making able for the players to set the winning score at the user interface,
changing the predefined goal of 100 points;

3. Adding a new dice to the game, making the player loose his current score if
he gets a 1 at one of the dices.

/* CREATING THE VARIABLES FOR THE GAME */

/* Creating the variables that will hold the total scores, the scores per round,
the active player, the value of the last dice3 roll and the "state" variable that
will define if the game is being played or not */
var scores, roundScore, activePlayer, lastDice, gamePlaying;

// Initializing the game
init();

// addEventListener() method to make the dice roll
// Using an anonymous function on the Event Listener method
document.querySelector('.btn-roll').addEventListener('click', function() {

	// Checking if the game is being played or has already ended
	if(gamePlaying) {
		// Creating two random numbers
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		// Displaying the results
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		// Update the round score if the player doesn't get a 1 in one of the rolled dices
		if(dice1 !== 1 && dice2 !== 1) {
				// Add score
				roundScore += dice1 + dice2;
				document.querySelector('#current-' + activePlayer).textContent = roundScore
		} else {
				// Next player's turn
				nextPlayer();
		}

		/* Condition that checks if the player gets two 6 in a row and makes he
		loses all of his score if so */
		/* if(dice === 6 && lastDice === 6) {
				// Making the player loose his entire score
				scores[activePlayer] = 0;

				// Updating the user interface of the total score to 0
				document.querySelector('#score-' + activePlayer).textContent = '0';

				// Next player's turn
				nextPlayer();

				// Making the player loose hist
		} else if (dice !== 1) { // Update the round score if the rolled number was not 1
				// Add score
				roundScore += dice;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
				// Next player's turn
				nextPlayer();
		}

		// Declaring a variable that will hold the last dice number that a player got
		lastDice = dice; */
	}
});

// Creating the "hold" functionality
document.querySelector('.btn-hold').addEventListener('click', function() {

	// Checking if the game is being played or has already ended
	if(gamePlaying) {
		// Add the current score to the global score
		scores[activePlayer] += roundScore;

		// Update the user interface number
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// Getting the final score setting from the user
		var input = document.querySelector('.final-score').value;

		// Creating the winningScore variable
		var winningScore;

		/* The values "undefined", 0 or "" are coerced to false,
		anything else is coerced to true */
		// Checking if there's an input
		if(input) {
				winningScore = input;
		} else {
				winningScore = 100;
		}

		// Checking if the player won the game
		if(scores[activePlayer] >= winningScore) {
				// Changing the name of the player to the "winner" status
				document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

				// Hiding the dices
				hideDice();

				// Changing the user interface of the player who won the game
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

				// Removing the active player visualization of the winner
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

				// Setting the gamePlaying variable to false
				gamePlaying = false;

		} else {
				// Next player's turn
				nextPlayer();
		}
	}
});

// Creating a function to change the visualization of the active player
function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		// Changing the visualization of the active player (toggle method)
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// Hiding the dices
		hideDice();
}

// The Event Listener that will restart the game
document.querySelector('.btn-new').addEventListener('click', init);

// The game initialization function
function init() {
		// Setting the scores back to 0
		scores = [0, 0];

		// Setting the first player back to being 0 (the first one)
		activePlayer = 0;

		// Setting the round scores back to zero
		roundScore = 0;

		// Setting the gamePlaying variable to true
		gamePlaying = true;

		// Hiding the dices
		hideDice();

		// Setting the total scores to 0
		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';

		// Setting the current scores to 0
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		// Setting the name of the winner back to the original name
		document.getElementById('name-0').textContent = 'Player 1';
		document.getElementById('name-1').textContent = 'Player 2';

		// Removing the winner interface of the player who won the game
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');

		// Removing the active interface from the player who won the game
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');

		// Setting the active player interface to the first player
		document.querySelector('.player-0-panel').classList.add('active');
}

// Function to hide both dices
function hideDice() {
		// Hiding the dices
		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';
}