const careers = ['Youtuber', 'Web Developer', 'Freelancer', 'Instructor'];

const containerEl = document.querySelector('.container');

let currentIndex = 0;
let currentChar = 0;

updateText();

function updateText() {
  currentChar++;
  containerEl.innerHTML = `
    <h1>I am ${
      careers[currentIndex].slice(0, 1) === 'I' ? 'an' : 'a'
    } ${careers[currentIndex].slice(0, currentChar)}</h1>
    `;

  if (currentChar === careers[currentIndex].length) {
    currentChar = 0;
    currentIndex++;
  }

  if (currentIndex === careers.length) currentIndex = 0;

  setTimeout(updateText, 400);
}
