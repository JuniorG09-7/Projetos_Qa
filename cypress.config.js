const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      charts: true,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
