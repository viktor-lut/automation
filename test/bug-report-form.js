const { assert } = require('chai');
const exd = require('./../test-data/expected').bugReportForm;
const gSel = require('./../test-data/selectors');
const loginSel = gSel.loginFunctionality;
const bugSel = gSel.bugList;
const formSel = gSel.bugReportForm;
const user = require('./../test-data/users');
const value = 'test';

describe(exd.suite, function () {

    it('Verify that when submitting new bug report, Bug Report Form for just created bug will open automatically.', function(){

        browser.url('/');
        browser.waitForVisible(loginSel.email);
        browser.setValue(loginSel.email, user.email);
        // browser.pause(2000);
        browser.setValue(loginSel.pass, user.pass);
        browser.click(loginSel.loginBtn);
        // browser.pause(3000);
        browser.waitForVisible(bugSel.newBug);
        browser.click(bugSel.newBug);
        // browser.pause(2000);
        browser.waitForVisible(formSel.summary);
        browser.setValue(formSel.summary, value);
        browser.setValue(formSel.str, value);
        browser.setValue(formSel.actual, value);
        browser.setValue(formSel.expected, value);

        browser.selectByValue(formSel.assignee, 'Anastasia Shibanova');

        /*browser.selectByValue(formSel.assignee, 'Anastasia Shibanova');
        browser.selectByValue(formSel.priority, 'Low');
        browser.selectByValue(formSel.severity, 'Minor');
        browser.selectByValue(formSel.repro, 'Always');
        browser.selectByValue(formSel.version, '0.2');
        // browser.click(formSel.submit);
        browser.pause(5000);*/
        let edit = browser.isVisible('=Edit');

        assert.equal(browser.isVisible('=Edit'), true, 'You are not on Bug report form');
    })

    // it('Global Header exists', function(){
    //     assert.equal($(".custom-header").isVisible(), true);
    // })

});