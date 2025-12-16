describe('ttBay Registration', () => {
    before(() => {
        cy.visit('/login');
        cy.url().should("include", "turntabl.net/login");
    })
    context('Successful registration and authentication ', () => {
        it('should allow user to login successfully for the first time', () => {
            cy.contains("Login with Microsoft").click();
            cy.signInWithCredentials();
            cy.wait(50000)
            cy.contains("Accept").should("exist").click();
            cy.CompleteProfile();
        })
    })
})

