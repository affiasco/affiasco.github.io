const moles = document.querySelectorAll(".mole");
const mole = document.querySelector(".mole");

let isHungry = true;
let nextTime = Date.now();

function next() {
  if (Date.now() > nextTime) {
    mole.src = isHungry
      ? "./static/mole-game/mole-sad.png"
      : "./static/mole-game/mole-hungry.png";
    isHungry = !isHungry;
    nextTime = Date.now() + 1000;
  }
  requestAnimationFrame(next);
}
next();

// function rafCounter() {
//   if (Date.now() > runAgainAt) {
//     rafCount++;
//     runAgainAt = Date.now() + 1000;
//   }
//   requestAnimationFrame(rafCounter);
// }
// requestAnimationFrame(rafCounter);
