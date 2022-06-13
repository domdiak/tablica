// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
    cy.visit("/");
    cy.url().should("include", "/signin");
    cy.get("input[type=email]").type("domdiak@gmail.com");
    cy.get("input[type=password]").type("123");
    cy.get("button[type=submit]").click();
    cy.url().should("eq", "http://localhost:3000/");
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("getBySel", (selector, ...args) => {
//     return cy.get(`[data-test=${selector}]`, ...args);
// });
