describe("User main board page", () => {
    it("logs the user in", () => {
        cy.login("domdiak@gmail.com", "123");
    });

    it.skip("should have NavBar displayed", () => {
        cy.get('[data-cy="logo"]').should("exist");
        cy.get('[data-cy="addButton"]').should("exist");
        cy.get('[data-cy="logoutButton"]').should("exist");
        cy.get('[data-cy="homeButton"]').should("exist");
    });

    it("should have categories displayed", () => {
        cy.get("[data-rbd-droppable-id='Shortlist']")
            .should("exist")
            .within(() => {
                return cy.get("button");
            });
        cy.get("[data-rbd-droppable-id='Applied']").should("exist");
        cy.get("[data-rbd-droppable-id='Interview']").should("exist");
        cy.get("[data-rbd-droppable-id='Rejected']").should("exist");
    });
});
