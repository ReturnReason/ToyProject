import './style.css';

interface OperatorType {
  [key: string]: string;
}

const operatorSymbol = {
  '＋': 'plus',
  '－': 'minus',
  '×': 'multiple',
  '÷': 'divide',
};

let currentOperator;

const Calcurator = {
  value: '0',

  // result에 계산기 결과 보여주기
  render(input: string | number) {
    const $result = document.querySelector('#result-btn');
    const $resultCalc = <HTMLElement>document.querySelector('#result-calc');

    if ($resultCalc) {
      if (this.value !== '0') {
        this.value += String(input);
      } else {
        this.value = String(input);
      }

      $resultCalc.innerText = String(this.value);
    }
  },

  clear() {
    this.value = String(0);
    this.render(this.value);
  },

  init() {
    const $buttonContainer = document.querySelector('.numbers-container');
    $buttonContainer?.addEventListener('click', ({ target }) => {
      if ((target as HTMLDivElement).className !== 'numbers-container') {
        this.render((target as HTMLButtonElement).innerText);
      }
    });

    const $clear = document.querySelector('#clear-btn');
    $clear?.addEventListener('click', () => {
      this.clear();
    });

    const $operators = document.querySelector('.operators');
    $operators?.addEventListener('click', ({ target }) => {
      if ((target as HTMLElement).className !== 'operator') return;

      const operator = (target as HTMLElement).innerHTML;
      currentOperator = (operatorSymbol as OperatorType)[operator];
    });
  },
};

Calcurator.init();
