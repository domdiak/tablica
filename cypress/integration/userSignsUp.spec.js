/// <reference types="Cypress" />

describe("User can sign up", () => {
    it("user successfully signs up", () => {
        cy.visit("/");
        cy.url().should("include", "/signin");
        cy.get("a[href*='/signup']").click();
        cy.url().should("include", "/signup");
        cy.get("input[type=email]").type("ronald@gmail.com");
        cy.get("input[type=password]").type("123");
        cy.get("button[type=submit]").click();
        cy.getCookie("ACCESS_TOKEN");
        cy.intercept("/signin", { fixture: "signupResponse.json" }).as(
            "response"
        );
        cy.intercept("/signin", {
            forceNetworkError: true,
        }).as("boards");
    });
});
// cy.get("button[type=submit]").as("submitBtn");
// cy.get('a[href*="questions"]').click()
// cy.get('.list > li') // Yield the <li>'s in .list
// cy.get("[data-cy=submit]").click();

// cy.get("#user-edit a").click();
// cy.url().should("include", "/users/1/edit"); // => true
// cy.url().should("eq", "http://localhost:8000/users/1/edit");
