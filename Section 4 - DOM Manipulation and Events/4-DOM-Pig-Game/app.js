/* GAME RULES */

/*

- The game has 2 players, playing in rounds;

- In each turn, a player rolls a dice as many times as he wishes. Each result
get add to his ROUND score;

- BUT, if the player rolls a 1, all of his ROUND score gets lost. After that,
it's the next player's turn;

- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score.
After that, it's the next player' turn;

- The first player to reach 100 points on his GLOBAL score wins the game.

*/

/* Creating the variables that will hold the total scores, the scores per round,
the active player, the value of the last dice roll and the "state" variable that
will define if the game is being played or not */
var scores, roundScore, activePlayer, gamePlaying;

// Initializing the game
init();

// Example of a callback function to be used at the Event Listener method bellow
// function btn() {
 			// Do something here
// }
// btn();

// addEventListener() method to make the dice roll
// Using an anonymous function on the Event Listener method
document.querySelector('.btn-roll').addEventListener('click', function() {

	// Checking if the game is being played or has already ended
	if(gamePlaying) {
		// 1. Creating a random number
		/* The variable dice is calculated using a random number multiplied by 6 and then added 1
		(to get a random number between 1 and 6) */
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. Displaying the result
		// The querySelector is called a getter in this case
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		// 3. Update the round score if the rolled number was not 1
		if(dice !== 1) {
				// Add score
				roundScore += dice;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
				// Next player's turn
				nextPlayer();
		}
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

		// Checking if the player won the game
		if(scores[activePlayer] >= 100) {
				// Changing the name of the player to the "winner" status
				document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

				// Hiding the dice after the game ends
				document.querySelector('.dice').style.display = 'none';

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

		// Changing the visualization of the active player (remove and add methods)
		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

		// Changing the visualization of the active player (toggle method)
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// Hiding the dice when the player gets a 1
		document.querySelector('.dice').style.display = 'none';
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

		// Using the querySelector to manipulate the DOM by setting the id #current- + the activePlayer variable
		// The querySelector is called a "setter" in this case
		// document.querySelector('#current-' + activePlayer).textContent = dice;

		// The same DOM manipulation using the innerHTML method (making it possible to use the <em> tag)
		// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

		// Example of using the querySelector to change the CSS of an element (using the style method)
		document.querySelector('.dice').style.display = 'none';

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