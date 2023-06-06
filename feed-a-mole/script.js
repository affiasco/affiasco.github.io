const container = document.querySelector(".container");
const moleHoles = document.querySelector(".mole-holes");
const mole = document.querySelector(".mole");
const body = document.querySelector("body");
const worm = document.querySelector(".worm");

let runningScore = 0;

function changeWorm() {
  document.addEventListener("click", (event) =>
    cursorWormUpdateScore(event.target.classList[0])
  );
}

function cursorWormUpdateScore(classList) {
  if (classList === "mole") {
    body.style.cursor = "url(./static/mole-game/cursor-worm.png), auto";
    runningScore += 1;
    worm.style.maxWidth = `${runningScore}0%`;
  }

  setTimeout(
    () => (body.style.cursor = "url(./static/mole-game/cursor.png), auto"),
    1000
  );
  showWinner(runningScore);
}

function showWinner(runningScore) {
  if (runningScore === 10) {
    const winImg = document.createElement("img");
    winImg.src = "./static/mole-game/win.png";
    winImg.classList.add("winner");
    body.replaceChild(winImg, container);
  }
}

const getRandomNum = () => Math.floor(Math.random() * 11);
function showAndHideMole() {
  let arrHoles = [];
  let randomNum = getRandomNum();
  let hole = `#mole-${randomNum}`;
  let randomMole = document.querySelector(hole);

  if (arrHoles.includes(randomNum)) {
    randomNum = getRandomNum();
    hole = `#mole-${randomNum}`;
    randomMole.classList.remove("hidden");
    setInterval(() => randomMole.classList.add("hidden"), 2000);
  } else {
    arrHoles.push(randomNum);
    randomMole.classList.remove("hidden");
    setInterval(() => randomMole.classList.add("hidden"), 2000);
  }

  setInterval(() => (arrHoles = []), 20000);
}

setInterval(showAndHideMole, 3000);
changeWorm();
