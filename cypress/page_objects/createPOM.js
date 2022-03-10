/// <reference types="cypress" />
export default class CreatePage {

    get title() { return cy.get('#title') }
    get description() { return cy.get('#description') }
    get btnArrowUp() { return cy.get('.input-buttons').eq(1) }
    get btnArrowDown() { return cy.get('.input-buttons').eq(2) }
    get image() { return cy.get('.input-group') }
    get newImage() { return cy.get('.form-control').eq(3) }
    get addImage() { return cy.get('button').eq(2) }
    get submit() { return cy.get('.btn-custom').eq(0) }
    get cancel() { return cy.get('.btn-custom').eq(1) }
    get removeNewImage() { return cy.get('.fa-trash').eq(1) }

    createImage(title, description, image) {
        this.title.type(title)
        this.description.type(description)
        this.image.type(image)
    }

    addNewImage(title, description, image, image2) {
        this.title.type(title)
        this.description.type(description)
        this.image.type(image)    
        createPage.addImage.click();
        this.newImage.type(image2)   
        createPage.submit.click();
    }

    deleteNewImage(title, description, image, image2) {
        this.title.type(title)
        this.description.type(description)
        this.image.type(image)    
        createPage.addImage.click();
        this.newImage.type(image2)   
        createPage.removeNewImage.click();
    }

    arrowUpImage(title, description, image, image2) {
        this.title.type(title)
        this.description.type(description)
        this.image.type(image)    
        createPage.addImage.click();
        this.newImage.type(image2)   
        createPage.btnArrowUp.click();
    }

    arrowDownImage(title, description, image, image2) {
        this.title.type(title)
        this.description.type(description)
        this.image.type(image)    
        createPage.addImage.click();
        this.newImage.type(image2)   
        createPage.btnArrowDown.click();
    }
}
export const createPage = new CreatePage();