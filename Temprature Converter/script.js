function convert() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const celsiusInput = document.getElementById("celsius");
  const errorMessage = document.getElementById("error-message");

  if (fahrenheitInput.value !== "" && celsiusInput.value === "") {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    celsiusInput.value = celsiusValue.toFixed(2);
    errorMessage.innerHTML = "";
  } else if (celsiusInput.value !== "" && fahrenheitInput.value === "") {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    errorMessage.innerHTML = "";
  } else {
    errorMessage.innerHTML = "* Please enter a value in one input field.";
  }
}

function clearInputs() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
  document.getElementById("error-message").innerHTML = "";
}
