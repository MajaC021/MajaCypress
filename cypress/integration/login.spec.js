/// <reference types="cypress" />
describe("login test", () => {
    it("visit login page", () => {
      cy.visit("/login");
    });
  
    it.only('click on the login button', () => {
      cy.intercept({method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/login",
      }).as('loginRequest')
      cy.loginFromBackend("majacveticanin90@gmail.com", "Majovita1990");
      cy.wait('@loginRequest').then((interceptObj) => {
        console.log('OBJ', interceptObj)
        expect(interceptObj.response.statusCode).eq(200)
      })

      // cy.get('p').should('have.text', 'Bad Credentials')
      // .and('have.css', 'color', 'rgb(114, 28, 36)')
      // .and('have.css', 'border-color', 'rgb(245, 198, 203)')
    });
    it('logout', () => {

      // logout
      cy.get('.nav-link').should('have.length', 3);
      cy.get('.nav-link').eq(3).click();
    })
  
  });