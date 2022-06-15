import { getDroppableSelector, getHandleSelector } from "./util";

describe("User wants to execute an action with a card", () => {
    beforeEach(() => {
        cy.login("domdiak@gmail.com", "123");
    });

    it("creates a new card", () => {
        cy.get("[data-rbd-droppable-id='Applied']").within(() => {
            return cy.get("button").contains("Add Card").click();
        });
        cy.get("input[type=title]").type("Solutions Engineer");
        cy.get("input[type=description]").type("Salesforce");
        cy.get("input[type=link]").type("www.salesforce.com");
        cy.get("button[type=submit]")
            .should("have.class", "chakra-button css-53gvbz")
            .click();
        cy.url().should("be.equal", "http://localhost:3000/");
    });

    it("gets added to the right category", () => {
        cy.get("[data-rbd-droppable-id='Applied']").within(() => {
            return cy
                .get("[data-rbd-draggable-id='Salesforce']")
                .should("exist");
        });
    });

    it("gets moved to another category", () => {
        cy.get(getDroppableSelector()).eq(1).as("first-list");

        cy.get(getDroppableSelector()).eq(2).as("second-list");

        cy.get("@first-list")
            .find(getHandleSelector())
            .last()
            .should("contain", "Salesforce")
            .focus()
            .trigger("keydown", { keyCode: 32 })
            .trigger("keydown", {
                keyCode: 39,
                force: true,
            })
            .trigger("keydown", { keyCode: 32, force: true });
        cy.get("@first-list").should("not.contain", "Salesforce");
        cy.get("@second-list").should("contain", "Salesforce");
    });

    it("gets removed", () => {
        cy.get("[data-rbd-droppable-id='Applied']").as("list");
        cy.get("@list").within(() => {
            return cy.get("[data-rbd-draggable-id='Salesforce']").as("card");
        });

        // Opens the dropdown menu
        cy.get("@card").within(() => {
            return cy
                .get("[data-cy='cardMenuBtn']")
                .click()
                .get("[data-cy='cardMenuItem']")
                .last()
                .click({ force: true });
        });

        // Removes a card
        cy.get('[data-cy="modal"]')
            .children()
            .children()
            .contains("Confirm")
            .click();

        cy.get("@list").should("not.contain", "Salesforce");
    });
});
