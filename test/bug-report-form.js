const { assert } = require('chai');
const login = require('./../helpers/login');
const randomString = require('./../helpers/randomString');
const fillForm= require('./../helpers/pre-filled-new-bug-report-form');
const exd = require('./../test-data/expected').bugReportForm;
const gSel = require('./../test-data/selectors');
const bugSel = gSel.bugList;
const formSel = gSel.bugReportForm;
let a = [formSel.summary, formSel.str, formSel.actual, formSel.expected, formSel.assignee,
            formSel.priority, formSel.severity, formSel.repro, formSel.version, formSel.submit];

describe(exd.suite, function () {

    login();

    it('Verify that all Bug form page elements are visible', function() {

        browser.click(bugSel.newBug);
        browser.waitForVisible(formSel.summary);
        for(let i = 0; i < x.length; i++){
            browser.isVisible(a[i]);
        }
    })
    it('Verify that when submitting new bug report, Bug Report Form for just created bug will open automatically.', function(){

        fillForm();
        /*for(let i = 0; i < 4; i++){ // because x[3] is the last elem with input.
            browser.setValue(x[i], randomString(150));
        }

        browser.click(formSel.assignee);
        browser.waitForVisible(formSel.testUser, 200);
        browser.click(formSel.testUser);

        browser.click(formSel.priority);
        browser.waitForVisible(formSel.low, 200);
        browser.click(formSel.low);

        browser.click(formSel.severity);
        browser.waitForVisible(formSel.minor, 200);
        browser.click(formSel.minor);

        browser.click(formSel.repro);
        browser.waitForVisible(formSel.always, 200);
        browser.click(formSel.always);

        browser.click(formSel.version);
        browser.waitForVisible(formSel.sprint, 200);
        browser.click(formSel.sprint);*/

        browser.click(formSel.submit);
        browser.waitForVisible(formSel.edit);

        assert.equal(browser.isVisible(formSel.edit), true, 'You are not on Bug report form');
    })

    // it('Global Header exists', function(){
    //     assert.equal($(".custom-header").isVisible(), true);
    // })

});