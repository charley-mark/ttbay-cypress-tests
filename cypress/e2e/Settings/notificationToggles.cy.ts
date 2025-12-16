describe("Notification Toggle", () => {
    before(() => {
        cy.visit('/login');
        cy.url().should("include", "turntabl.net/login");
        cy.contains("Login with Microsoft").click();
        cy.wait(500);
        cy.signInWithCredentials(); 
    })
    context("Toggle all notification buttons", () => {
        it("should allow the user to toggle off all notification buttons", () => {
            cy.wait(10000)
            cy.get('img[data-test="profile-btn"]').should("exist").click();
            cy.contains("Settings").should("exist").click();
            cy.location("pathname").should("eq","/dashboard/account-settings")
            cy.toggleNotification(0);
            cy.get('lib-toastify-toast[class="toast toast--success"]').should("exist");
        })
    })
})

