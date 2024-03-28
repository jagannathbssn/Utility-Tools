const cnv = document.getElementById("cnv");
cnv.addEventListener("click", () => {
  document.getElementById("error-msg").innerHTML = "";
  let rup = document.getElementById("rupees");
  let dol = document.getElementById("dollars");
  if (rup.value !== "" && dol.value === "") {
    //assuming 1$(one dollar) == 80₹(eighty ruppees)
    let Dollars = rup.value / 80;
    dol.value = Dollars;
  } else if (dol.value !== "" && rup.value === "") {
    //assuming 1$(one dollar) == 80₹(eighty ruppees)
    let Rupees = dol.value * 80;
    rup.value = Rupees;
  } else {
    document.getElementById("error-msg").innerHTML =
      "*Please enter valid input";
  }
});
const re = document.getElementById("re");
re.addEventListener("click", () => {
  document.getElementById("error-msg").innerHTML = "";
  document.getElementById("rupees").value = "";
  document.getElementById("dollars").value = "";
});
const inp1 = document.getElementById("rupees");
inp1.addEventListener("click", () => {
  document.getElementById("dollars").value = "";
});
const inp2 = document.getElementById("dollars");
inp2.addEventListener("click", () => {
  document.getElementById("rupees").value = "";
});
