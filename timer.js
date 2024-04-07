// Script to make the timer work in TritonClock
let seconds = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(incrementTimer, 1000); // Update timer every second
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    seconds = 0;
    document.getElementById("timer").innerHTML = "00:00";
}

function incrementTimer() {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Format the time display (e.g., "02:15")
    let display = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

    document.getElementById("timer").innerHTML = display;
}
