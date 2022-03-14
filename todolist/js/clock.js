const clock = document.querySelector(".clock");

setInterval(printTime, 1000);

function printTime() {
  var date = new Date();
  var hours = String(date.getHours()).padStart(2, "0");
  var minutes = String(date.getMinutes()).padStart(2, "0");
  var seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

printTime();
