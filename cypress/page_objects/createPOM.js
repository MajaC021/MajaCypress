/// <reference types="cypress" />
export default class CreatePage{

    get title() { return cy.get('#title') }
    get description() { return cy.get('#description') }
    get title() { return cy.get('.form-control') }
    get arrowUp() { return cy.get('.input-buttons').eq(1) }
    get arrowDown() { return cy.get('.input-buttons').eq(2) }
    get addimage() { return cy.get('.button').eq(3) }
    get submit() { return cy.get('.btn btn-custom').eq(4) }
    get cancel() { return cy.get('.btn btn-custom').eq(5) }
}
export const createPage = new CreatePage();