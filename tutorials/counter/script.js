const counter = document.querySelector(".counter");
const buttonContainer = document.querySelector(".button-container");
let runningCounter = 0;

buttonContainer.addEventListener("click", (e) =>
  adjustCounter(e.target.classList[1])
);

function adjustCounter(eventClass) {
  switch (eventClass) {
    case "decrease":
      runningCounter -= 1;
      break;
    case "reset":
      runningCounter = 0;
      break;
    case "increase":
      runningCounter += 1;
      break;
  }
  updateCounter();
}

function updateCounter() {
  if (runningCounter === 0) {
    counter.style.color = "black";
  } else if (runningCounter > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "red";
  }
  counter.innerText = runningCounter;
}
