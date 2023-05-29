let runningTotal = 0;

function init() {
  document
    .querySelector(".calc-container")
    .addEventListener("click", function (event) {
      clickButton(event);
    });
}

function clickButton(value) {
  console.log(value);
}

init();
