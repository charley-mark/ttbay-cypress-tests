import { Context } from "mocha";
describe('ttBay Footer', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.url().should("include", "turntabl.net/login");
    })
    context("Successful navigation to important Links on the footer", () => {
        it("should allow user to navigate to the Help Page", () => {
            cy.contains("Login with Microsoft").click();
            cy.signInWithCredentials();
            cy.wait(50000);
            cy.visitFooterLinks();
        })
    })
})