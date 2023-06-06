const moles = document.querySelectorAll(".mole");
const mole = document.querySelector(".mole");
const body = document.querySelector("body");

function changeWorm() {
  document.addEventListener("click", (event) =>
    cursorWorm(event.target.classList[0])
  );
}

function cursorWorm(classList) {
  if (classList === "mole") {
    body.style.cursor = "url(./static/mole-game/cursor-worm.png), auto";
  }

  setTimeout(
    () => (body.style.cursor = "url(./static/mole-game/cursor.png), auto"),
    1000
  );
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
