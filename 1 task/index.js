const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        let intervalHandle = setInterval(() => {
            let hour = Math.floor((seconds / 3600));
            let min = Math.floor(seconds / 60 - hour * 60);
            let sec = Math.floor(seconds - hour * 3600 - min * 60);

            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            timerEl.innerHTML = `${hour}ч : ${min}м : ${sec}с`;

            if (seconds === 0) {
                clearInterval((intervalHandle));
                timerEl.innerHTML = "hh:mm:ss";
            }

            seconds--;
        }, 1000);
    };
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/[^\d.]/g, "".trim());
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});

