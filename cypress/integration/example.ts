/// <reference path="../support/index.d.ts"/>

describe('Cypress TS',() => {

    it.skip('should go to Google', () => {
        cy.google();
    })

    it('should change light/dark theme on willian justen site', ()=> {
        cy.visit('https://willianjusten.com.br/');
        cy.findByTitle(/Mudar o Tema/i).click(); 
        cy.get('.light').should('exist');
        cy.findByTitle(/Mudar o Tema/i).click(); 
        cy.get('.dark').should('exist');
    })
})