const toggleThemeButton = document.getElementById('toggle-theme-button');

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

window.addEventListener('load', () => {
  loadTheme();
});
toggleThemeButton.addEventListener('click', toggleTheme);