const { assert } = require('chai');
const login = require('./../helpers/login');
const fillBugRepForm = require('./../helpers/fillBugRepForm');
const fillInputs = require('./../helpers/fillInputs');
const { verificationCssValue, verificationText } = require('./../helpers/test-helpers');
const exd = require("./../test-data/expected").bugReportForm;
const { bugList, newBugReport, bugReportForm } = require("./../test-data/selectors");
let a = [bugReportForm.summary, bugReportForm.str, bugReportForm.actual, bugReportForm.expected, bugReportForm.assignee,
            bugReportForm.priority, bugReportForm.severity, bugReportForm.repro, bugReportForm.version, newBugReport.submit];

/*describe(exd.suite, function () {

    login();

    it('Verify that all Bug form page elements are visible', function () {

        browser.click(bugList.newBug);
        browser.waitForVisible(bugReportForm.summary);
        for (let i = 0; i < a.length; i++) {
            browser.isVisible(a[i]);
        }
    })

    fillBugRepForm();
    it('Verify that when submitting new bug report, Bug Report Form for just created bug will open automatically.', function () {

        browser.click(newBugReport.submit);
        browser.waitForVisible(bugReportForm.edit);

        assert.equal(browser.isVisible(bugReportForm.edit), true, 'You are not on Bug report form');
    })
});*/

describe('Bug Report Form | Disabled State', function () {

    login();

    it('Verify that page has the list of “Title - Value” pairs, ' +
        'which contain the information provided during bug-report creation.', function () {
        browser.waitForVisible('.hover-icon');
        $$('.hover-icon')[0].click();
        browser.waitForVisible(bugReportForm.edit);
        $(bugReportForm.summary).getText();
        $$(bugReportForm.summaryVal)[0].getText();


        
    })
})
