describe('💙 계산기 앱 테스트', () => {
  beforeEach('✅ 페이지를 방문합니다.', () => {
    cy.visit('../../index.html');
  });

  it('✅ 디스플레이에 숫자 0이 표시됩니다.', () => {
    cy.get('#total').should('have.text', 0);
  });

  it('✅ 숫자 버튼 클릭 시 디스플레이에 숫자가 나타납니다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', 1);
  });
});
