const { assert } = require('chai');

const exd = require('./../test-data/expected').loginFunctionality;

const {  loginFunctionality, bugList, registration } = require('./../test-data/selectors');
const randomString = require('./../helpers/randomString');
const { verificationCssValue } = require('./../helpers/test-helpers');


const user = require('./../test-data/users');

describe(exd.suite, function () {

    it('Email accepts 1 symbol', function () {
        browser.url('/');
        browser.waitForVisible(loginFunctionality.loginBtn, 3000);
        $(loginFunctionality.email).setValue(randomString(loginFunctionality.minS));
        let result = $(loginFunctionality.email).getValue();
        assert.equal(result.length, exd.expMinLength, 'Email field doesn/t accepts 1 letter');
    });

    it('Email accepts 45 symbols', function(){
         browser.clearElement(loginFunctionality.email);
         $(loginFunctionality.email).setValue(randomString(loginFunctionality.maxS));
         let result = $(loginFunctionality.email).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Email field  doesn/t accept 45 symbols');
     });

     it('Field Email doesn/t accepts 46 symbols', function(){
         browser.clearElement(loginFunctionality.email);
         $(loginFunctionality.email).setValue(randomString(loginFunctionality.maxS+1));
         let result = $(loginFunctionality.email).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Email field doesn/t accept 46 symbols')

     });

     it('Text - Specify email and password - when login is empty', function(){
         $(loginFunctionality.email).setValue(['a', '\uE003']);
         $(loginFunctionality.pass).setValue(randomString(exd.expMinLength));
         browser.click(loginFunctionality.loginBtn);
         browser.waitForVisible(loginFunctionality.loginBtn, 3000);
         assert.isTrue($(loginFunctionality.alertSps).isVisible());
    });

    it('Text - Specify email and password - when login is wrong', function(){
        browser.clearElement(loginFunctionality.email);
        browser.clearElement(loginFunctionality.pass);
        browser.setValue(loginFunctionality.email, user.email +'a');
        browser.setValue(loginFunctionality.pass, user.pass);
        browser.click(loginFunctionality.loginBtn);
        assert.isTrue(browser.waitForVisible(loginFunctionality.alertDntEx,5000));
    });
});

 describe('Password field', function () {

     it('Password accepts 1 symbol', function () {
         browser.url('/');
         browser.waitForVisible(loginFunctionality.loginBtn, 3000);
         $(loginFunctionality.pass).setValue(randomString(loginFunctionality.minS));
         let result = $(loginFunctionality.pass).getValue();
         assert.equal(result.length, exd.expMinLength, 'Password field doesn/t accepts 1 letter');
     });

     it('Password accepts 45 symbols', function(){
         browser.clearElement(loginFunctionality.pass);
         $(loginFunctionality.pass).setValue(randomString(loginFunctionality.maxS));
         let result = $(loginFunctionality.pass).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Password field  doesn/t accept 45 symbols');
     });

     it('Password doesn/t accepts 46 symbols', function(){
         browser.clearElement(loginFunctionality.pass);
         $(loginFunctionality.pass).setValue(randomString(loginFunctionality.maxS+1));
         let result = $(loginFunctionality.pass).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Password field doesn/t accept 46 symbols');
     });

     it('Text - Specify email and password - when password is empty', function(){
         $(loginFunctionality.pass).setValue(['a', '\uE003']);
         $(loginFunctionality.email).setValue(randomString(exd.expMinLength));
         browser.click(loginFunctionality.loginBtn);
         assert.isTrue(browser.waitForVisible(loginFunctionality.alertSps, 3000));
     });

     it('Text - Specify email and password - when password is wrong', function(){
         browser.clearElement(loginFunctionality.email);
         browser.clearElement(loginFunctionality.pass);
         browser.setValue(loginFunctionality.email, user.email);
         browser.setValue(loginFunctionality.pass, user.pass + 'a');
         browser.click(loginFunctionality.loginBtn);
         assert.isTrue(browser.waitForVisible(loginFunctionality.alertPassIncrt, 3000));
     });

     it('Symbols in password field are replaced by bullets', function () {
         let result = $(loginFunctionality.pass).getCssProperty('-webkit-text-security');
         assert.equal(result.property, exd.bulletsPass, 'Symbols in password are not replaced by bullets.');
     });
 });

describe('Error design', function () {
    browser.url('/');
    browser.waitForVisible(loginFunctionality.loginBtn, 3000);
    verificationCssValue(loginFunctionality.alert, exd.errorCss);
});

describe('Correct credentials', function () {
    it('Log into the system', function(){
        browser.url('/');
        browser.waitForVisible(loginFunctionality.email);
        browser.setValue(loginFunctionality.email, user.email);
        browser.setValue(loginFunctionality.pass, user.pass);
        browser.click(loginFunctionality.loginBtn);
        assert.isTrue(browser.waitForVisible(bugList.newBug));
    });
});

describe('Registration page exists', function () {
    it('Registration button Clickable and redirects to the right page', function(){
        browser.url('/');
        browser.waitForVisible(loginFunctionality.registrationBtn, 3000);
        browser.click(loginFunctionality.registrationBtn);
        assert.equal(browser.waitForVisible(registration.buttonIds.Back, 1500), true, 'Button Registration is not clicked');
    })
});
