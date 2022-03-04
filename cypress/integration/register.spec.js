//// <reference types="cypress" />
const Locator = require('../fixtures/Locator.json');

describe("Registration test", () => {

    it("visit register page", () => {
      cy.visit("/register");
    });
  
    it("Create user with invalid email without '@'", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      Locator.Login.emailField.type('122112.com');
      Locator.Login.passwordField.type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      Locator.Login.submitBtn.click();
    })
  
    it('Assert validation message', () => {
  
      cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. '122112.com' is missing an '@'.")
      })
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password-confirmation").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
    it("Create user with invalid email without domen", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type('122112@.com');
      cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
  
      cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq("'.' is used at a wrong position in '.com'.")
      })
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password-confirmation").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
    it("Create user without email", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
  
      cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password-confirmation").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
    it("Create user without firstName", () => {
      //cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type("nnnnnmmm@gmail.com");
      cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
  
      cy.get('#first-name').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password-confirmation").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
    it("Create user without lastName", () => {
      cy.get('#first-name').type('Majaaa');
      //cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type("nnnnnmmm@gmail.com");
      cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
  
      cy.get('#last-name').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get("#first-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password-confirmation").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
    it("Create user without password", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type("nnnnnmmmeee@gmail.com");
      //cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
  
      cy.get('#password').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password-confirmation").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
  
    it("Create user with unequal password and password-confirmation", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type("nnnnnmmmeee@gmail.com");
      cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('22222');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
      cy.wait(1000);
      cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')
  
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password-confirmation").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
    it("Create user without password-confirmation", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type("nnnnnmmmeee@gmail.com");
      cy.get('#password').type('randum123456');
      //cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
  
      cy.get('#password-confirmation').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get('.form-check-input').type('[type="checkbox"]').uncheck();
    })
  
    it("Create user without Accepted terms and conditions", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type("nnnnnmmmeee@gmail.com");
      cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      //cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();
    })
  
    it('Assert validation message', () => {
      cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
  
      cy.get("#first-name").clear();
      cy.get("#last-name").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password-confirmation").clear();
    })
  
    it("Create user without fill fields", () => {
      cy.get('button').click();

      cy.get('#first-name').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get('#last-name').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get('#password').then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.wait(1000);
      cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')
  
      cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
    })
  
    it('Assert validation message', () => {
  
      
  
    })
  
    it("Create user with valid data", () => {
      cy.get('#first-name').type('Majaaa');
      cy.get('#last-name').type('MajaaaMaja');
      cy.get('#email').type('dddddlllllleeeeewww@gmail.com');
      cy.get('#password').type('randum123456');
      cy.get('#password-confirmation').type('randum123456');
      cy.get('.form-check-input').type('[type="checkbox"]').check();
      cy.get('button').click();

      cy.get('.nav-link').should('have.length', 4);
      cy.get('.nav-link').eq(2).click();
    })
  
    it('Assert Create gallery page', () => {
  
      
    })
  })

  