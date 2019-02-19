const { assert } = require('chai');
const login = require('./../helpers/login');
const fillBugRepForm = require('./../helpers/fillBugRepForm');
const { verificationCssValue, verificationText } = require('./../helpers/test-helpers');
const exd = require("./../test-data/expected").bugReportForm;
const { bugList, newBugReport, bugReportForm } = require("./../test-data/selectors");
let a = [bugReportForm.sum, bugReportForm.str, bugReportForm.actual, bugReportForm.expected, bugReportForm.assignee,
            bugReportForm.priority, bugReportForm.severity, bugReportForm.repro, bugReportForm.version, newBugReport.submit];

describe(exd.suite, function () {

    // login();


   /* it('Verify that all Bug form page elements are visible', function () {

        browser.click(bugList.newBug);
        browser.waitForVisible(bugReportForm.sum);
        for (let i = 0; i < a.length; i++) {
            browser.isVisible(a[i]);
        }
    })*/



    /*it('Verify that when submitting new bug report, Bug Report Form for just created bug will open automatically.', function () {

        browser.click(bugList.newBug);
        browser.waitForVisible(bugReportForm.sum);
        fillBugRepForm();
        browser.click(newBugReport.submitBtn);
        browser.waitForVisible(bugReportForm.edit);

        assert.equal(browser.isVisible(bugReportForm.edit), true, 'You are not on Bug report form');
    });*/

    login(true);

    it('Verify that Bug report form can also be reached if open any bug from Bug List page.', function () {

        assert.equal(browser.isVisible(bugReportForm.edit), true, 'You are not on Bug report form');
    });
});

describe('Bug Report Form | Disabled State', function () {

    describe('Verify that page has the list of “Title - Value” pairs, which contain the information provided during bug-report creation.', function () {

        Object.keys(exd.titles).map(el =>

            describe(`'${exd.titles[el]}' text`, function () {
                verificationText(bugReportForm.titles[el], exd.titles[el]);
            })
        );

        Object.keys(exd.values).map(el =>

            describe(`'${exd.values[el]}' text`, function () {
                verificationText(bugReportForm.values[el], exd.values[el]);
            })
        );
    });

    describe('Bug Report Form | Titles properties', function () {

        Object.keys(exd.titles).map(el =>

            describe(`'${exd.titles[el]}' text`, function () {
                verificationCssValue(bugReportForm.titles[el], exd.titlesCssProp);
            })
        );

    });

    describe('Bug Report Form | Values properties', function () {

        Object.keys(exd.values).map(el =>

            describe(`'${exd.values[el]}' text`, function () {
                verificationCssValue(bugReportForm.values[el], exd.valuesCssProp);
            })
        );

    });
});


