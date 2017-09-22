var player1Button = document.querySelector("#player1");
var player2Button = document.querySelector("#player2");
var player1Display = document.querySelector("#player1Display");
var player2Display = document.querySelector("#player2Display");
var player1Display2 = document.querySelector("#player1Display2");
var player2Display2 = document.querySelector("#player2Display2");
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5;

player1Button.addEventListener("click", function(){
  if(!gameOver){
    player1Score++;
    if(player1Score === winningScore){
        player1Display.classList.add("winner");
        player1Display2.classList.add("winner");
        gameOver = true;
      }
      player1Display.textContent = player1Score;
  }
});

player2Button.addEventListener("click", function(){
  if(!gameOver){
    player2Score++;
    if(player2Score === winningScore){
        player2Display.classList.add("winner");
        player2Display2.classList.add("winner");
        gameOver = true;
      }
      player2Display.textContent = player2Score;
  }
});