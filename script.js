// Time
const hoursContainer = document.getElementById('hours');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');
// Date
const yearContainer = document.getElementById('year');
const monthContainer = document.getElementById('month');
const dayContainer = document.getElementById('day');

const toggleThemeButton = document.getElementById('toggle-theme-button');

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

function loadTheme() {
  const bodyEl = document.querySelector('body');
  const clockEl = document.querySelector('#clock');
  const toggleThemeButton = document.querySelector('#toggle-theme-button');
  const icon = document.querySelector('#icon-theme');
  const theme = localStorage.getItem('theme');

  if (theme) {
    if (theme === 'dark') {
      bodyEl.classList.add('dark');
      bodyEl.classList.add('dark');
      clockEl.classList.add('dark');
      toggleThemeButton.classList.add('dark');
      icon.classList.replace('bi-moon', 'bi-sun');
    } else {
      bodyEl.classList.remove('dark');
      clockEl.classList.remove('dark');
      toggleThemeButton.classList.remove('dark');
      icon.classList.replace('bi-sun', 'bi-moon');
    }
  }
}

function toggleTheme() {
  const bodyEl = document.querySelector('body');
  const clockEl = document.querySelector('#clock');
  const toggleThemeButton = document.querySelector('#toggle-theme-button');
  const icon = document.querySelector('#icon-theme');
  let theme;

  bodyEl.classList.toggle('dark');
  clockEl.classList.toggle('dark');
  toggleThemeButton.classList.toggle('dark');
  if (icon.classList.contains('bi-sun')) {
    theme = 'light';
    icon.classList.replace('bi-sun', 'bi-moon');
    localStorage.setItem('theme', theme);
  } else {
    theme = 'dark';
    icon.classList.replace('bi-moon', 'bi-sun');
    localStorage.setItem('theme', theme);
  }
}

const insertDate = () => {
  const time = new Date();
  let day = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  dayContainer.textContent = getTimeUnit(day);
  monthContainer.textContent = getTimeUnit(month);
  yearContainer.textContent = getTimeUnit(year);
}

const updateTime = () => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hoursContainer.textContent = getTimeUnit(hours);
  minutesContainer.textContent = getTimeUnit(minutes);
  secondsContainer.textContent = getTimeUnit(seconds);
}

window.addEventListener('load', () => {
  loadTheme();
  insertDate();
});
toggleThemeButton.addEventListener('click', toggleTheme);

setInterval(updateTime, 1000);
setInterval(insertDate, (60 * 1000))