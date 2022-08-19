CodingNinjasStopWatch = {};
CodingNinjasStopWatch.divTimer = document.getElementById("time");

function displayTime() {
  let hrs = "00",
    min = "00",
    sec = "00",
    milsec = "0";
  time = "";
  timeNow = new Date().getTime(); //in miliseconds
  CodingNinjasStopWatch.Tdifference = timeNow - CodingNinjasStopWatch.timestart; // getting current time to update
  if (CodingNinjasStopWatch.Tdifference > 10) {
    milsec = Math.floor((CodingNinjasStopWatch.Tdifference % 1000) / 10); // checking for 10 ms to update it so that it does not print twice
    if (milsec < 10) {
      milsec = "0" + String(milsec);
    }
  }

  if (CodingNinjasStopWatch.Tdifference > 1000) {
    //  in seconds
    sec = Math.floor(CodingNinjasStopWatch.Tdifference / 1000); // sec = mili sec / 1000
    if (sec > 60) {
      sec = sec % 60;
    }
    if (sec < 10) {
      sec = "0" + String(sec);
    }
  }

  //  in min
  if (CodingNinjasStopWatch.Tdifference > 60000) {
    min = Math.floor(CodingNinjasStopWatch.Tdifference / 60000); // min = milisec / 60000 as 1 min has 60000 milisecs
    if (min > 60) {
      min = min % 60;
    }
    if (min < 10) {
      min = "0" + String(min);
    }
  }

  // hrs
  if (CodingNinjasStopWatch.Tdifference > 3600000) {
    hrs = Math.floor(CodingNinjasStopWatch.Tdifference / 3600000); // min = milisec / 60000 as 1 hr has 3600000 milisecs
    if (hrs < 10) {
      hrs = "0" + String(hrs);
    }
  }
  time = hrs + ":";
  time += min + ":";
  time += sec + ":";
  time += milsec;

  CodingNinjasStopWatch.divTimer.innerHTML = time;
}

function goTimer() {
  //playing audio when start is pressed
  const audio = new Audio();
  audio.src = "sound_trim.mp3";
  audio.play();
  // starting the time
  CodingNinjasStopWatch.timestart = new Date().getTime();
  // need to update the time started when the user clicks go button after stopping it
  if (CodingNinjasStopWatch.Tdifference > 0) {
    CodingNinjasStopWatch.timestart =
      CodingNinjasStopWatch.timestart - CodingNinjasStopWatch.Tdifference;
  }
  // calling setInterval to display time every 10ms
  CodingNinjasStopWatch.timeinterval = setInterval(function () {
    displayTime();
  }, 10);
  document.getElementById("go").style.display = "none";
  document.getElementById("clear").style.display = "none";
  document.getElementById("stop").style.display = "inline";
}
function stopTimer() {
  clearInterval(CodingNinjasStopWatch.timeinterval); // stop  the timer

  document.getElementById("stop").style.display = "none";
  document.getElementById("go").style.display = "inline";
  document.getElementById("clear").style.display = "inline";
}
function clearTimer() {
  clearInterval(CodingNinjasStopWatch.timeInterval);
  CodingNinjasStopWatch.divTimer.innerHTML = "00:00:00:00"; // reset timer
  CodingNinjasStopWatch.Tdifference = 0;

  document.getElementById("stop").style.display = "none";
  document.getElementById("go").style.display = "inline";
  document.getElementById("clear").style.display = "none";
}
