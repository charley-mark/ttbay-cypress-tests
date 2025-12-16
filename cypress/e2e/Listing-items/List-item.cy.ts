describe('ttBay Listing Item', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.url().should("include", "turntabl.net/login");
        cy.contains("Login with Microsoft").click();
        cy.signInWithCredentials();
        cy.wait(5000)
    }) 
    context('Listing an item on the ttBay application', () => {
        it('should allow user to list an item', () => {
            cy.listItemAndFillForm();
            cy.uploadImage();
        })
    })
    TODO: "Validate the form after"; 
    //FIX : I need to add the command to let me insert image
})

