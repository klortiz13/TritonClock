// Script to make the timer work in TritonClock
let seconds = 0;
let timerInterval;

function startTimer() {
    // Get user input
    const min = parseInt(document.getElementById("minutes").value, 10) || 0; 
    const sec = parseInt(document.getElementById("seconds").value, 10) || 0; 
    seconds = min * 60 + sec;

    // Initialize "000:00" with the numbers of the user
    let user_display = `${min.toString().padStart(3, '0')}:${sec.toString().padStart(2, '0')}`;
    document.getElementById("timer_display").innerHTML = user_display;

    // Start
    timerInterval = setInterval(decrementTimer, 1000); // Update timer every second
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    seconds = 0;
    document.getElementById("timer_display").innerHTML = "000:00";
    // Stop timer from going negative
    stopTimer(timerInterval);
}

function decrementTimer() {
    seconds--;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Format the time display (e.g., "02:15")
    let display = `${minutes.toString().padStart(3, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

    document.getElementById("timer_display").innerHTML = display;
}
