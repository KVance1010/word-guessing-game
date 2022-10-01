//Step 1:Create an array of string that the user can be able to
//2: create a variable for the timer, and one for the dwnbtn
//3: create a start button for the user, to start the timer
//4: create a random number generator that will be use to select the word from array
//5: slice method to break the word in an array
//6: use a .length to get the number of characters in the word
//7: get the user input loop over the array of letter looking for matches
//8: if there is a math display that letters
//9: display incorrect letter
//10: if the user guess the word or the count down its 0 display you win or you lose
//11: add wins or losses games of the user
//12: display wins and losses

var gameWord = [
	'software',
	'technique',
	'broadcast',
	'compiler',
	'scripting',
	'interpreter',
];
var timer = document.querySelector('#timer');
var wins = document.querySelector('#wins');
var losses = document.querySelector('#losses');
var reset = document.querySelector('#reset');
var start = document.querySelector('#start');
var userInput = document.querySelector('#userInput');
var randomWord = document.querySelector('#randomWord');
var secondsLeft = 10;
var chosenWord = '';
var wordElements;

start.addEventListener('click', startTimer);

function startTimer() {
	if (!chosenWord) {
		wordElements = getRandomNumber();
		chosenWord = gameWord[wordElements];
	}
	
    var brokenWord = chosenWord.split('');
	var wordLength = brokenWord.length;
	randomWord.textContent = '';
	for (var i = 0; i < wordLength; i++) {
		randomWord.textContent += '_ ';
	}

var timerInterval = setInterval(function () {
		secondsLeft--;
        timer.textContent = secondsLeft;
		// userInput.addEventListener("keydown", function(event) {
		//     console.log("keydown", event);
		// }
		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			// sendMessage();
		}
	}, 1000);
}

function getRandomNumber() {
	return Math.floor(Math.random() * (6 - 1));
}
