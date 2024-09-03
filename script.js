let historyVisible = false;
const historyList = document.getElementById("historyList");

function clearDisplay() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  let currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
    let expression = document.getElementById("result").value.replace("^", "**");
    let result = eval(expression);
    document.getElementById("result").value = result;
    addToHistory(expression, result);
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function calculateSquareRoot() {
  let currentValue = document.getElementById("result").value;
  document.getElementById("result").value = Math.sqrt(currentValue);
}

function calculatePercentage() {
  let currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue / 100;
}

function calculateFactorial() {
  let currentValue = parseInt(document.getElementById("result").value);
  let result = factorial(currentValue);
  document.getElementById("result").value = result;
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function addToHistory(expression, result) {
  const historyItem = document.createElement("li");
  historyItem.textContent = `${expression} = ${result}`;
  historyList.appendChild(historyItem);
}

function toggleHistory() {
  const historyElement = document.getElementById("history");
  historyVisible = !historyVisible;
  historyElement.classList.toggle("show", historyVisible);
}
