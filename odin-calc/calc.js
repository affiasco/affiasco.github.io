const screen = document.querySelector(".screen");
const calcButtons = document.querySelector(".calc-buttons");
let display = "0";
let runningTotal = 0;
let mathOperator;

calcButtons.addEventListener("click", (event) =>
  buttonClick(event.target.innerText)
);

function buttonClick(value) {
  !isNaN(parseFloat(value)) ? manageNumbers(value) : manageSymbols(value);
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
      doMath(symbol);
      break;
    case "%":
      display = display.includes(".")
        ? `${display * 100} %`
        : (display += " %");
      break;
    case "=":
      equalize();
      break;
    case "DEL":
      if (display === "0") return;
      display =
        display.length > 1 ? display.substring(0, display.length - 1) : "0";
      break;
    case ".":
      display += ".";
      break;
  }
}

function doMath(symbol) {
  const floatDisplay = parseFloat(display);
  if (display === "0") return;

  runningTotal === 0 ? (runningTotal = floatDisplay) : operate(floatDisplay);
  mathOperator = symbol;
  display = "";
}

function operate(floatDisplay) {
  switch (mathOperator) {
    case "+":
      runningTotal += floatDisplay;
      break;
    case "-":
      runningTotal -= floatDisplay;
      break;
    case "÷":
      runningTotal /= floatDisplay;
      break;
    case "×":
      runningTotal *= floatDisplay;
      break;
  }
}

function equalize() {
  if (mathOperator === null) return;
  operate(parseFloat(display));
  previousOperator = null;
  display = +runningTotal;
  runningTotal = 0;
}
