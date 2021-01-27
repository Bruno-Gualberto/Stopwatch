const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const para = document.querySelector('.display');

let time = 0;
let stopWatch

const displayStopWatch = () => {
  
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  
  (hours < 10) ? hours = `0${hours}` : hours; 
  (minutes < 10) ? minutes = `0${minutes}` : minutes;
  (seconds < 10) ? seconds = `0${seconds}` : seconds;
  
  para.textContent = `${hours}:${minutes}:${seconds}`;
  time++
}

start.addEventListener('click', () => {
  stopWatch = setInterval(displayStopWatch, 1000);
  start.disabled = true;
})

stop.addEventListener('click', () => {
  clearInterval(stopWatch)
  start.disabled = false;
})

reset.addEventListener('click', () => {
  clearInterval(stopWatch);
  start.disabled = false;
  time = 0;
  displayStopWatch();
})

displayStopWatch();