import './style.css';

interface OperatorType {
  [key: string]: string;
}

const $ = (elem: string) => {
  if (elem) {
    return document.querySelector(elem);
  }
  return;
};

const operatorSymbol = {
  '＋': 'plus',
  '－': 'minus',
  '×': 'multiple',
  '÷': 'divide',
};

const Calcurator = {
  prevValue: '0',
  value: '0',

  // result에 계산기 결과 보여주기
  render(input: string | number) {
    const $resultBtn = $('#result-btn');
    const $resultCalc = <HTMLElement>$('#result-calc');
    const prevInputNumber = this.prevValue;

    console.log(prevInputNumber);

    if ($resultCalc) {
      if (operatorSymbol[input]) {
        this.value = Number(this.value);
      } else if (this.value !== '0') {
        this.value += Number(input);
      } else {
        this.value = String(input);
      }

      $resultCalc.innerText = String(this.value);
    }
  },

  savePrevNumber(inputNumber: string) {
    this.prevValue = this.value;
    this.value = inputNumber;
  },

  clear() {
    this.value = String(0);
    this.render(this.value);
  },

  init() {
    const $buttonContainer = $('.numbers-container');
    $buttonContainer?.addEventListener('click', ({ target }) => {
      if ((target as HTMLDivElement).className !== 'numbers-container') {
        this.render((target as HTMLButtonElement).innerText);
      }
    });

    const $operators = $('.operators');
    $operators?.addEventListener('click', ({ target }) => {
      if ((target as HTMLElement).className !== 'operator') return;

      if (target) {
        const currentOperator = (target as HTMLElement).innerText;
        this.savePrevNumber(this.value);
        this.render(currentOperator);
      }
    });

    const $clear = $('#clear-btn');
    $clear?.addEventListener('click', () => {
      this.clear();
    });
  },
};

Calcurator.init();
