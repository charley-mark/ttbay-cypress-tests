import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    // setting up the base Url
    baseUrl: "https://ttbay.qa.turntabl.net",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // prevents the 403 error from happening
  experimentalModifyObstructiveThirdPartyCode: true,
  
});
