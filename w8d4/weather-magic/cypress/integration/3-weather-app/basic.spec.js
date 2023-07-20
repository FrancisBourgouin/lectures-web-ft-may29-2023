/// <reference types="cypress" />


describe("Basic Weather App Functionality", () => {
  it("should load a bsic website with the title", () => {
    cy.visit("http://localhost:3000/")

    cy.get('header > h1').should("have.text", "Super Weather App 🌩️🌪️🌞")
  })
})