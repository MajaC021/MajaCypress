//// <reference types="cypress" />
export default class RegisterPage {

    get firstName() { return cy.get('#first-name') }
    get lastName() { return cy.get('#last-name') }
    get email() { return cy.get('#email') }
    get password() { return cy.get('#password') }
    get passwordConfirmation() { return cy.get('#password-confirmation') }
    get checkBox() { return cy.get('.form-check-input').type('[type="checkbox"]')}
    get button() { return cy.get('button') }

    registerUserWithoutTermsConditions(firstName, lastName, email, password, passwordConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)

        registerPage.button.click();
    }
    registerUserWithoutPassConfirmation(firstName, lastName, email, password) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        
        registerPage.checkBox.check();
        registerPage.button.click();
    }
    registerUserWithoutPasswordAndPassConfirmation(firstName, lastName, email, password, passwordConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        
        registerPage.checkBox.check();
        registerPage.button.click();
    }

    registerUserWithoutPassword(firstName, lastName, passwordConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.passwordConfirmation.type(passwordConfirmation)
        
        registerPage.checkBox.check()
        registerPage.button.click();
    }

    registerUserWithoutLastName(firstName, email, password, passwordConfirmation) {
        this.firstName.type(firstName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        
        registerPage.checkBox.check();
        registerPage.button.click();
    }

    registerUserWithoutFirstName(lastName, email, password, passwordConfirmation) {
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        
        registerPage.checkBox.check();
        registerPage.button.click();
    }

    registerUserWithoutEmail(firstName, lastName, password, passwordConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        
        registerPage.checkBox.check();
        registerPage.button.click();
    }

    registerUserInvalidEmail(firstName, lastName, email, password, passwordConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        
        registerPage.checkBox.check();
        registerPage.button.click();
    }

    registerValid(firstName, lastName, email, password, passwordConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        
        registerPage.checkBox.check();
        registerPage.button.click();
    }
}
export const registerPage = new RegisterPage();