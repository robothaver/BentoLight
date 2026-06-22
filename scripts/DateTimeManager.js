function getGreetMessage(hour) {
  let message;
  if (hour >= 3 && hour < 12) {
    message = `${config.greetingMorning} ${config.userName}!`;
  } else if (hour < 18) {
    message = `${config.greetingAfternoon} ${config.userName}!`;
  } else if (hour < 24) {
    message = `${config.greetingEvening} ${config.userName}!`;
  } else {
    message = `${config.greetingNight} ${config.userName}!`;
  }
  return message;
}

function getCurrentTime(date) {
  let time;
  if (config.twelveHourFormat) {
    time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  } else {
    time = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
  }
  return time;
}

function updateClockAndGreet() {
  let clock = document.getElementById("clock");
  let greet = document.getElementById("greetMessage");

  let now = new Date();
  let timeString = getCurrentTime(now);

  clock.innerHTML = timeString;
  greet.innerHTML = getGreetMessage(now.getHours());
  setTimeout(updateClockAndGreet, 1000);
}

function updateDate() {
  let date = document.getElementById("date");

  let now = new Date();
  let day = now.toLocaleString("default", { weekday: "long" });
  let month = now.toLocaleString("default", { month: "long" }).slice(0, 3);
  let dateString = `${day}, ${month} ${now.getDate()}`;

  date.innerHTML = dateString;

  setTimeout(updateDate, 5000);
}

updateClockAndGreet()
updateDate()
