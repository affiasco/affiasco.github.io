let score = 0;

function getSadInterval(){
  return Date.now() + 1000;
}

function getLeavingInterval(){
  return Date.now() + 1500;
}

function getGoneInterval(){
  return Date.now() + Math.floor(Math.random() * 18000) + 3000;
}

function getHungryInterval(){
  return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

function getKingStatus() {
  return Math.random() > .9;
}

const moles = [
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-0")
  }, 
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-1")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-2")
  }, 
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-3")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-4")
  }, 
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-5")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-6")
  }, 
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-7")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-8")
  }, 
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-9")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-10")
  }, 
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-11")
  },
]

function getNextStatus(mole){
  switch(mole.status) {
    case "sad":
    case "fed":
      mole.next = getLeavingInterval();
      mole.status = "leaving";
      mole.king 
        ? mole.node.children[0].src = "./static/mole-game/king-mole-leaving.png" 
        : mole.node.children[0].src = "./static/mole-game/mole-leaving.png"
      break;
    case "leaving":
      mole.next = getGoneInterval();
      mole.status = "gone"
      mole.node.children[0].classList.add("hidden");
      break;
    case "gone":
      mole.status = "hungry";
      mole.king = getKingStatus();
      mole.next = getHungryInterval();
      mole.node.children[0].classList.remove("hidden");
      mole.node.children[0].classList.add("hungry");
      mole.king 
        ? mole.node.children[0].src = "./static/mole-game/king-mole-hungry.png" 
        : mole.node.children[0].src = "./static/mole-game/mole-hungry.png"
      break;
    case "hungry":
      mole.status = "sad";
      mole.next = getSadInterval();
      mole.king 
        ? mole.node.children[0].src = "./static/mole-game/king-mole-sad.png" 
        : mole.node.children[0].src = "./static/mole-game/mole-sad.png"
      mole.node.children[0].classList.remove("hungry");
      break;
  }
}

function feed(event){
  if (event.target.tagName !== "IMG" || (!event.target.classList.contains("hungry"))) {
    return;
  }
  
  const mole = moles[parseInt(event.target.dataset.index)]
  mole.status = "fed";
  mole.next = getSadInterval();
  mole.king 
    ? mole.node.children[0].src = "./static/mole-game/king-mole-fed.png" 
    : mole.node.children[0].src = "./static/mole-game/mole-fed.png"
  mole.node.children[0].classList.remove("hungry")

  mole.king ? score+=2 : score++;
  if (score >= 10) win();

  document.querySelector(".worm-container").style.width = `${10 * score}%`
}

function win(){
  document.querySelector(".container").classList.add("hidden");
  document.querySelector(".winner").classList.remove("hidden")
}

let runAgainAt = Date.now() + 100;
function nextFrame () {
  const now = Date.now();

  if (runAgainAt <= now) {
    for (let i = 0; i < moles.length; i++){
      if (moles[i].next <= now) {
        getNextStatus(moles[i])
      }
    }
    runAgainAt = now + 100;
  }
  requestAnimationFrame(nextFrame);
}

document.querySelector(".container").addEventListener("click", feed)

nextFrame();