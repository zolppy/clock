const toggleThemeButton = document.querySelector('.toggle-theme-button');
const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const updateTime = () => {
  const hoursContainer = document.querySelector('.hours');
  const minutesContainer = document.querySelector('.minutes');
  const secondsContainer = document.querySelector('.seconds');
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hoursContainer.textContent = getTimeUnit(hours);
  minutesContainer.textContent = getTimeUnit(minutes);
  secondsContainer.textContent = getTimeUnit(seconds);
}

const insertDate = () => {
  const yearContainer = document.querySelector('.year');
  const monthContainer = document.querySelector('.month');
  const dayContainer = document.querySelector('.day');
  const time = new Date();
  let day = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  const container1 = document.querySelector(".time");
  const container2 = document.querySelector(".date");
  const spinner = document.querySelector(".loading-spinner");

  setTimeout(() => {
    container1.classList.remove("is-hidden");
    container2.classList.remove("is-hidden");
    spinner.classList.add("is-hidden");
  }, 3000);

  dayContainer.textContent = getTimeUnit(day);
  monthContainer.textContent = getTimeUnit(month);
  yearContainer.textContent = getTimeUnit(year);
}

const loadTheme = () => {
  const bodyEl = document.querySelector('body');
  const clockEl = document.querySelector('.clock');
  const spinnerEl = document.querySelector('.loading-spinner');
  const toggleThemeButton = document.querySelector('.toggle-theme-button');
  const icon = document.querySelector('.icon-theme');
  const theme = localStorage.getItem('theme');

  if (theme) {
    if (theme === 'dark') {
      bodyEl.classList.add('dark');
      bodyEl.classList.add('dark');
      clockEl.classList.add('dark');
      toggleThemeButton.classList.add('dark');
      spinnerEl.classList.add("dark");
      icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    } else {
      bodyEl.classList.remove('dark');
      clockEl.classList.remove('dark');
      toggleThemeButton.classList.remove('dark');
      spinnerEl.classList.remove("dark");
      icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    }
  }
}

const toggleTheme = () => {
  const bodyEl = document.querySelector('body');
  const clockEl = document.querySelector('.clock');
  const toggleThemeButton = document.querySelector('.toggle-theme-button');
  const icon = document.querySelector('.icon-theme');
  let theme;

  bodyEl.classList.toggle('dark');
  clockEl.classList.toggle('dark');
  toggleThemeButton.classList.toggle('dark');
  if (icon.classList.contains('bi-sun-fill')) {
    theme = 'light';
    icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    localStorage.setItem('theme', theme);
  } else {
    theme = 'dark';
    icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    localStorage.setItem('theme', theme);
  }
}

window.addEventListener('load', () => {
  insertDate();
  loadTheme();
});
toggleThemeButton.addEventListener('click', toggleTheme);

setInterval(updateTime, 1000);
setInterval(insertDate, (60 * 1000));