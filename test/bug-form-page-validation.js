const { assert } = require('chai');

const exp = require('./../test-data/expected').bfpValid;
const user = require('./../test-data/users');
const selLog = require('./../test-data/selectors').loginFunctionality;
const sel = require('./../test-data/selectors').bfpValid;

describe('Bug-form-page-validation', function () {

    it('Text: “Please fill all the required fields”', function(){
        browser.url('/');
        browser.waitForVisible(selLog.email);
        browser.setValue(selLog.email, user.email);
        browser.setValue(selLog.pass, user.pass);
        browser.click(selLog.loginBtn);
        browser.waitForVisible(sel.firstBug);
        browser.click(sel.firstBug);
        browser.waitForVisible(sel.editBtn);
        browser.click(sel.editBtn);
        browser.waitForVisible(sel.summary);
       $(sel.summary).setValue([' ', '\uE003']);

        browser.pause(2000);
        browser.click(sel.submitBtn);
        browser.waitForVisible(sel.errorMsg);
        var errorMsg=$(sel.errorMsg).getText();
        assert.equal(errorMsg, exp.errorMsg);

    })

    const MessageLocator = sel.errorMsg;

    it('Verify that  Border color: #f5c6cb', function(){
        let border = $(MessageLocator).getCssProperty('border-bottom-color');
        assert.equal(border.parsed.hex, exp["border-bottom-color"]);
    })
    it('Verify that  Font family: Segoe UI', function(){
        let prop = $(MessageLocator).getCssProperty('font-family');
        assert.equal(prop.value, exp["font-family"]);
    })
    it('VVerify that  Font size: 16px', function(){
        let prop = $(MessageLocator).getCssProperty('font-size');
        assert.equal(prop.value, exp["font-size"]);
    })
    it('Verify that  Font weight: 400', function(){
        let prop = $(MessageLocator).getCssProperty('font-weight');
        assert.equal(prop.value, exp["font-weight"]);
    })
    it('Verify that  Font color: #721c24', function(){
        let prop = $(MessageLocator).getCssProperty('color');
        assert.equal(prop.parsed.hex,exp["color"]);
    })
    it('Verify that  Text is center aligned.', function(){
        let prop = $(MessageLocator).getCssProperty('text-align');
        assert.equal(prop.value, exp["text-align"]        );
    })


});