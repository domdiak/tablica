/// <reference types="Cypress" />

describe("User's email has already been used", () => {
    it("shows an error", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("a[href*='/signup']").click();
        cy.url().should("include", "/signup");
        cy.get("input[type=email]").type("domdiak@gmail.com");
        cy.get("input[type=password]").type("123");
        cy.get("button[type=submit]").click();
        cy.get('[data-cy="errorAlert"]').should(
            "contain",
            "User already exists"
        );
    });
});

describe("User's password is too short", () => {
    it.skip("shows an alert for password to be at least 3 chars", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("a[href*='/signup']").click();
        cy.url().should("include", "/signup");
        cy.get("input[type=email]").type("domdiak@gmail.com");
        cy.get("input[type=password]").type("aa");
        cy.get("button[type=submit]").click();
        cy.get("[id=field-2-feedback]").should(
            "contain",
            "Min length is 3 characters"
        );
    });
});

describe("User can sign up", () => {
    it.skip("user successfully signs up", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("a[href*='/signup']").click();
        cy.url().should("include", "/signup");
        cy.get("input[type=email]").type("ronald2@gmail.com");
        cy.get("input[type=password]").type("123");
        cy.get("button[type=submit]").click();
        cy.getCookie("ACCESS_TOKEN");
        cy.url().should("eq", "http://localhost:3000/");
    });
});
