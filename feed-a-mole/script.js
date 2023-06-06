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

// Used for Timing //
// let isHungry = true;
// let nextTime = Date.now();

// function next() {
//   if (Date.now() > nextTime) {
//     mole.src = isHungry
//       ? "./static/mole-game/mole-sad.png"
//       : "./static/mole-game/mole-hungry.png";
//     isHungry = !isHungry;
//     nextTime = Date.now() + 1000;
//   }
//   requestAnimationFrame(next);
// }
// next();

changeWorm();
