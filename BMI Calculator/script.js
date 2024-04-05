const cnv = document.getElementById("convert");
const clr = document.getElementById("clear");
cnv.addEventListener("click", function () {
  const h = document.getElementById("height");
  const w = document.getElementById("weight");
  if (h.value == "" || w.value == "") {
    alert("Please fill all the details!");
  } else {
    let r = w.value;
    r = r / h.value;
    r = r / h.value;
    r = r * 100;
    r = r * 100;
    if (r < 18.5) {
      document.getElementById("bmi").value = "Underweight";
      document.getElementById("indicator").style.backgroundColor = "#FFC700";
    } else if (r >= 18.5 && r < 25) {
      document.getElementById("bmi").value = "Normal weight";
      document.getElementById("indicator").style.backgroundColor = "#27B74B";
    } else if (r >= 25 && r < 30) {
      document.getElementById("bmi").value = "Overweight";
      document.getElementById("indicator").style.backgroundColor = "#ff8080";
    } else {
      document.getElementById("bmi").value = "Obese";
      document.getElementById("indicator").style.backgroundColor = "#e60000";
    }
  }
});
clr.addEventListener("click", function () {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmi").value = "";
  document.getElementById("indicator").style.backgroundColor = "white";
});
