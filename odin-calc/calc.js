const screen = document.querySelector(".screen");
const calcContainer = document.querySelector(".calc-container");
let display = "0";
let runningTotal = 0;
let mathOperator;

calcContainer.addEventListener("click", (event) =>
  buttonClick(event.target.innerText)
);

function buttonClick(value) {
  !isNaN(parseInt(value)) ? manageNumbers(value) : manageSymbols(value);
  screen.innerText = display;
}

function manageNumbers(strNum) {
  display === "0" ? (display = strNum) : (display += strNum);
}

function manageSymbols(symbol) {
  switch (symbol) {
    case "CLEAR":
      display = "0";
      runningTotal = 0;
      break;
    case "+":
    case "-":
    case "÷":
    case "×":
    case ".":
      doMath(symbol);
      break;
    case "=":
      if (mathOperator === null) return;
      operate(parseInt(display));
      previousOperator = null;
      display = +runningTotal;
      runningTotal = 0;
      break;
    case "DEL":
      if (display === "0") return;
      display =
        display.length > 1 ? display.substring(0, display.length - 1) : "0";
      break;
    case "%":
  }
}

function doMath(symbol) {
  const intDisplay = parseInt(display);
  if (display === "0") return;

  runningTotal === 0 ? (runningTotal = intDisplay) : operate(intDisplay);
  mathOperator = symbol;
  display = "";
}

function operate(intDisplay) {
  switch (mathOperator) {
    case "+":
      runningTotal += intDisplay;
      break;
    case "-":
      runningTotal -= intDisplay;
      break;
    case "÷":
      runningTotal /= intDisplay;
      break;
    case "×":
      runningTotal *= intDisplay;
      break;
    case ".":
      runningTotal = parseFloat(intDisplay);
  }
}
