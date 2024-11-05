const homeScoreEl = document.getElementById("home-score-el");
const awayScoreEl = document.getElementById("away-score-el");

let homeCount = 0;
let awayCount = 0;

function homeAdd1() {
  homeScoreEl.textContent = homeCount += 1;
}

function homeAdd2() {
  homeScoreEl.textContent = homeCount += 2;
}

function homeAdd3() {
  homeScoreEl.textContent = homeCount += 3;
}

function awayAdd1() {
  awayScoreEl.textContent = awayCount += 1;
}

function awayAdd2() {
  awayScoreEl.textContent = awayCount += 2;
}

function awayAdd3() {
  awayScoreEl.textContent = awayCount += 3;
}
