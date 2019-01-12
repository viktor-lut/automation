exports.config = {

  specs: [
   // './test/test.js',
    './test/bug-form-page-validation.js'
  ],

  exclude: [

  ],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 1,


      browserName: 'chrome'
    }
  ],

  sync: true,

  logLevel: 'silent',

  coloredLogs: true,

  deprecationWarnings: true,

  bail: 0,

  screenshotPath: './errorShots/',

  baseUrl: 'https://reactbugtracker.com/',


  waitforTimeout: 500*10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  services: ['selenium-standalone'],

  framework: 'mocha',

  reporters: ['dot', 'spec', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results'
    }
  },

  mochaOpts: {
   ui: 'bdd',

  },

}
