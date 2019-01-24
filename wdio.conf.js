exports.config = {

  specs: [
    //'./test/client.js',
    //'./test/registration-design.js',
    //'./test/login-functionality.js',
    //'./test/new-bug-report.js',
      './test/global-footer.js',
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

  waitforTimeout: 10000,

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
    ui: 'bdd'
  },

}
