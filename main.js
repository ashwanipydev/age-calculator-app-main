// js file
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', calculateAge);

function calculateAge() {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  const errorDay = document.querySelector('.error-day');
  const errorMonth = document.querySelector('.error-month');
  const errorYear = document.querySelector('.error-year');

  const outputYear = document.querySelector('.output-year');
  const outputMonth = document.querySelector('.output-month');
  const outputDay = document.querySelector('.output-day');

  // Clear previous errors and outputs
  errorDay.textContent = '';
  errorMonth.textContent = '';
  errorYear.textContent = '';
  outputYear.textContent = '--';
  outputMonth.textContent = '--';
  outputDay.textContent = '--';

  const day = parseInt(dayInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const year = parseInt(yearInput.value, 10);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (
    isNaN(day) || isNaN(month) || isNaN(year) ||
    day <= 0 || day > 31 || month <= 0 || month > 12 || year <= 0 ||
    year > today.getFullYear() || birthDate > today
  ) {
    if (isNaN(day) || day <= 0 || day > 31) {
      errorDay.textContent = 'Invalid day';
    }
    if (isNaN(month) || month <= 0 || month > 12) {
      errorMonth.textContent = 'Invalid month';
    }
    if (isNaN(year) || year <= 0 || year > today.getFullYear()) {
      errorYear.textContent = 'Invalid year';
    }
    return;
  }

  const diff = today - birthDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const remainingMonths = diff % (1000 * 60 * 60 * 24 * 365.25);
  const months = Math.floor(remainingMonths / (1000 * 60 * 60 * 24 * 30.44));
  const remainingDays = remainingMonths % (1000 * 60 * 60 * 24 * 30.44);
  const days = Math.floor(remainingDays / (1000 * 60 * 60 * 24));
  outputYear.textContent = years + " ";
  outputMonth.textContent = months + " ";
  outputDay.textContent = days + " ";
}
