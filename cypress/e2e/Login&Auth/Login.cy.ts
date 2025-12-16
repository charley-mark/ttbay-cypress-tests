describe('ttBay Login', () => {
    before(() => {
        cy.visit('/login');
        cy.url().should("include", "turntabl.net/login");
    })
    context('Successful Login and authentication ', () => {
        it('should allow user to login', () => {
            cy.contains("Login with Microsoft").click()
            cy.signInWithCredentials();
        })
    })
})