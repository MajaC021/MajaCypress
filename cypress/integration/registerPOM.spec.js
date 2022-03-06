/// <reference types="cypress" />
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
    registerPage.button.click();
    registerPage.email.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. '12345.com' is missing an '@'.")

    })
  })

  it("Create user with invalid email without domen", () => {
    registerPage.registerUserInvalidEmail(userData.randomName, userData.randomName, "12345@.com", userData.randomPassword, userData.randomPassword, '[type="checkbox"]')
    registerPage.button.click();

    registerPage.email.then(($input) => {
      expect($input[0].validationMessage).to.eq("'.' is used at a wrong position in '.com'.")
    })
  })
  it("Create user without email", () => {
    registerPage.registerUserWithoutEmail(userData.randomName, userData.randomName, userData.randomPassword, userData.randomPassword, '[type="checkbox"]')
    registerPage.button.click();

    registerPage.email.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })

  })

  it("Create user without firstName", () => {
    registerPage.registerUserWithoutFirstName(userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword, '[type="checkbox"]')
    registerPage.button.click();

    registerPage.firstName.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
  })

  it("Create user without lastName", () => {
    registerPage.registerUserWithoutLastName(userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword, '[type="checkbox"]')
    registerPage.button.click();

    registerPage.lastName.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
  })

  it("Create user without password", () => {

    registerPage.registerUserWithoutPassword(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword, '[type="checkbox"]')
    registerPage.button.click();

    registerPage.password.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")

    })
  })

  it("Create user with unequal password and password-confirmation", () => {
    registerPage.registerUserWithoutPasswordAndPassConfirmation(userData.randomName, userData.randomName, userData.randomEmail, '123456789', '12345678', '[type="checkbox"]')
    registerPage.button.click();

    cy.wait(1000);
    cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')
  })

  it("Create user without password-confirmation", () => {
    registerPage.registerUserWithoutPassConfirmation(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword, '[type="checkbox"]')
    registerPage.button.click();

    registerPage.passwordConfirmation.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
  })

  it("Create user without Accepted terms and conditions", () => {
    registerPage.registerUserWithoutTermsConditions(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
    registerPage.button.click();

    cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
  })
  it("Create user without fill fields", () => {
    registerPage.registerUserWithoutFillFields()
    registerPage.button.click();

    registerPage.firstName.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    registerPage.lastName.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    registerPage.email.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    registerPage.password.then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.")
    })
    cy.wait(1000);
    cy.get('.alert-danger').should('include.text', 'The password confirmation does not match.')

    cy.get('.alert-danger').should('include.text', 'The terms and conditions must be accepted.')
  })

  it.only("Create user with valid data", () => {
    registerPage.registerValid(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword, '[type="checkbox"]')
    registerPage.button.click();

    cy.get('.nav-link').should('have.length', 4);
    cy.get('.nav-link').eq(2).click();
  })
})