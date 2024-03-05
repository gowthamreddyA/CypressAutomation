/// <reference types="cypress" />

describe('example to-do app', () => {
    it('Basic Test',() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product').should('have.length',5)
      cy.get('.product:visible').should('have.length',4)
      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    })
    })