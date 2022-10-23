import './style.css';

const Calcurator = {
  value: '0',

  // result에 계산기 결과 보여주기
  render(inputNumber: string | number) {
    const $result = document.querySelector('#result-btn');
    const $resultCalc = <HTMLElement>document.querySelector('#result-calc');

    // 숫자 버튼 눌렀을 때 렌더링
    if ($resultCalc) {
      if (this.value !== '0') {
        this.value += String(inputNumber);
      } else {
        this.value = String(inputNumber);
      }

      $resultCalc.innerText = String(this.value);

      console.log(this.value, inputNumber);
    }
  },

  // 계산기 0으로 초기화 시키기
  clear() {
    this.render(0);
  },

  // 초기 세팅
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
  },
};

Calcurator.init();
