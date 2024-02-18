"use script";
const switchPlayer = function () {
  document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.querySelector(".left-part").classList.toggle("active-side");
  document.querySelector(".right-part").classList.toggle("active-side");
};
const settingVlues = function () {
  currentScore = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  score = [0, 0];
};
const removingDice = function () {
  document.querySelector(".dice-pic").classList.add("hidden");
};
const addingDice = function () {
  document.querySelector(".dice-pic").classList.remove("hidden");
};
const rollDice = document.querySelector("dice-pic");
const currentScore0 = document.querySelector(".current-score-0");
const currentScore1 = document.querySelector(".current-score-1");
const totalScore0 = document.querySelector(".total-score-0");
const totalScore1 = document.querySelector(".total-score-1");
const roll = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const newGame = document.querySelector(".new");
let currentScore = 0;
// hiding the dice
removingDice();
let score = [0, 0];
let activePlayer = 0;
let playing = true;
//setting roll dice button
roll.addEventListener("click", function () {
  if (playing) {
    const diceGenerator = Math.trunc(Math.random() * 6) + 1;
    // document.querySelector(".dice-pic").classList.remove("hidden");
    addingDice();
    document.querySelector(".dice-pic").src = `dice-${diceGenerator}.png`;
    if (diceGenerator !== 1) {
      currentScore += diceGenerator;
      document.querySelector(`.current-score-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
//holdinf the current score
hold.addEventListener("click", function () {
  if (playing) {
    // add currrent score to active player
    score[activePlayer] += currentScore;
    document.querySelector(`.total-score-${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 50) {
      // finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active-side");
      removingDice();
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener("click", function () {
  playing = true;
  settingVlues();
  removingDice();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("active-side");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("active-side");
});
