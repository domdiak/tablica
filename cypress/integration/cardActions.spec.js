import {
    getDroppableSelector,
    getHandleSelector,
    getDraggableSelector,
} from "./util";

describe("User wants to execute an action with a card", () => {
    before(() => {
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
        cy.wait(3000);
    });

    it.skip("gets added to the right category", () => {
        cy.get("[data-rbd-droppable-id='Applied']").within(() => {
            return cy
                .get("[data-rbd-draggable-id='Salesforce']")
                .should("exist");
        });
    });

    it.skip("gets moved to another category", () => {
        cy.get(getDroppableSelector()).eq(1).as("first-list");

        cy.get(getDroppableSelector()).eq(2).as("second-list");

        cy.get("@first-list")
            .find(getHandleSelector())
            .first()
            .should("contain", "Klarna")
            .focus()
            .trigger("keydown", { keyCode: 32 })
            .trigger("keydown", {
                keyCode: 39,
                force: true,
            })
            .trigger("keydown", { keyCode: 32, force: true });
        cy.get("@first-list").should("not.contain", "Klarna");

        cy.get("@second-list").should("contain", "Klarna");
    });

    it("gets removed", () => {
        cy.get("[data-rbd-droppable-id='Applied']").as("first-list");

        cy.get("@first-list")
            .find(getDraggableSelector())
            .should("contain", "Klarna")
            .focus();
    });
});
