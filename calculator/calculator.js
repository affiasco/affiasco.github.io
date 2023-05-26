let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

let screen = document.querySelector(".screen");

function init () {
  document.querySelector(".calc-buttons")
    .addEventListener("click", function(event) {
      buttonClick(event.target.innerText)
    })
}

function buttonClick(value) {
  isNaN(parseInt(value)) ? handleSymbol(value) : handleNumber(value);
  screen.innerText = buffer;
}

function handleSymbol(symbol){
  switch(symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) return;
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = +runningTotal;
      runningTotal = 0;
      break;
    case "←":
      (buffer.length === 1) ? buffer = "0" : buffer = buffer.substring(0, buffer.length - 1);
      break;
    case "÷":
    case "×":
    case "-":
    case "+":
      handleMath(symbol);
      break;
  }
} 

function handleNumber(numberString){
  (buffer === "0") ? buffer = numberString : buffer += numberString
}

function handleMath (value){
  if (buffer === "0") return;

  const intBuffer = parseInt(buffer);
  runningTotal === 0 ? runningTotal = intBuffer : flushOperation(intBuffer);
  previousOperator = value;
  buffer = "";
}

function flushOperation(intBuffer){
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

init();
