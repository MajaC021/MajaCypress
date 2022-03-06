/// <reference types="cypress" />
export default class AllGalleriesPage{

    get galeryAppButton() { return cy.get('.nav-link') }
    get allGalleriesButton() { return cy.get('.nav-link').eq(1) }
    get myGalleriesButton() { return cy.get('.nav-link').eq(2) }
    get createGalleryButton() { return cy.get('.nav-link').eq(3) }
    get logout() { return cy.get('.nav-link').eq(3) }
    get search() { return cy.get('.form-control').eq(2) }
    get filterBtn() { return cy.get('.input-button').eq(2) }
    get getFirstGallery() { return cy.get('.box-title').eq(2) }
    get loadBtn() { return cy.get('.btn-custom') }
}
export const allGalleriesPage = new AllGalleriesPage();