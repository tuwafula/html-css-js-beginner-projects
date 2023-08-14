'use strict';

const containerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
  addImages();
});

const addImages = function () {
  let imgCount = 10;
  for (let i = 0; i < imgCount; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    containerEl.appendChild(newImg);
  }
};
