//// <reference types="cypress" />
import { loginPage } from '../page_objects/loginPOM';
const Locator = require('../fixtures/Locator.json');
const {faker} = require('@faker-js/faker');

describe("Registration test", () => {

let userData = {
randomName: faker.name.firstName(),
randomEmail: faker.internet.email(),
randomPassword: faker.internet.password()
}


    beforeEach("visit Register page", () => {
      cy.wait(5000)
      cy.visit("/Register");
      cy.url().should('contain', '/Register')
    });
  
    it("Create user with invalid email without '@'", () => {
      cy.get(Locator.Register.firstName).type(userData.randomName);
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.emailField).type('122112.com');
      cy.get(Locator.Register.passwordField).type('randum123456');
      cy.get(Locator.Register.passwordConfirmation).type('randum123456');
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitBtn).click();

      cy.get(Locator.Register.email).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. '122112.com' is missing an '@'.")
    })
      
    })
  
    it("Create user with invalid email without domen", () => {
      cy.get(Locator.Register.firstName).type(userData.randomName);
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.email).type('122112@.com');
      cy.get(Locator.Register.password).type(userData.randomPassword);
      cy.get(Locator.Register.passwordConfirmation).type(userData.randomPassword);
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.get(Locator.Register.email).then(($input) => {
        expect($input[0].validationMessage).to.eq("'.' is used at a wrong position in '.com'.")
    })
    })
  
    it("Create user without email", () => {
      cy.get(Locator.Register.firstName).type('Majaaa');
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.password).type('randum123456');
      cy.get(Locator.Register.passwordConfirmation).type('randum123456');
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.get(Locator.Register.email).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    })
  
    it("Create user without firstName", () => {
      //cy.get(Locator.Register.firstName).type('Majaaa');
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.email).type("nnnnnmmm@gmail.com");
      cy.get(Locator.Register.password).type('randum123456');
      cy.get(Locator.Register.passwordConfirmation).type('randum123456');
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.get(Locator.Register.firstName).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    })
  
    it("Create user without lastName", () => {
      cy.get(Locator.Register.firstName).type('Majaaa');
      //cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.email).type("nnnnnmmm@gmail.com");
      cy.get(Locator.Register.password).type('randum123456');
      cy.get(Locator.Register.passwordConfirmation).type('randum123456');
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.get(Locator.Register.lastName).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    })
  
    it("Create user without password", () => {
      cy.get(Locator.Register.firstName).type('Majaaa');
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.email).type("nnnnnmmmeee@gmail.com");
      //cy.get(Locator.Register.password).type('randum123456');
      cy.get(Locator.Register.passwordConfirmation).type('randum123456');
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.get(Locator.Register.password).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    })
  
  
    it("Create user with unequal password and password-confirmation", () => {
      cy.get(Locator.Register.firstName).type('Majaaa');
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.email).type("nnnnnmmmeee@gmail.com");
      cy.get(Locator.Register.password).type('randum123456');
      cy.get(Locator.Register.passwordConfirmation).type('22222');
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.wait(1000);
      cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')
  
    })
  
    it("Create user without password-confirmation", () => {
      cy.get(Locator.Register.firstName).type('Majaaa');
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.email).type("nnnnnmmmeee@gmail.com");
      cy.get(Locator.Register.password).type('randum123456');
      //cy.get(Locator.Register.passwordConfirmation).type('randum123456');
      cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.get(Locator.Register.passwordConfirmation).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
})
  
    it("Create user without Accepted terms and conditions", () => {
      cy.get(Locator.Register.firstName).type('Majaaa');
      cy.get(Locator.Register.lastName).type('MajaaaMaja');
      cy.get(Locator.Register.email).type("nnnnnmmmeee@gmail.com");
      cy.get(Locator.Register.password).type('randum123456');
      cy.get(Locator.Register.passwordConfirmation).type('randum12345');
      //cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
      cy.get(Locator.Register.submitbtn).click();

      cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
    })
  
  
    it("Create user without fill fields", () => {
      cy.get(Locator.Register.submitbtn).click();

      cy.get(Locator.Register.firstName).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get(Locator.Register.lastName).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get(Locator.Register.email).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.get(Locator.Register.password).then(($input) => {
        expect($input[0].validationMessage).to.eq("Please fill out this field.")
      })
      cy.wait(1000);
      cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')
  
      cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
    })
  
    it.only("Create user with valid data", () => {
    //   cy.get(Locator.Register.firstName).type(userData.randomName);
    //   cy.get(Locator.Register.lastName).type('MajaaaMaja');
    //   cy.get(Locator.Register.email).type(userData.randomEmail);
    //   cy.get(Locator.Register.password).type(userData.randomPassword);
    //   cy.get(Locator.Register.passwordConfirmation).type(userData.randomPassword);
    //   cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
    //   cy.get(Locator.Register.submitbtn).click();
loginPage.register(userData.randomName, "hshsh", userData.randomEmail, userData.password)
        cy.get(Locator.Register.checkBox).type('[type="checkbox"]').check();
        cy.get(Locator.Register.submitbtn).click();

        cy.get('.nav-link').should('have.length', 3);
        cy.get('.nav-link').eq(2).click();
    })
  })

  