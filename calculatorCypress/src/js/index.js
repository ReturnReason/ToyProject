import Caculator from './components/Caclulator.js';

document.addEventListener('DOMContentLoaded', () => {
  new Caculator();
});

const $ = (elem) => document.querySelector(elem);
const $digits = $('.digits');
const $total = $('#total');

const handleDigitClick = (e) => {
  if (!e.target.classList.contains('digit')) return;

  const currentTotal = $total.innerText;
  const newDigit = e.target.innerText;

  $total.innerText = currentTotal === '0' ? newDigit : currentTotal + newDigit;
};

function App() {
  $digits.addEventListener('click', handleDigitClick);
}

App();
