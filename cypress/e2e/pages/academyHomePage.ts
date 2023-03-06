import CommonPage from './commonPage';

class AcademyHomePage extends CommonPage {
  verifyMarqueeIsVisible() {
    cy.get('div[class="marquee0"]').should('be.visible');
  }
}

export default AcademyHomePage;
