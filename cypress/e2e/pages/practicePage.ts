import CommonPage from './commonPage';

class PracticePage extends CommonPage {
  mouseHover(text: string) {
    cy.get('#mousehover').realHover();
    cy.wait(2000); //Not required. For visual confirmation that hover is actually triggered
    cy.get('.mouse-hover-content').should('be.visible').contains(text);
  }

  verifyIframeContent() {
    this.switchToIframe('#courses-iframe')
      .find('#carousel-example-generic')
      .should('be.visible');
  }

  triggerAlert(inputText: string) {
    this.enterText('#name', inputText);
    this.clickElement('#alertbtn');
  }

  verifyAlertMessage(text: string) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.contains(text);
    });
  }

  verifyScrollableTable() {
    cy.get('div[class="tableFixHead"]').should(
      'have.css',
      'overflow-y',
      'auto'
    );
  }

  clickOpenTabButton() {
    cy.get('#opentab').invoke('removeAttr', 'target').click();
  }

  //Verify if window opens with given URL
  clickOpenWindowButton(newUrl: string) {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowopen');
    });
    cy.get('#openwindow').click();
    cy.get('@windowopen').should('be.calledWith', newUrl);
  }

  verifyIframeCourseData(courseName: string) {
    this.switchToIframe('#courses-iframe')
      .find('#courses-block')
      .should('be.visible')
      .contains(courseName);
  }
}

export default PracticePage;
