import './style.css';

const Calcurator = {
  value: 0,

  render(inputValue: string | number) {
    const $result = document.querySelector('#result') as HTMLElement;
    // const $result = <HTMLDivElement>document.querySelector('#result');

    if ($result) {
      $result.innerText = String(inputValue || this.value);
    }
  },

  reset() {
    this.value = 0;
  },

  operator(inputNumber: number) {
    this.render(inputNumber);
  },

  initEvent() {
    const $btn = document.querySelector('.calc-items-container');
    if ($btn) {
      $btn.addEventListener('click', ({ target }) => {
        const buttonTxt = (target as HTMLButtonElement).innerText;

        if (buttonTxt === 'clear') {
          this.reset();
        } else {
          if (isNaN(Number(buttonTxt))) return;
          this.operator(Number(buttonTxt));
        }
      });
    }
  },
};

Calcurator.render(0);
Calcurator.initEvent();
