const { assert } = require('chai');
const exd = require('./../test-data/expected').loginFunctionality;
const sel = require('./../test-data/selectors').loginFunctionality;
const login = require('./../helpers/login');
const randomString = require('./../helpers/randomString');
const selB = require('./../test-data/selectors').bugList;
const selR = require('./../test-data/selectors').registrationDesign;
const user = require('./../test-data/users');

describe(exd.suite, function () {

    it('Email accepts 1 symbol', function () {
        browser.url('/');
        browser.waitForVisible(sel.loginBtn, 3000);
        $(sel.email).setValue(randomString(sel.minS));
        let result = $(sel.email).getValue();
        assert.equal(result.length, exd.expMinLength, 'Email field doesn/t accepts 1 letter');
    });

    it('Email accepts 45 symbols', function(){
        browser.clearElement(sel.email);
        $(sel.email).setValue(randomString(sel.maxS));
        let result = $(sel.email).getValue();
        assert.equal(result.length, exd.expMaxLength, 'Email field  doesn/t accept 45 symbols');
    });

    it('Field Email doesn/t accepts 46 symbols', function(){
        browser.clearElement(sel.email);
        $(sel.email).setValue(randomString(sel.maxS+1));
        let result = $(sel.email).getValue();
        assert.equal(result.length, exd.expMaxLength, 'Email field doesn/t accept 46 symbols');
    });

    it('Text - Specify email and password - when login is empty', function(){
        browser.clearElement(sel.email);
        browser.click(sel.loginBtn);
        browser.waitForVisible(sel.loginBtn, 3000);
        assert.isTrue($(sel.alertSps).isVisible());
    });

    it('Text - Specify email and password - when login is wrong', function(){
        browser.clearElement(sel.email);
        browser.clearElement(sel.pass);
        browser.setValue(sel.email, user.email +'a');
        browser.setValue(sel.pass, user.pass);
        browser.click(sel.loginBtn);
        assert.isTrue(browser.waitForVisible(sel.alertDntEx, 3000));
    });
});

 describe('Password field', function () {

     it('Password accepts 1 symbol', function () {
         browser.url('/');
         browser.waitForVisible(sel.loginBtn, 3000);
         $(sel.pass).setValue(randomString(sel.minS));
         let result = $(sel.pass).getValue();
         assert.equal(result.length, exd.expMinLength, 'Password field doesn/t accepts 1 letter');
     });

     it('Password accepts 45 symbols', function(){
         browser.clearElement(sel.pass);
         $(sel.pass).setValue(randomString(sel.maxS));
         let result = $(sel.pass).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Password field  doesn/t accept 45 symbols');
     });

     it('Password doesn/t accepts 46 symbols', function(){
         browser.clearElement(sel.pass);
         $(sel.pass).setValue(randomString(sel.maxS+1));
         let result = $(sel.pass).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Password field doesn/t accept 46 symbols');
     });

     it('Text - Specify email and password - when password is empty', function(){
         browser.clearElement(sel.pass);
         browser.click(sel.loginBtn);
         assert.isTrue(browser.waitForVisible(sel.alertSps, 3000));
     });

     it('Text - Specify email and password - when password is wrong', function(){
         browser.clearElement(sel.email);
         browser.clearElement(sel.pass);
         browser.setValue(sel.email, user.email);
         browser.setValue(sel.pass, user.pass + 'a');
         browser.click(sel.loginBtn);
         assert.isTrue(browser.waitForVisible(sel.alertPassIncrt, 3000));
     });

     it('Symbols in password field are replaced by bullets', function () {
         let result = $(sel.pass).getCssProperty('-webkit-text-security');
         assert.equal(result.property, exd.bulletsPass, 'Symbols in password are not replaced by bullets.');
     });
 });

describe('Error design', function () {

   it('error font-family login-page', function(){
        browser.url('/');
        browser.waitForVisible(sel.loginBtn, 3000);
        browser.click(sel.loginBtn);
        browser.waitForVisible(sel.alert, 3000);
        let font = $(sel.alert).getCssProperty('font-family');
        assert.equal(font.value, exd.errorCss["font-family"], 'Button has incorrect font-family');
    });

    it('error background-color login-page', function(){
        let background =  $(sel.alert).getCssProperty('background-color');
        assert.equal(background.parsed.hex, exd.errorCss["background-color"], 'Button has incorrect background color');
    });

    it('error border color login-page', function (){
        let borderColor = $(sel.alert).getCssProperty('border');
        let borderValue = borderColor.value;
        let result = borderValue.substring(borderValue.indexOf('('));
        assert.equal(result, exd.errorCss.border, 'Button has incorrect border color');
    });

    it('error font-size login-page', function(){
        let fontSize = $(sel.alert).getCssProperty('font-size');
        assert.equal(fontSize.value, exd.errorCss.fontSize, 'Button has incorrect font-size');
    });

    it('error  font-weight login-page', function(){
        let fontWeight = $(sel.alert).getCssProperty('font-weight');
        assert.equal(fontWeight.value, exd.errorCss["font-weight"], 'Button has incorrect font-weight');
    });

    it('error design color login-page', function(){
        let color = $(sel.alert).getCssProperty('color');
        assert.equal(color.parsed.hex, exd.errorCss.color, 'Button has incorrect color');
    });

    it('error design text-align login-page', function(){
        let textAlign = $(sel.alert).getCssProperty('text-align');
        assert.equal(textAlign.value, exd.errorCss["text-align"], 'Button has incorrect text-align');
    });
});

describe('Correct credentials', function () {
    it('Log into the system', function(){
        browser.url('/');
        browser.waitForVisible(sel.email);
        browser.setValue(sel.email, user.email);
        browser.setValue(sel.pass, user.pass);
        browser.click(sel.loginBtn);
        assert.isTrue(browser.waitForVisible(selB.newBug));
    });
});

describe('Registration page exists', function () {
    it('Registration button Clickable and redirects to the right page', function(){
        browser.url('/');
        browser.waitForVisible(sel.registrationBtn, 3000);
        browser.click(sel.registrationBtn);
        assert.equal(browser.waitForVisible(sel.btnBack, 1500), true, 'Button Registration is not clicked');
    })
});

