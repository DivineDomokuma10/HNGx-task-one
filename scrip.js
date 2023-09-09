const day = document.querySelector("#day");

const time = document.querySelector("#time");

function setDayValue(data) {
  switch (data) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednessday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "invalid";
  }
}

window.addEventListener("load", () => {
  const timeStamp = new Date();

  day.textContent = setDayValue(timeStamp.getDay());

  time.textContent = timeStamp.getUTCMilliseconds() + "ms";
});
