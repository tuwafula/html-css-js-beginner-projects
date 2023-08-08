const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

const updateClock = function () {
  let hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  let ampm = 'AM';

  if (hour > 12) {
    hour = hour - 12;
    ampm = 'PM';
  }

  hourEl.textContent = (hour + '').length === 2 ? hour : hour.padStart(2, 0);
  minuteEl.textContent =
    (minutes + '').length === 2 ? minutes : (minutes + '').padStart(2, 0);
  secondEl.textContent =
    (seconds + '').length === 2 ? seconds : (seconds + '').padStart(2, 0);
  ampmEl.textContent = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
};

updateClock();
