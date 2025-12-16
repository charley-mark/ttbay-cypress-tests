describe('ttBay Logout', () => {
    before(() => {
        cy.visit('/login');
        cy.url().should("include", "turntabl.net/login");
        cy.contains("Login with Microsoft").click();
        cy.signInWithCredentials();
    })
    context('Successful Logout of the ttBay application ', () => {
        it('should allow user to logout of the ttBay application', () => {
            cy.Logout();
        })
    })
})