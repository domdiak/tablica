/// <reference types="Cypress" />

describe("Kanban app", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("renders the logo", () => {
        cy.contains("Logo");
    });
    it("renders the signin form", () => {
        cy.get("form").submit();
    });
});
