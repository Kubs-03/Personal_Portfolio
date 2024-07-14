let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function updateDisplay() {
    document.getElementById('minutes').innerHTML = `${String(minutes).padStart(2, '0').split('').map(num => `<span>${num}</span>`).join('')}`;
    document.getElementById('seconds').innerHTML = `${String(seconds).padStart(2, '0').split('').map(num => `<span>${num}</span>`).join('')}`;
    document.getElementById('milliseconds').innerHTML = `${String(milliseconds).padStart(3, '0').slice(0, 2).split('').map(num => `<span>${num}</span>`).join('')}`;
}

function startStopwatch() {
    if (!interval) {
        interval = setInterval(() => {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;

                }
            }
            updateDisplay();
        }, 10);
    }
}

function stopStopwatch() {
    clearInterval(interval);
    interval = null;
}

function resetStopwatch() {
    clearInterval(interval);
    interval = null;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    document.getElementById('laps').innerHTML = ''; // Clear laps
}

function lapStopwatch() {
    const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0').slice(0, 2)}`;
    const lapContainer = document.getElementById('laps');
    const lapElement = document.createElement('div');
    lapElement.textContent = lapTime;
    lapElement.classList.add('lap'); // Add class for styling
    lapContainer.appendChild(lapElement);
}

updateDisplay(); // Initialize the display
