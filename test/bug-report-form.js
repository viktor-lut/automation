const { assert } = require('chai');
const login = require('./../helpers/login');
const verificationText = require('./../helpers/verificationText');
const fillForm = require('./../helpers/pre-filled-new-bug-report-form');
const getText = require('./../helpers/verificationText');
const exd = require('./../test-data/expected').bugReportForm;
const gSel = require('./../test-data/selectors');
const bugSel = gSel.bugList;
const formSel = gSel.bugReportForm;
let a = [formSel.summary, formSel.str, formSel.actual, formSel.expected, formSel.assignee,
            formSel.priority, formSel.severity, formSel.repro, formSel.version, formSel.submit];

/*
describe(exd.suite, function () {

    login();

    it('Verify that all Bug form page elements are visible', function () {

        browser.click(bugSel.newBug);
        browser.waitForVisible(formSel.summary);
        for (let i = 0; i < a.length; i++) {
            browser.isVisible(a[i]);
        }
    })

    fillForm();

    it('Verify that when submitting new bug report, Bug Report Form for just created bug will open automatically.', function () {

        browser.click(formSel.submit);
        browser.waitForVisible(formSel.edit);

        assert.equal(browser.isVisible(formSel.edit), true, 'You are not on Bug report form');
    })
});
*/

describe('Bug Report Form | Disabled State', function () {

    login();

    it('Verify that page has the list of “Title - Value” pairs, ' +
        'which contain the information provided during bug-report creation.', function () {
        browser.waitForVisible('.hover-icon');
        $$('.hover-icon')[0].click();
        browser.waitForVisible(formSel.edit);
        $(formSel.summary).getText();
        $$(formSel.summaryVal)[0].getText();


        
    })
})
