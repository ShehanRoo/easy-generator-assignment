class CommonPage {
  clickElement(selector: string) {
    cy.get(selector).click();
  }

  enterText(selector: string, inputText: string) {
    cy.get(selector).type(inputText);
  }

  verifyUrl(urlText: string) {
    cy.url().should('include', urlText);
  }

  // Used to switch window context if new url is launched
  switchWindow(newUrl: string) {
    cy.window().then((win) => {
      win.location.href = newUrl;
    });
  }

  switchToIframe(iFrame: string) {
    return cy.get(iFrame).then((iFrame) => {
      let iFrameBody = iFrame.contents().find('body');
      cy.wrap(iFrameBody).should('be.visible');
    });
  }

  reloadPage() {
    cy.reload();
  }
}

export default CommonPage;
