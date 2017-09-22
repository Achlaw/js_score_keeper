var player1Button = document.querySelector("#player1");
var player2Button = document.querySelector("#player2");
var player1Display = document.querySelector("#player1Display");
var player2Display = document.querySelector("#player2Display");
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5;

player1Button.addEventListener("click", function(){
  if(!gameOver){
    player1Score++;
    if(player1Score === winningScore){
        gameOver = true;
      }
      player1Display.textContent = player1Score;
  }
});

player2Button.addEventListener("click", function(){
  player2Score++;
  player2Display.textContent = player2Score;
});