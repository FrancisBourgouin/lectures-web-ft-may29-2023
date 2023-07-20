/// <reference types="cypress" />


describe("Weather App End to End Tests", () => {
  it("should be able to enter a city in the form and view the weather", () => {
    // ...
    cy.visit("/")

    cy.get('header > h1').should("have.text", "Super Weather App 🌩️🌪️🌞")

    cy.get('section form input').type("Montréal")

    cy.get("section form button").click()

    cy.get(':nth-child(3) > h1').should("have.text", "Weather for Montréal")

    cy.get('section form input').should("have.value", "")
  })
  it("should be able to click on a button and view the weather, after searching for a city", () => {
    cy.visit("/")

    cy.get('header > h1').should("have.text", "Super Weather App 🌩️🌪️🌞")

    cy.get('section form input').type("Montréal")

    cy.get("section form button").click()

    cy.get('section form input').type("Toronto")

    cy.get("section form button").click()

    cy.get('ul > :nth-child(1) > button').click()

    cy.get(':nth-child(3) > h1').should("have.text", "Weather for Montréal")

    cy.get('section form input').should("have.value", "")
  })
  it("it should be funky", () => {
    cy.visit("https://google.com")


    cy.get('#APjFqb').type("Einsten-Rosen Bridge{enter}")

    cy.get(':nth-child(1) > .MjjYud > .g > .GLI8Bc > .jGGQ5e > .yuRUbf > a > .LC20lb').should("contain.text", "Wormhole")
  })
})