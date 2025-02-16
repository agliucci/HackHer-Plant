document.addEventListener("DOMContentLoaded", function () {
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const startButton = document.getElementById("startButton");
    const timerDisplay = document.getElementById("timerDisplay");

    let interval = null;
    let totalSeconds = 0;

    function startTimer(event) {
        event.preventDefault(); // 🔴 Stop the page reload

        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;

        totalSeconds = hours * 3600 + minutes * 60;

        if (totalSeconds <= 0) {
            timerDisplay.innerText = "Please enter a valid time!";
            return;
        }

        clearInterval(interval); // Reset existing timer
        interval = setInterval(updateTimer, 1000);
        updateTimer(); // Immediately update display
    }

    function updateTimer() {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            timerDisplay.innerText = "Time is up!";
            return;
        }

        totalSeconds--;

        const hr = Math.floor(totalSeconds / 3600);
        const mt = Math.floor((totalSeconds % 3600) / 60);
        const sec = totalSeconds % 60;

        timerDisplay.innerText = `Time Left: ${hr}h ${mt}m ${sec}s`;
    }

    startButton.addEventListener("click", startTimer);
});