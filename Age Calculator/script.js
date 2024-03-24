let cal_btn = document.querySelector("#cal");
cal_btn.addEventListener("click", () => {
  let dob = document.getElementById("dob").value;
  console.log(dob);
  document.getElementById("p1").innerHTML = "";
  if (dob === "") {
    document.getElementById("p1").innerHTML = "* please select the date";
  } else {
    document.getElementById("p1").innerHTML = "";

    let getDate = new Date(dob);

    let dobDate = getDate.getDate();
    let dobMonth = getDate.getMonth() + 1;
    let dobYear = getDate.getFullYear();
    console.log(dobDate, dobMonth, dobYear);

    let currentDate = new Date();

    let curDate = currentDate.getDate();
    let curYear = currentDate.getFullYear();
    let curMonth = currentDate.getMonth() + 1; // Month index starts from 0
    console.log(curDate, curMonth, curYear);

    let year, month, date;

    year = curYear - dobYear;
    if (curMonth < dobMonth || (curMonth === dobMonth && curDate < dobDate)) {
      year--;
      curMonth += 12;
    }

    month = curMonth - dobMonth;
    if (curDate < dobDate) {
      month--;
      curDate += new Date(curYear, curMonth - 1, 0).getDate();
    }

    date = curDate - dobDate;

    console.log(year, month, date);

    // Display the calculated age
    document.getElementById("years").value = year;
    document.getElementById("months").value = month;
    document.getElementById("days").value = date;

    document.getElementById("dob").value = "";
  }
});
