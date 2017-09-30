let countDown;
const timeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
const enterMinutes = document.querySelector('input');
const timerControls = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear before starting another intervals 
    // console.log(countdown);
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds * 1000; // the time you wish to run the timer for 

    // const secondsLeft =(then-Date.now())/1000;
    displayTimeLeft(seconds);
    timeToEndTheBreak(then);
    //  console.log(now ,then );
    countdown = setInterval(() => {
        const secondsLeft = (then - Date.now()) / 1000;
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        console.log(displayTimeLeft(Math.round(secondsLeft)));
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = (seconds % 60) >= 10 ? (seconds % 60) : '0' + (seconds % 60);
    console.log(remainderSeconds);
    const displayTime = '' + minutes + ': ' + remainderSeconds + '';
    timeLeft.textContent = displayTime;
    console.log(minutes, remainderSeconds);
    document.title = displayTime;
}

function timeToEndTheBreak(timestamp /*// which is 'then ' here */ ) {
    const end = new Date(timestamp);
    console.log(end);
    const hours = (end.getHours() > 12) ? (end.getHours() - 12) : (end.getHours());
    displayEndTime.textContent = 'yOUR bREAKS ENDS AT ' + hours + ':' + end.getMinutes();
}

function startTimer() {

    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

function handleEnteringMinutes(e) {
    console.log(e);
    e.preventDefault();

}
//enterMinutes.addEventListener('submit',handleEnteringMinutes);
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});
timerControls.forEach(timer => timer.addEventListener('click', startTimer));