let display = document.getElementById("display");
let resultBox = document.getElementById("resultBox");

function appendInput(input) {
  display.value += input;
}

function calculateResult() {
  try {
    resultBox.value = eval(display.value);
  } catch (error) {
    resultBox.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
  resultBox.value = "";
}
