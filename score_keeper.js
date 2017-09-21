var player1Button = document.querySelector("#player1");
var player2Button = document.querySelector("#player2");
var player1Display = document.querySelector("#player1Display");
var player1Score = 0;

player1Button.addEventListener("click", function(){
	player1Score++;
	player1Display.textContent = player1Score;
});