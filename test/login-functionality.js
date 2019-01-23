const { assert } = require('chai');
const exd = require('./../test-data/expected').loginFunctionality;
const sel = require('./../test-data/selectors').loginFunctionality;
const selB = require('./../test-data/selectors').bugList;
const user = require('./../test-data/users');

describe(exd.suite, function () {

    it('Login', function(){
        browser.url('/');
        browser.waitForVisible(sel.email);
        browser.setValue(sel.email, user.email);
        browser.setValue(sel.pass, user.pass);
        browser.click(sel.loginBtn);
        browser.waitForVisible(selB.newBug);
        assert.isTrue($(selB.newBug).isVisible());
    });

});