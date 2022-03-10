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

    var fromSearch = allGalleriesPage.search('Global Mobility Administrator')   
    cy.get('h2').then((el) => {
      expect(el).contain('Global Mobility Administrator')
    })
    cy.get('p').then((el) => {
      expect(el).contain('marko pzs')
    })
});
})