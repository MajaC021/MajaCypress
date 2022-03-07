/// <reference types="cypress" />
describe("login test", () => {
    it("visit gallery page", () => {
      cy.visit("/");
    });
  
    it('click on the login button', () => {
      cy.visit("/");
      // jos jedan nacin za get-ovanje elementa
      // cy.get('a[href="/login"]').click();
      cy.get('.nav-link').eq(1).click();
      cy.get('#email').type('majacveticanin90@gmail.com');
      cy.get('#password').type('jjjj');
      cy.get('button').click();

      cy.get('p').should('have.text', 'Bad Credentials')
      .and('have.css', 'color', 'rgb(114, 28, 36)')
      .and('have.css', 'border-color', 'rgb(245, 198, 203)')
    });
    xit('logout', () => {

      // logout
      cy.get('.nav-link').should('have.length', 3);
      cy.get('.nav-link').eq(3).click();
    })
  
  });