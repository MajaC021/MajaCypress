/// <reference types="cypress" />
export default class RegisterPage {

    get firstName() { return cy.get('#first-name') }
    get lastName() { return cy.get('#last-name') }
    get email() { return cy.get('#email') }
    get password() { return cy.get('#password') }
    get passwordConfirmation() { return cy.get('#password-confirmation') }
    get checkBox() { return cy.get('.form-check-input').check() }
    get button() { return cy.get('button') }

    registerUserWithoutFillFields() { }

    registerUserWithoutTermsConditions(firstName, lastName, email, password, passwordConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
    }
    registerUserWithoutPassConfirmation(firstName, lastName, email, password, checkBox) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.checkBox.type(checkBox)
    }
    registerUserWithoutPasswordAndPassConfirmation(firstName, lastName, email, password, passwordConfirmation, checkBox) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }

    registerUserWithoutPassword(firstName, lastName, passwordConfirmation, checkBox) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }

    registerUserWithoutLastName(firstName, email, password, passwordConfirmation, checkBox) {
        this.firstName.type(firstName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }

    registerUserWithoutFirstName(lastName, email, password, passwordConfirmation, checkBox) {
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }

    registerUserWithoutEmail(firstName, lastName, password, passwordConfirmation, checkBox) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }

    registerUserInvalidEmail(firstName, lastName, email, password, passwordConfirmation, checkBox) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }

    registerUserInvalidEmailDomen(firstName, lastName, email, password, passwordConfirmation, checkBox) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }

    registerValid(firstName, lastName, email, password, passwordConfirmation, checkBox) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.checkBox.type(checkBox)
    }
}
export const registerPage = new RegisterPage();