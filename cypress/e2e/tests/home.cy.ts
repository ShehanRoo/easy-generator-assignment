/// <reference types="cypress" />
import { PracticePage, HomePage, AcademyHomePage } from '../pages';

describe('Verify Home page functionality', () => {
  const practicePage = new PracticePage();
  const homePage = new HomePage();
  const academyHomePage = new AcademyHomePage();

  const baseUrl: string = Cypress.env('BASE_URL');
  const newWindowUrl: string = 'http://www.qaclickacademy.com/';
  const homePageUrl: string = 'https://www.rahulshettyacademy.com';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Verify mouse hover function', () => {
    practicePage.mouseHover('Reload');
  });

  it('Verify alert box content', () => {
    practicePage.triggerAlert('Shehan');
    practicePage.verifyAlertMessage('Hello Shehan');
  });

  it('Verify table scrollability', () => {
    practicePage.verifyScrollableTable();
  });

  it('Verify new tab button destination page', () => {
    practicePage.clickOpenTabButton();
    practicePage.verifyUrl(homePageUrl);
    homePage.verifyLoginButtonIsVisible('Login');
    homePage.verifySignUpButtonIsVisible('Register');
  });

  it('Verify new window button destination page', () => {
    practicePage.clickOpenWindowButton(newWindowUrl);
    practicePage.switchWindow(newWindowUrl);
    practicePage.verifyUrl(newWindowUrl);
    academyHomePage.verifyMarqueeIsVisible();
  });

  it('Verify iframe elements', () => {
    practicePage.verifyIframeContent();
  });

  it('Verify stubbed API response', () => {
    practicePage.verifyIframeCourseData('All-Access Membership-Complete');
    cy.intercept('GET', '/api/course', {
      fixture: 'coursesRsp.json'
    });
    practicePage.reloadPage();
    practicePage.verifyIframeCourseData('Cypress Automation Stubbed API');
  });
});
