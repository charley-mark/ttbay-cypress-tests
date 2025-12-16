/// <reference types="cypress" />
const email = Cypress.env('email');
const password = Cypress.env('password');
    const itemInfo = {
        itemName: "iphone Xr",
        itemTags: "a,b,c",
        itemFeatures: "The iPhone XR display has rounded corners that follows a beautifully curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less)."
    }
declare namespace Cypress {
    interface Chainable<Subject = any> {
        signInWithCredentials(): Chainable<any>;
        CompleteProfile(): Chainable<any>;
        Logout(): Chainable<any>;
        listItem(): Chainable<any>;
        listItemAndFillForm(): Chainable<any>;
        listItemAndFillForm1(): Chainable<any>;
        fillFormCommonSteps(): Chainable<any>; 
        dashboardRoute(): Chainable<any>;
        visitFooterLinks(): Chainable<any>;
        uploadImage(): Chainable<any>; 
        visitDashboardTabs(): Chainable<any>;
        toggleNotification(uttonIndex: number): Chainable<any>;
    }
}
Cypress.Commands.add("signInWithCredentials", () => {
    cy.origin('https://login.microsoftonline.com', () => {
        let email = "mark.tetteh@turntabl.io";
        let password = "Ganyoobi@2023";
        cy.get('input[id="i0116"]').should("exist").type(email)
        cy.contains("Next").should("exist").click()
        cy.get('input[id="i0118"]').type(password)
        cy.get('input[id="idSIButton9"]').should("exist").click()
    });
})
Cypress.Commands.add("CompleteProfile", () => {
    cy.location("pathname").should("eq", "/dashboard/profile")
    cy.get("[data-test='username']").should("exist").type("username")
    cy.get('#location').select('SONNIDOM_HOUSE');
    cy.get('#location').should('have.value', 'SONNIDOM_HOUSE');
    cy.get('[data-test="monday"]').click();
    cy.get('[data-test="tuesday"]').click();
    cy.get('[data-test="save-btn"]').should("exist").click();
    cy.location("pathname").should("eq", "/home");
})
Cypress.Commands.add("Logout", () => {
    cy.wait(5000)
    cy.get('img[data-test="profile-btn"]').should("exist").click();
    cy.contains("Logout").should("exist").click();
    cy.location("pathname").should("eq", "/login");
})
Cypress.Commands.add('fillFormCommonSteps', () => {
    cy.dashboardRoute();
    cy.contains("List an item").should("exist").click();
    cy.get('input[data-test="item-name"]').should("exist").click().type(itemInfo.itemName);
    cy.get('select[data-test="category"]').select('Electronics');
    cy.get('select[data-test="condition"]').select('NEW');
    cy.get('input[data-test="tags"]').should("exist").click().type(itemInfo.itemTags)
});
Cypress.Commands.add('listItemAndFillForm', () => {
    cy.fillFormCommonSteps();
});
Cypress.Commands.add('listItemAndFillForm1', () => {
    cy.fillFormCommonSteps();
    cy.contains("Save Item").should("exist").click();
});
Cypress.Commands.add('dashboardRoute', () => {
    cy.get('img[data-test="profile-btn"]').should("exist").click();
    cy.contains("Dashboard").should("exist").click();
    cy.location("pathname").should("eq", "/dashboard/summary");
})

Cypress.Commands.add("visitFooterLinks", () => {
    cy.contains("Help").should("exist").click();
    cy.location("pathname").should("eq", "/help");
    cy.wait(500)
    cy.get('div[data-test="feedback"]').click();
    cy.location("pathname").should("eq", "/help/feedback")
    cy.wait(500)
    cy.contains("Terms and Conditions").should("exist").click();  
})
Cypress.Commands.add('visitDashboardTabs', () => {
    cy.wait(5000)
    cy.contains("Auctions").should("exist").click();
    cy.location("pathname").should("eq", "/dashboard/auctions");
    cy.wait(5000);
    cy.contains("Drafts").should("exist").click();
    cy.location("pathname").should("eq", "/dashboard/drafts")
    cy.wait(5000);
    cy.contains("Bids").should("exist").click();
    cy.location("pathname").should("eq", "/dashboard/bids")
    cy.wait(500);
    cy.contains("Subscriptions").should("exist").click();
})
Cypress.Commands.add('toggleNotification', () => {
    cy.get('div[data-test="toggle-btn""]').should("exist")
        .each(($element)=> {
        cy.wrap($element).eq(0).click();
        }
    )
});

Cypress.Commands.add("uploadImage", () => {
    cy.get('img[data-test="upload-btn"]').click().attachFile(['/images/iphone12.png', '/images/test.png']);
    //cy.its('response.statusCode').should('be.oneOf', [200, 304])
    cy.wait(50000)
    cy.get('textarea[data-test="description"]').should("exist").click().type(itemInfo.itemFeatures);
    cy.contains("Save Item").should("exist").click();
})

