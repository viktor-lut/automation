const { loginFunctionality, bugList, bugReportForm } = require('./../test-data/selectors');
const user = require('./../test-data/users');

module.exports =
  function (openBug) {
    return it('PREREQUISITE: Login', function () {
      browser.url('/');
      browser.waitForVisible(loginFunctionality.email);
      browser.setValue(loginFunctionality.email, user.email);
      browser.setValue(loginFunctionality.pass, user.pass);
      browser.click(loginFunctionality.loginBtn);
      browser.waitForVisible(bugList.newBug);
      if (openBug) {
          browser.waitForVisible('span*=Lorem');
          $('span*=Lorem').click();
          browser.waitForVisible(bugReportForm.edit);
      };
    });
  };