const yearContainer = document.getElementById('year');
const monthContainer = document.getElementById('month');
const dayContainer = document.getElementById('day');

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertDate = () => {
  const time = new Date();
  let day = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  dayContainer.textContent = getTimeUnit(day);
  monthContainer.textContent = getTimeUnit(month);
  yearContainer.textContent = getTimeUnit(year);
}

window.addEventListener('load', () => {
  insertDate();
});

setInterval(insertDate, (60 * 1000));