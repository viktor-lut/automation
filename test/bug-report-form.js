const { assert } = require('chai');
const exd = require('./../test-data/expected').bugReportForm;
const gSel = require('./../test-data/selectors');
const loginSel = gSel.loginFunctionality;
const bugSel = gSel.bugReportForm;
const user = require('./../test-data/users');
const value = 'test';

describe('Bug report form', function () {

    it('Verify that when submitting new bug report, Bug Report Form for just created bug will open automatically.', function(){

        browser.url('/');
        browser.waitForVisible(sel.email);
        browser.setValue(sel.email, user.email);
        // browser.pause(2000);
        browser.setValue(sel.pass, user.pass);
        browser.click(sel.loginBtn);
        // browser.pause(3000);
        browser.waitForVisible('#new_bug');
        browser.click('#new_bug');
        // browser.pause(2000);

        browser.setValue('.form-control', value);
        browser.setValue('.form-control', value);

        browser.selectByValue('placeholder =Assignee *', 'Anastasia Shibanova');
        browser.selectByValue('=Priority *', 'Low');
        browser.selectByValue('=Severity *', 'Minor');
        browser.selectByValue('=Repro *', 'Always');
        browser.selectByValue('=Version', '0.2');
        browser.click('#todo_add');
        // browser.pause(5000);
        let edit = browser.isVisible('=Edit');

        assert.equal(browser.isVisible('=Edit'), true, 'You are not on Bug report form');
    })

    // it('Global Header exists', function(){
    //     assert.equal($(".custom-header").isVisible(), true);
    // })

});