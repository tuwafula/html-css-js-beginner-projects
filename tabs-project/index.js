const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.button');
const tabsContent = document.querySelectorAll('.content');

tabs.addEventListener('click', e => {
  const clicked = e.target.closest('.button');

  if (!clicked) return;

  btns.forEach(btn => {
    btn.classList.remove('live');
  });

  tabsContent.forEach(tab => {
    tab.classList.remove('live');
  });

  clicked.classList.add('live');

  document.querySelector(`#${clicked.dataset.id}`).classList.add('live');
});
