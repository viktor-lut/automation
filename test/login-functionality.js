const { assert } = require('chai');
const exd = require('./../test-data/expected').loginFunctionality;
const sel = require('./../test-data/selectors').loginFunctionality;
const selB = require('./../test-data/selectors').bugList;
const user = require('./../test-data/users');

describe(exd.suite, function () {
const assert = require('assert');

describe('LoginFunctionality', function () {

    it('Text - Specify email and password - appears when trying to login with empty login field', function(){
        browser.url('/');
        browser.waitForVisible('#login', 5000);
        const elem = $('#email');
        const value = elem.getValue();
        if (value === '') {
            browser.click('#login');
        }
        let result = browser.waitForVisible('.alert-danger', 5000);
        assert.equal(result, true, 'The text doesn/t appear when field email is empty');
    })

    it('Field Email accepts 1 symbols', function(){
        browser.waitForVisible('#login', 5000);
        let email = $('#email');
        email.addValue('1');
        let value = email.getValue();
        assert.equal(value, '1', 'Email field doesn/t accepts 1 symbol');
    })

    it('Field Email accepts 45 symbols', function(){
        let email = $('#email');
        email.addValue('12345678910abcdEEDFF!@#$%.,12345611111111111');
        browser.pause(5000);
        let value = email.getValue();
        assert.equal(value, '112345678910abcdEEDFF!@#$%.,12345611111111111', 'Email field  doesn/t accept 45 symbols');
    })

    it('Field Email doesn/t accepts 46 symbols', function(){
        let email = $('#email');
        email.addValue('2');
        //console.log(email.addValue());
        let value = email.getValue();
        console.log(value);
        assert.equal(value, '112345678910abcdEEDFF!@#$%.,12345611111111111', 'Email field doesn/t accept 46 symbols');
    })

    it('Text - Specify email and password - appears when trying to login with empty password field', function(){
       const elem = $('#pass');
        const value = elem.getValue();
        if (value === '') {
            browser.click('#login')
        }
        let result = browser.waitForVisible('.alert-danger', 5000);
        assert.equal(result, true, 'The text doesn/t appear when field password is empty');
    })
});

describe('Password field', function () {
    it('------', function(){
        assert.equal();
    })
});

describe('Correct credentials', function () {
    it('------', function(){
        assert.equal();
    })
});

describe('Error design', function () {
   it('error design font-family login-page', function(){
        browser.url('/');
        browser.waitForVisible('#login', 5000);
        browser.click('#login');
        browser.waitForVisible('.alert-local', 5000);
        let elem = $('.alert-local');
        let font = elem.getCssProperty('font-family');
        assert.equal(font.value, 'segoe ui', 'Button has incorrect font-family');
    })

    it('error design background-color login-page', function(){
        let elem = $('.alert-local');
        let background = elem.getCssProperty('background-color');
        assert.equal(background.parsed.hex, '#f8d7da', 'Button has incorrect background color');
    })

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