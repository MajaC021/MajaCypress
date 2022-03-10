/// <reference types="cypress" />
import { allGalleriesPage } from '../page_objects/allGalleriesPOM';
const { faker } = require('@faker-js/faker');

describe("All Galeries test", () => {

  let userData = {
    randomName: faker.name.firstName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password()
  }

  beforeEach("visit All Galeries page", () => {
    cy.visit("/");
    cy.url().should('contain', '/')
  });

  it.only("Search gallery", () => {

    allGalleriesPage.search('Global Mobility Administrator')
    
    cy.get('h2').then((el) => {
      expect({ a: 'Global Mobility Administrator' }).to.eql({ a: 'Global Mobility Administrator' })
    })

    cy.get('p').then((el) => {
      expect({ a: 'marko pzs' }).to.eql({ a: 'marko pzs' })
    })
  });
  it("Pagination Check", () => {

    cy.get('.cell').should('have.length', 10)
  });
  it("Load button Check", () => {

    allGalleriesPage.loadBtn.click();
    cy.get('.cell').should('have.length', 20)
  });
})