/// <reference types="cypress" />
import { createPage } from '../page_objects/createPOM';
const { faker } = require('@faker-js/faker');

describe("Create test", () => {

  let userData = {
    randomName: faker.name.firstName(),
    randomEmail: faker.internet.email(),
    randomImageFashion: faker.image.fashion() + '.png',
    randomImageAbstract: faker.image.abstract() + '.png',
    randomPassword: faker.internet.password()
  }
  beforeEach("visit Login page", () => {
    cy.loginFromBackend()
    cy.visit("/");
  });

   it("Add new image without fill input", () => {
    cy.visit("/Create");
    createPage.createImage(userData.randomName, 'd,d,', userData.randomImageFashion)
    createPage.addImage.click();
    createPage.submit.click();

    cy.get('input').eq(2).should('be.visible').invoke('val').should('not.be.empty');
    cy.get('input').eq(3).should('be.visible').invoke('val').should('be.empty');
    cy.get('.fa-trash').should('be.visible')
  })

  it("Create gallery", () => {
    createPage.createImage(userData.randomName, 'd,d,', userData.randomImageAbstract)
    createPage.submit.click();
    cy.visit("/");
    cy.url().should('contain', '/')
    cy.get('img').should('have.attr', 'src').should('include', userData.randomImageAbstract)

  })
  it("Add image", () => {
    cy.visit("/Create");
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/galleries"
    }).as('createGallery')

    createPage.addNewImage(userData.randomName, 'd,d,', userData.randomImageAbstract, userData.randomImageFashion)

    cy.wait('@createGallery').then((interceptObj) => {
    console.log("obj", interceptObj)
    expect(interceptObj.request.body.images[0]).eq(userData.randomImageAbstract)
    expect(interceptObj.request.body.images[1]).eq(userData.randomImageFashion)
    });


    // cy.url().should('contain', '/')
    // cy.visit("/my-galleries");
    // cy.url().should('contain', '/my-galleries')
    // cy.get('h1').then((el) => {
    //   expect(el).contain('My Galleries')
  //})
    
 })
  it("Remove new added image", () => {
    createPage.deleteNewImage(userData.randomName, 'd,d,', userData.randomImageFashion, userData.randomImageAbstract)

    cy.url().should('contain', '/Create')
    cy.get('input').eq(2).should('be.visible').invoke('val').should('not.be.empty');
    cy.get('.fa-trash').should('not.exist')
  })

  //Bug
  it("Move up added image", () => {
    createPage.arrowUpImage(userData.randomName, 'd,d,', userData.randomImageFashion, userData.randomImageAbstract)
    cy.wait(1500);

    cy.url().should('contain', '/Create')
    cy.get('input').eq(2).should('be.visible').invoke('val').should('not.be.empty', 'userData.randomImageAbstract');
    cy.get('input').eq(3).should('be.visible').invoke('val').should('not.be.empty', 'userData.randomImageFashion');

  })

  it("Move down added image", () => {
    

    createPage.arrowDownImage(userData.randomName, 'd,d,', userData.randomImageFashion, userData.randomImageAbstract)


    cy.url().should('contain', '/Create')
    cy.get('input').eq(2).should('be.visible').invoke('val').should('not.be.empty', 'userData.randomImageAbstract');
    cy.get('input').eq(3).should('be.visible').invoke('val').should('not.be.empty', 'userData.randomImageFashion');

  })

  it("Left form create", () => {
    createPage.cancel.click();
    cy.get('input').eq(1).should('not.exist')
    cy.url().should('contain', '/')

  })
})