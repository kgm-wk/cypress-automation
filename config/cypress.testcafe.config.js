const { defineConfig } = require("cypress");
const { defu } = require("defu");
const defaultConfig = require('./cypress.common.config');

module.exports = defineConfig(
  defu(
    {
      video: true,
      env: {
        pageType: 'testcafe',
        visitPath: '',
      },
      e2e: {
        baseUrl: `https://devexpress.github.io/testcafe/example`,
      },
    },
    defaultConfig
  )
);
