const { defineConfig } = require("cypress");
const { defu } = require("defu");
const defaultConfig = require('./cypress.contact.config');

module.exports = defineConfig(
  defu(
    {
      env: {
        isSp: true
      },
    },
    defaultConfig
  )
);