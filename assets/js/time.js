// Timer
const digitClock = document.querySelector("#digital-timer");


function updateClock(params) {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    digitClock.textContent = timeString;

}
  // Update the clock every second
  setInterval(updateClock, 10);

  // Initial call to set the clock immediately
  updateClock();
console.log(date);
