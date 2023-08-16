'use strict';

const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = '#1a3443';
  } else {
    bodyEl.style.backgroundColor = 'whitesmoke';
  }
}

inputEl.addEventListener('input', () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem('mode', JSON.stringify(inputEl.checked));
}
