describe("Dashboard tab routing", () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.contains("Login with Microsoft").click();
        cy.wait(5000);
        cy.signInWithCredentials();
    })
    context("Successful route to various tabs on the dashboard Page", () => {
        it("should route the user to respective pages once their tabs are clicked", () => {
            cy.wait(50000)
            cy.dashboardRoute();
            cy.visitDashboardTabs();
        })
    }) 
})