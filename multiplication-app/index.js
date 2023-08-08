const questionEl = document.querySelector('#question');
const formEl = document.querySelector('#form');
const inputEl = document.querySelector('#input');
const scoreEl = document.querySelector('#score');

// const num1 = Math.ceil(Math.random() * 10);
// const num2 = Math.ceil(Math.random() * 10);

const randomNumber = function () {
  return Math.ceil(Math.random() * 10);
};

questionEl.textContent = `What is ${(num1 =
  randomNumber())} multiplied by ${(num2 = randomNumber())}?`;

let score = JSON.parse(localStorage.getItem('score'));

if (!score) score = 0;

scoreEl.textContent = `score: ${score}`;

let correctAns = num1 * num2;

const updateLocalStorage = function (score) {
  localStorage.setItem('score', JSON.stringify(score));
};

const updateView = function (score) {
  updateLocalStorage(score);
  scoreEl.textContent = `score: ${score}`;

  questionEl.textContent = `What is ${(num1 =
    randomNumber())} multiplied by ${(num2 = randomNumber())}?`;

  correctAns = num1 * num2;
  inputEl.value = '';
};

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
  } else {
    score--;
  }

  updateView(score);
});
