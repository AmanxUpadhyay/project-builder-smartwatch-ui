var updateTime = setInterval(showTimeDay, 100);

showTimeDay();

function showTimeDay() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes(); //getting time

  document.getElementById("top-time").innerHTML = time;

  document.getElementById("time").innerHTML = time; //showing time on page

  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; //array of days
  document.getElementById("day").innerHTML = weekDays[today.getDay()]; // showing todays day on page
}
