const { assert } = require('chai');
const login = require('./../helpers/login');
const fillForm = require('./../helpers/pre-filled-new-bug-report-form');
const exd = require('./../test-data/expected').bugReportForm;
const gSel = require('./../test-data/selectors');
const bugSel = gSel.bugList;
const formSel = gSel.bugReportForm;
let a = [formSel.summary, formSel.str, formSel.actual, formSel.expected, formSel.assignee,
            formSel.priority, formSel.severity, formSel.repro, formSel.version, formSel.submit];

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

    //it('Global Header exists', function () {
        //     assert.equal($(".custom-header").isVisible(), true);
        // })

    });
