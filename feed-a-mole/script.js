const container = document.querySelector(".container");
const moleHoles = document.querySelector(".mole-holes");
const mole = document.querySelector(".mole");
const body = document.querySelector("body");
const worm = document.querySelector(".worm");

let king = true;
let runningScore = 0;

function changeWorm() {
  document.addEventListener("click", (event) =>
    updateScore(event)
  );
}

function updateScore(event) {
  const classList = event.target.classList;
  clicked = event.type;

  console.log(classList, clicked)
  if (classList[0] === "mole" && classList[1] === "king") {
    body.style.cursor = "url(./static/mole-game/cursor-worm.png), auto";
    runningScore += 2;
    worm.style.maxWidth = `${runningScore}0%`;
  } else if (classList[0] === "mole") {
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
  if (runningScore >= 10) {
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
  } else {
    arrHoles.push(randomNum);
  }

  randomMole.classList.remove("hidden");
  
  if (!king) {
    randomMole.src = "./static/mole-game/king-mole-hungry.png"
    randomMole.classList.add("king");
    setInterval(() => randomMole.src = "./static/mole-game/king-mole-sad.png", 1500)
    setInterval(() => randomMole.src = "./static/mole-game/king-mole-leaving.png", 2000)
    king = true;
  } else {
    setInterval(() => randomMole.src = "./static/mole-game/mole-sad.png", 1500)
    setTimeout(() => randomMole.src = "./static/mole-game/mole-leaving.png", 2000)
  }

  setInterval(() => randomMole.classList.add("hidden"), 2500)
  setInterval(() => (arrHoles = []), 20000);
  setInterval(() => king = false, 12000)
}


function showButt(randomMole){
  randomMole.src = "./static/mole-game/mole-sad"
}

setInterval(showAndHideMole, 3000);
changeWorm();