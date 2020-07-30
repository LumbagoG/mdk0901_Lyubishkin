const timeHours = document.querySelector('#timer-hours'),
    timeMinutes = document.querySelector('#timer-minutes'),
        timeSeconds = document.querySelector('#timer-seconds');

function getTimer(dadLine) {
    const dateNow = new Date(),
        dateFuture = new Date(dadLine),
            miliseconds = dateFuture - dateNow,
                seconds = Math.floor(miliseconds / 1000 % 60),
                    minutes = Math.floor(miliseconds / 1000 / 60 % 60),
                        hours = Math.floor(miliseconds / 1000 / 60 / 60);
    
    return {
        seconds,
        minutes,
        hours
    }
}

function setTimer() {
    const timer = getTimer('12 may 2020');

    timeHours.textContent = timer.hours;
    timeMinutes.textContent = timer.minutes;
    timeSeconds.textContent = timer.seconds;

}setTimer();


