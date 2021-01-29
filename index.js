// get two random numbers from 1-6 for player 1 and player2
var random = Math.floor(Math.random() * 6) + 1;
var random1 = Math.floor(Math.random() * 6) + 1;

// change the images according to random numbers
document.querySelector(".img1").src = "images/dice" + random + ".png";
document.querySelector(".img2").setAttribute("src", "images/dice" + random1 + ".png");

// depending upon winner choose the message
if (random1 < random) {
  document.querySelector("h1").innerHTML = "Player 1 Win!";
} else if (random1 > random) {
  document.querySelector("h1").innerHTML = "Player 2 Win!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
