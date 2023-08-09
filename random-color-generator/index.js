const containerEl = document.querySelector('.container');
containerEl.textContent = '';

const randomColor = function () {
  const chars = '0123456789abcdef';
  colorCodeLength = 6;

  let colorCode = '';

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
};

const generateColors = function () {
  for (let i = 0; i < 30; i++) {
    const newColor = randomColor();

    const html = `
        <div class="color-container" style="background-color: #${newColor}"}>#${newColor}</div>

        `;

    containerEl.insertAdjacentHTML('afterbegin', html);
  }
};

(() => {
  generateColors();
})();
