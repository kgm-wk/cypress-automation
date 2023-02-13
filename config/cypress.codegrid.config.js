const { defineConfig } = require("cypress");
const { defu } = require("defu");
const defaultConfig = require('./cypress.common.config');

module.exports = defineConfig(
  defu(
    {
      video: true,
      env: {
        pageType: 'codegrid',
        visitPath: '1.html',
      },
      e2e: {
        baseUrl: `https://cdn.codegrid.net/2017-testcafe/demo`,
      },
    },
    defaultConfig
  )
);
