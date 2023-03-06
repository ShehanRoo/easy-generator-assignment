import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    BASE_URL: 'https://rahulshettyacademy.com/AutomationPractice/'
  }
});
