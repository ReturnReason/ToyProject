import Caculator from './components/Caclulator.js';

document.addEventListener('DOMContentLoaded', () => {
  new Caculator();
});

const $ = (elem) => document.querySelector(elem);
const $digits = $('.digits');
const $total = $('#total');

const handleDigitClick = (e) => {
  if (e.target.classList.contains('digit')) {
    $total.innerText = e.target.innerText;
  }
};

function App() {
  $digits.addEventListener('click', handleDigitClick);
}

App();
