'use strict';

const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const imgContainer = document.querySelector('.image-container');
const imgEls = document.querySelectorAll('img');

let currentImg = 1;
let timeout;

nextEl.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

// Function expressions cannot be hoisted
const updateImg = function () {
  if (currentImg > imgEls.length) currentImg = 1;
  else if (currentImg < 1) currentImg = imgEls.length;
  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
};

updateImg();
