//// <reference types="cypress" />
import { registerPage } from '../page_objects/registerPOM';
const { faker } = require('@faker-js/faker');

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
    registerPage.registerUserInvalidEmail(userData.randomName, userData.randomName, "12345.com", userData.randomPassword, userData.randomPassword, '[type="checkbox"]')

    registerPage.email.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. '12345.com' is missing an '@'.")

    })
  })

  it("Create user with invalid email without domen", () => {
    registerPage.registerUserInvalidEmail(userData.randomName, userData.randomName, "12345@.com", userData.randomPassword, userData.randomPassword)

    registerPage.email.then(($input) => {
      expect($input[0].validationMessage).to.eq("'.' is used at a wrong position in '.com'.")
    })
  })

  it.only("Create user with email has already been taken.", () => {
    registerPage.registerUserInvalidEmail(userData.randomName, userData.randomName, "majac@gmail.com", userData.randomPassword, userData.randomPassword)

    cy.url().should('contain', '/Register');
    cy.get('.alert-danger').should('include.text', 'The email has already been taken.')
    cy.get('p').should('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'border-color', 'rgb(245, 198, 203)')
    
  })

  it("Create user without email", () => {
    registerPage.registerUserWithoutEmail(userData.randomName, userData.randomName, userData.randomPassword, userData.randomPassword)

    registerPage.email.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })

  })

  it("Create user without firstName", () => {
    registerPage.registerUserWithoutFirstName(userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword)

    registerPage.firstName.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
  })

  it("Create user without lastName", () => {
    registerPage.registerUserWithoutLastName(userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword)

    registerPage.lastName.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
  })

  it("Create user without password", () => {

    registerPage.registerUserWithoutPassword(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword)

    registerPage.password.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")

    })
  })

  it.only("Create user with unequal password and password-confirmation", () => {
    registerPage.registerUserWithoutPasswordAndPassConfirmation(userData.randomName, userData.randomName, userData.randomEmail, '123456789', '12345678')

    cy.url().should('contain', '/Register');
    cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')
    cy.get('p').should('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'border-color', 'rgb(245, 198, 203)')
  })

  it.only("Create user with invalid password", () => {
    registerPage.registerUserWithoutPasswordAndPassConfirmation(userData.randomName, userData.randomName, userData.randomEmail, '1234', '12345678')

    cy.url().should('contain', '/Register');
    cy.get('.alert-danger').should('include.text', 'The password must be at least 8 characters.')
    cy.get('p').should('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'border-color', 'rgb(245, 198, 203)')
  })

  it("Create user without password-confirmation", () => {
    registerPage.registerUserWithoutPassConfirmation(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword)

    registerPage.passwordConfirmation.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
  })

  it.only("Create user without Accepted terms and conditions", () => {
    registerPage.registerUserWithoutTermsConditions(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
    cy.url().should('contain', '/Register');
    cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
    cy.get('p').should('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'border-color', 'rgb(245, 198, 203)')
  })
  it("Create user without fill fields", () => {

    cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')
    cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
  })

  it("Create user with valid data", () => {
    registerPage.registerValid(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword)

    cy.get('.nav-link').should('have.length', 4);
    cy.get('.nav-link').eq(2).click();
  })
})