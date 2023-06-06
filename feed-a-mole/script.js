const moles = document.querySelectorAll(".mole");
const mole = document.querySelector(".mole");
const body = document.querySelector("body");

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
    increaseWorm();
  }

  setTimeout(
    () => (body.style.cursor = "url(./static/mole-game/cursor.png), auto"),
    1000
  );
}

function increaseWorm() {
  const worm = document.querySelector(".worm");
  worm.style.maxWidth = `${runningScore}0%`;
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
