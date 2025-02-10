const calcBtn = document.querySelector("#calcBtn");
let day = document.querySelector(".input-days input");
let month = document.querySelector(".input-months input");
let year = document.querySelector(".input-years input");
let isValid = true;

function validate() {
   let d = Number(day.value);
   let m = Number(month.value);
   let y = Number(year.value);
   // *SECTION - validating day
   if (d == "") {
      showEmptyMsg("days");
      isValid = false;
   } else if (d < 1 || d > 31) {
      showErrorMsg("days");
      isValid = false;
   } else {
      clearErrorMsg("days");
   }

   // *SECTION - validating month
   if (m == "") {
      showEmptyMsg("months");
      isValid = false;
   } else if (m < 1 || m > 12) {
      showErrorMsg("months");
      isValid = false;
   } else {
      clearErrorMsg("months");
   }

   // *SECTION - validating year
   if (y == "") {
      showEmptyMsg("years");
      isValid = false;
   } else if (y < 1 || y > new Date().getFullYear()) {
      showErrorMsg("years");
      isValid = false;
   } else {
      clearErrorMsg("years");
   }

   return { d, m, y, isValid };
}

function calcAge(d, m, y) {
   let today = new Date();
   let currentDay = today.getDate();
   let currentMonth = today.getMonth() + 1;
   let currentYear = today.getFullYear();

   let dayRes, monthRes, yearRes;

   if (d > currentDay) {
      currentDay += new Date(currentYear, currentMonth - 1, 0).getDate();
      currentMonth -= 1;
   }
   dayRes = currentDay - d;

   if (m > currentMonth) {
      currentMonth += 12;
      currentYear -= 1;
   }
   monthRes = currentMonth - m;

   yearRes = currentYear - y;

   document.querySelector(".dashes-years").textContent = yearRes;
   document.querySelector(".dashes-months").textContent = monthRes;
   document.querySelector(".dashes-days").textContent = dayRes;
}

calcBtn.addEventListener("click", () => {
   let { d, m, y, isValid } = validate();
   if (isValid) {
      calcAge(d, m, y);
   }
});

function showEmptyMsg(param) {
   document.querySelector(`.input-${param} .error-msg`).textContent =
      "This input is required";
}
function showErrorMsg(param) {
   document.querySelector(`.input-${param} .error-msg`).textContent =
      "This input must be valid";
}

function clearErrorMsg(param) {
   document.querySelector(`.input-${param} .error-msg`).textContent = "";
}
