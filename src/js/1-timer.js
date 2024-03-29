// Описаний в документації
import flatpickr from './path/to/flatpickr';

// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// ======================================================================================= >>>>>>>>>

    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
        console.log(selectedDates[0]);
        },
    };


// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     },
// };

// ======================================================================================= >>>>>>>>>

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    }

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// ======================================================================================= >>>>>>>>>

// const startBtn = document.querySelector('data-start');
// const days = document.querySelector('data-days');
// const hours = document.querySelector('data-hours');
// const minutes = document.querySelector('data-minutes');
// const seconds = document.querySelector('data-seconds');

//     startBtn.addEventListener('click', ()=>{
//     const initTime = Date.now();

//      setInterval(() =>{
//         const currentTime = Date.now();
//         const diff = currentTime - initTime;
        
        

//         const time = convertMs(diff);
//         days.textContent = time; 
//         hours.textContent = time; 
//         minutes.textContent = time; 
//         seconds.textContent = time; 
//      }, 1000);
// });

const startBtn = document.querySelector('data-start');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startBtn.addEventListener('click', () => {
    const initTime = Date.now();

    setInterval(() => {
        const currentTime = Date.now();
        const diff = currentTime - initTime;

        const time = convertMs(diff);
        days.textContent = time.days; 
        hours.textContent = time.hours; 
        minutes.textContent = time.minutes; 
        seconds.textContent = time.seconds; 
    }, 1000);
});

