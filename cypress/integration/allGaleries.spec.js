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

  it("Search gallery", () => {
    allGalleriesPage.search('Global Mobility Administrator')
    var fromSearch = allGalleriesPage.searchGallery.should('be.visible').invoke('val').should('not.be.empty', 'Global Mobility Administrator');
    fromSearch.should('contain', 'Global Mobility Administrator')

    cy.get('h2').should(($h2) => {
      expect($h2.first()).to.contain('Global Mobility Administrator')  
    })
    cy.get('p').should(($p) => {
      expect($p.first()).to.contain('marko pzs')
    })
  })
  it("Pagination Check", () => {

    cy.get('.cell').should('have.length', 10)
  });
  it("Load button Check", () => {

    allGalleriesPage.loadBtn.click();
    cy.get('.cell').should('have.length', 20)
  });
})