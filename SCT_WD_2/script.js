const playBtn = document.getElementsByClassName("playbtn")[0];
const lapBtn = document.getElementsByClassName("lapbtn")[0];
const resetBtn = document.getElementsByClassName("resetbtn")[0];
const lapS = document.getElementsByClassName("laps")[0];
const clearBtn = document.getElementsByClassName("clearbtn")[0];

const innerCircle = document.getElementsByClassName("inner-circle")[0];
const sec = document.getElementsByClassName("sec")[0];
const msec = document.getElementsByClassName("msec")[0];
const min = document.getElementsByClassName("min")[0];

let secCounter = 0;
let secs;
let msecCounter = 0;
let msecs;
let minCounter = 0;
let mins;
let lapItem = 0; 

const toggleBtn = () => {
  lapBtn.classList.add("visibility");
  resetBtn.classList.add("visibility");
};

const play = () => {
  toggleBtn();
  if (playBtn.textContent === "Start") {
    playBtn.textContent = "Pause";

    mins = setInterval(() => {
      minCounter++;
      if (minCounter > 59) {
        minCounter = 0;
      }
      min.innerHTML = `${minCounter < 10 ? '0' : ''}${minCounter} :`;
    }, 60 * 1000);

    secs = setInterval(() => {
      secCounter++;
      if (secCounter > 59) {
        secCounter = 0;
      }
      sec.innerHTML = `${secCounter < 10 ? '0' : ''}${secCounter} :`;
    }, 1000);

    msecs = setInterval(() => {
      msecCounter++;
      if (msecCounter > 99) {
        msecCounter = 0;
      }
      msec.innerHTML = `${msecCounter < 10 ? '0' : ''}${msecCounter}`;
    }, 10);

  } else {
    playBtn.textContent = "Start";
    clearInterval(mins);
    clearInterval(secs);
    clearInterval(msecs);
  }

  if (playBtn.textContent === "Pause") {
    lapBtn.classList.remove("visibility");
    resetBtn.classList.remove("visibility");
  }
};

const reset = () => {
  clearInterval(mins);
  clearInterval(secs);
  clearInterval(msecs);

  minCounter = 0;
  secCounter = 0;
  msecCounter = 0;

  min.innerHTML = "00 :";
  sec.innerHTML = "00 :";
  msec.innerHTML = "00";

  playBtn.textContent = "Start";
  lapBtn.classList.add("visibility");
  resetBtn.classList.add("visibility");
};

const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "time-stamp");

  number.innerHTML = `#${++lapItem}`;
  timeStamp.innerHTML = `${minCounter < 10 ? '0' : ''}${minCounter} :${secCounter < 10 ? '0' : ''}${secCounter} :${msecCounter < 10 ? '0' : ''}${msecCounter}`;
  
  li.append(number, timeStamp);
  lapS.append(li);
  clearBtn.classList.remove("laptime");
};

const clear = () => {
  lapS.innerHTML = "";
  lapS.append(clearBtn);
  clearBtn.classList.add("laptime");
};

playBtn.addEventListener("click", play);
lapBtn.addEventListener("click", lap);
resetBtn.addEventListener("click", reset);
clearBtn.addEventListener("click", clear);

// Stopwatch class (if needed)
class Stopwatch {
  constructor() {
    this.timer = null;
    this.running = false;
  }

  start() {
    this.running = true;
    // Start timer logic here
  }

  stop() {
    this.running = false;
    // Stop timer logic here
  }

  reset() {
    this.stop();
    // Reset timer logic here
  }
}
