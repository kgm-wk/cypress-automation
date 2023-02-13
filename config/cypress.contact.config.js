const { defineConfig } = require("cypress");
const { defu } = require("defu");
const defaultConfig = require('./cypress.common.config');

module.exports = defineConfig(
  defu(
    {
      video: true,
      env: {
        pageType: 'contact',
        visitPath: '/contact/',
        hideElement: '#hide_element',
        submitBtn: 'input[name="submit"]'
      },
      e2e: {
        baseUrl: `http://localhost`,
      },
    },
    defaultConfig
  )
);
