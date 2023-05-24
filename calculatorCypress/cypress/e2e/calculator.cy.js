const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get('.digit').contains(digit).click();
  });
};

const checkDisplayValue = (value) => {
  cy.get('#total').should('have.text', value);
};

describe('💎 계산기 테스트', () => {
  beforeEach('페이지 방문', () => {
    cy.visit('../index.html');
  });

  it('디스플레이에 기본적으로 숫자 0이 나타난다.', () => {
    checkDisplayValue('0');
  });

  it('1개의 숫자 버튼(1)을 클릭하면 디스플레이에 1이 표시된다', () => {
    clickDigitButtons(['1']);
    checkDisplayValue('1');
  });

  it('2개의 숫자 버튼(1과 2)을 클릭하면 디스플레이에 숫자 2개가 표시된다.', () => {
    clickDigitButtons(['1', '2']);
    checkDisplayValue('12');
  });

  it('3개의 숫자 버튼(1, 2, 3)을 클릭하면 디스플레이에 숫자 3개가 표시된다.', () => {
    clickDigitButtons(['1', '2', '3']);
    checkDisplayValue('123');
  });

  it('3개의 숫자 버튼(1, 2, 3)을 클릭하고 연산자 버튼을 누르면 디스플레이에 연산자가 표시된다.', () => {
    clickDigitButtons(['1', '2', '3']);
    cy.get('.operation').contains('+').click();
    checkDisplayValue('123+');
  });
  it('연산자 버튼을 연속해서 누르면 디스플레이에 마지막으로 누른 연산자만 표시한다.', () => {});
  it('2번째 숫자를 입력하면 display에 2번째 숫자를 누적하여 표시한다.');
});
