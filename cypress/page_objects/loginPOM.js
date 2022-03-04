/// <reference types="cypress" />
export default class LoginPage {

    get firstName(){ return cy.get('#first-name')}
    get lastName(){ return cy.get('#last-name')}
    get email(){ return cy.get('#email')}
    get password(){ return cy.get('#password')}
    get passwordConfirmation(){ return cy.get('#password-confirmation')}
    get submitBtn(){ return cy.get('button')}

register(firstName, lastName, email, password){
    this.firstName.type(firstName)
    this.lastName.type(lastName)
    this.email.type(email)
    this.password.type(password)
    this.passwordConfirmation.type(password)
}

}

export const loginPage = new LoginPage();

// cy.get('#first-name').type('Majaaa');
//       cy.get('#last-name').type('MajaaaMaja');
//       cy.get('#email').type('dddddlllllleeeeewww@gmail.com');
//       cy.get('#password').type('randum123456');
//       cy.get('#password-confirmation').type('randum123456');
//       cy.get('.form-check-input').type('[type="checkbox"]').check();
//       cy.get('button').click();