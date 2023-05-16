const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get('.digit').contains(digit).click();
  });
};

const checkDisplayValue = (value) => {
  cy.get('#total').should('have.text', value);
};

describe('💙 계산기 앱 테스트', () => {
  beforeEach('✅ 페이지를 방문합니다.', () => {
    cy.visit('../../index.html');
  });

  it('✅ 디스플레이에 숫자 0이 표시됩니다.', () => {
    checkDisplayValue(0);
  });

  it('✅ 숫자 버튼 클릭 시 디스플레이에 숫자가 나타납니다.', () => {
    clickDigitButtons(['1']);
    checkDisplayValue(1);
  });

  it('✅ 숫자 버튼 2개를 클릭하면 디스플레이에 숫자 2개가 나타납니다.', () => {
    clickDigitButtons(['1', '2']);
    checkDisplayValue(12);
  });

  it('✅ 3개의 숫자 버튼을 클릭하면 디스플레이에 숫자 3개가 나타납니다.', () => {
    clickDigitButtons(['1', '2', '3']);
    checkDisplayValue(123);
  });
});
