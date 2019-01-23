const { assert } = require('chai');
const exd = require('./../test-data/expected').bugReportForm;
const sel = require('./../test-data/selectors').bugReportForm;
let value = 'test';

describe('Bug report form', function () {

    it('Verify that when submitting new bug report, Bug Report Form for just created bug will open automatically.', function(){

        browser.url('/');
        browser.waitForVisible('#email');
        browser.setValue(sel.email, user.email);
        // browser.pause(2000);
        browser.setValue('#pass', value);
        browser.click('#login');
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