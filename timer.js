// Script to make the timer work in TritonClock
let seconds = 0;
let timerInterval;

function startTimer() {
    seconds = 0; 
    clearInterval(timerInterval); 
    timerInterval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function incrementTimer() {
    seconds++;
    document.getElementById("timer").innerHTML = formatTime(seconds);
}

function formatTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    // Add leading zeros if needed
    return `<span class="math-inline">\{minutes\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{seconds.toString().padStart(2, '0')}`; 
}
