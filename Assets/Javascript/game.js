// As stated in the variable, this is the array from which the computer selects its choice.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables to be changed following user interaction with game.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];
// Audio to play after win or loss
var laugh = new Audio("./Assets/images/jokerlaugh.mp3")
var senate = new Audio("./Assets/images/iamthesenate.mp3")

//Process for the computer choosing its letter.
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}


//Start of the game beginning with user input
document.onkeypress = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]);
// Procedure "if" the user wins 
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	senate.play();
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}
// Procedure "if" the user loses
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}
// Procedure "if" the user loses
else {
	losses++;
	laugh.play();
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}
// Changing the html on the page based on win or loss
var html = 
	"<p>Guess what letter I'm thinking of!</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses left: " + guessesLeft + "</p>" +
	"<p>Your guesses so far: " + lettersGuessed + "</p>";
 
document.querySelector("#pyschicGame").innerHTML = html;

}