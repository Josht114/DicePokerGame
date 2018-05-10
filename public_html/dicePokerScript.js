var playerDice1 = 0;
var playerDice2 = 0;
var playerDice3 = 0;
var playerDice4 = 0;
var playerDice5 = 0;

var centerDice1 = 0;
var centerDice2 = 0;

var OpponentDice1 = 0;
var OpponentDice2 = 0;
var OpponentDice3 = 0;
var OpponentDice4 = 0;
var OpponentDice5 = 0;

var playerHand = [
  playerDice1,
  playerDice2,
  playerDice3,
  playerDice4,
  playerDice5
];

function updateDiceUI() {
  document.getElementById("playerHand1").innerHTML = playerDice1;
  document.getElementById("playerHand2").innerHTML = playerDice2;
  document.getElementById("playerHand3").innerHTML = playerDice3;
  document.getElementById("playerHand4").innerHTML = playerDice4;
  document.getElementById("playerHand5").innerHTML = playerDice5;
}

function updateCenterDiceUI() {
  document.getElementById("centerHand1").innerHTML = centerDice1;
  document.getElementById("centerHand2").innerHTML = centerDice2;
}

function updateOpponentDiceUI() {
  document.getElementById("opponentHand1").innerHTML = OpponentDice1;
  document.getElementById("opponentHand2").innerHTML = OpponentDice2;
  document.getElementById("opponentHand3").innerHTML = OpponentDice3;
  document.getElementById("opponentHand4").innerHTML = OpponentDice4;
  document.getElementById("opponentHand5").innerHTML = OpponentDice5;
}


function updateAllDie()
{
  updateDiceUI();
  updateCenterDiceUI();
  updateOpponentDiceUI();
}

function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

function rollAllDice() {
  playerDice1 = diceRoll();
  playerDice2 = diceRoll();
  playerDice3 = diceRoll();
  playerDice4 = diceRoll();
  playerDice5 = diceRoll();
  updateDiceUI();
}

function rollDie(dice) {
  switch (dice) {
    case 1:
      playerDice1 = diceRoll();
      break;
    case 2:
      playerDice2 = diceRoll();
      break;
    case 3:
      playerDice3 = diceRoll();
      break;
    case 4:
      playerDice4 = diceRoll();
      break;
    case 5:
      playerDice5 = diceRoll();
      break;
  }

  updateDiceUI();
}

function rollAllDiceLoop() {
  var i;
  for (i = 0; i < playerHand.length; i++) {
    playerHand[i] = diceRoll();
    console.log(playerHand);
    console.log(playerDice1);
    console.log(playerDice2);
    console.log(playerDice3);
    console.log(playerDice4);
    console.log(playerDice5);
  }
  updateDiceUI();
  console.log("update");
}
