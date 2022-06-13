/// <reference types="Cypress" />

describe("User can log in", () => {
    it("user successfully logs in", () => {
        cy.visit("/");
        cy.get("input[type=email]").type("domdiak@gmail.com");
        cy.get("input[type=password]").type("123");
        cy.get("button[type=submit]").click();
        cy.getCookie("ACCESS_TOKEN");
        cy.url().should("eq", "http://localhost:3000/");
    });
});

describe("User types wrong password", () => {
    it("shows error", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("input[type=email]").type("domdiak@gmail.com");
        cy.get("input[type=password]").type("1234");
        cy.get("button[type=submit]").click();
        cy.get('[data-cy="errorAlert"]').should("be.visible");
    });
});

describe("User types wrong user e-mail", () => {
    it("shows error", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("input[type=email]").type("dodiak@gmail.com");
        cy.get("input[type=password]").type("123");
        cy.get("button[type=submit]").click();
        cy.get('[data-cy="errorAlert"]').should("be.visible");
    });
});

describe("User doesn't input any password", () => {
    it("shows reminder 'Required field'", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("input[type=email]").type("domdiak@gmail.com");
        cy.get("button[type=submit]").click();
        cy.get("[id=field-2-feedback]").should("be.visible");
    });
});
describe("User doesn't input any email", () => {
    it("shows reminder 'Required field'", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("input[type=password]").type("123");
        cy.get("button[type=submit]").click();
        cy.get("[id=email-feedback]").should("be.visible");
    });
});
