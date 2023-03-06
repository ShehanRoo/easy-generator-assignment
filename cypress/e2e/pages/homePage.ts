import CommonPage from './commonPage';

class HomePage extends CommonPage {
  verifyLoginButtonIsVisible(text: string) {
    cy.get('div[class="login-btn"]')
      .last()
      .should('be.visible')
      .should('include.text', text);
  }

  verifySignUpButtonIsVisible(text: string) {
    cy.get('div[class="login-btn"]')
      .first()
      .should('be.visible')
      .should('include.text', text);
  }
}

export default HomePage;
