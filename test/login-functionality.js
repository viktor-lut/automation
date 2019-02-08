const { assert } = require('chai');

const exd = require('./../test-data/expected').loginFunctionality;

const {loginPage, bugList, registration} = require('./../test-data/selectors');
const randomString = require('./../helpers/randomString');

const user = require('./../test-data/users');

describe(exd.suite, function () {

    it('Email accepts 1 symbol', function () {
        browser.url('/');
        browser.waitForVisible(loginPage.loginBtn, 3000);
        $(loginPage.email).setValue(randomString(loginPage.minS));
        let result = $(loginPage.email).getValue();
        assert.equal(result.length, exd.expMinLength, 'Email field doesn/t accepts 1 letter');
    });

    it('Email accepts 45 symbols', function(){
         browser.clearElement(loginPage.email);
         $(loginPage.email).setValue(randomString(loginPage.maxS));
         let result = $(loginPage.email).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Email field  doesn/t accept 45 symbols');
     });

     it('Field Email doesn/t accepts 46 symbols', function(){
         browser.clearElement(loginPage.email);
         $(loginPage.email).setValue(randomString(loginPage.maxS+1));
         let result = $(loginPage.email).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Email field doesn/t accept 46 symbols')

     });

     it('Text - Specify email and password - when login is empty', function(){
         $(loginPage.email).setValue(['a', '\uE003']);
         $(loginPage.pass).setValue(randomString(exd.expMinLength));
         browser.click(loginPage.loginBtn);
         browser.waitForVisible(loginPage.loginBtn, 3000);
         assert.isTrue($(loginPage.alertSps).isVisible());
    });

    it('Text - Specify email and password - when login is wrong', function(){
        browser.clearElement(loginPage.email);
        browser.clearElement(loginPage.pass);
        browser.setValue(loginPage.email, user.email +'a');
        browser.setValue(loginPage.pass, user.pass);
        browser.click(loginPage.loginBtn);
        assert.isTrue(browser.waitForVisible(loginPage.alertDntEx,5000));
    });
});

 describe('Password field', function () {

     it('Password accepts 1 symbol', function () {
         browser.url('/');
         browser.waitForVisible(loginPage.loginBtn, 3000);
         $(loginPage.pass).setValue(randomString(loginPage.minS));
         let result = $(loginPage.pass).getValue();
         assert.equal(result.length, exd.expMinLength, 'Password field doesn/t accepts 1 letter');
     });

     it('Password accepts 45 symbols', function(){
         browser.clearElement(loginPage.pass);
         $(loginPage.pass).setValue(randomString(loginPage.maxS));
         let result = $(loginPage.pass).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Password field  doesn/t accept 45 symbols');
     });

     it('Password doesn/t accepts 46 symbols', function(){
         browser.clearElement(loginPage.pass);
         $(loginPage.pass).setValue(randomString(loginPage.maxS+1));
         let result = $(loginPage.pass).getValue();
         assert.equal(result.length, exd.expMaxLength, 'Password field doesn/t accept 46 symbols');
     });

     it('Text - Specify email and password - when password is empty', function(){
         $(loginPage.email).setValue(randomString(exd.expMinLength));
         $(loginPage.email).setValue(['a', '\uE003']);
         browser.click(loginPage.loginBtn);
         assert.isTrue(browser.waitForVisible(loginPage.alertSps, 3000));
     });

     it('Text - Specify email and password - when password is wrong', function(){
         browser.clearElement(loginPage.email);
         browser.clearElement(loginPage.pass);
         browser.setValue(loginPage.email, user.email);
         browser.setValue(loginPage.pass, user.pass + 'a');
         browser.click(loginPage.loginBtn);
         assert.isTrue(browser.waitForVisible(loginPage.alertPassIncrt, 3000));
     });

     it('Symbols in password field are replaced by bullets', function () {
         let result = $(loginPage.pass).getCssProperty('-webkit-text-security');
         assert.equal(result.property, exd.bulletsPass, 'Symbols in password are not replaced by bullets.');
     });
 });

describe('Error design', function () {

   it('error font-family login-page', function(){
        browser.url('/');
        browser.waitForVisible(loginPage.loginBtn, 3000);
        browser.click(loginPage.loginBtn);
        browser.waitForVisible(loginPage.alert, 3000);
        let font = $(loginPage.alert).getCssProperty('font-family');
        assert.equal(font.value, exd.errorCss["font-family"], 'Button has incorrect font-family');
    });

    it('error background-color login-page', function(){
        let background =  $(loginPage.alert).getCssProperty('background-color');
        assert.equal(background.parsed.hex, exd.errorCss["background-color"], 'Button has incorrect background color');
    });

    it('error border color login-page', function (){
        let borderColor = $(loginPage.alert).getCssProperty('border');
        let borderValue = borderColor.value;
        let result = borderValue.substring(borderValue.indexOf('('));
        assert.equal(result, exd.errorCss.border, 'Button has incorrect border color');
    });

    it('error font-size login-page', function(){
        let fontSize = $(loginPage.alert).getCssProperty('font-size');
        assert.equal(fontSize.value, exd.errorCss.fontSize, 'Button has incorrect font-size');
    });

    it('error  font-weight login-page', function(){
        let fontWeight = $(loginPage.alert).getCssProperty('font-weight');
        assert.equal(fontWeight.value, exd.errorCss["font-weight"], 'Button has incorrect font-weight');
    });

    it('error design color login-page', function(){
        let color = $(loginPage.alert).getCssProperty('color');
        assert.equal(color.parsed.hex, exd.errorCss.color, 'Button has incorrect color');
    });

    it('error design text-align login-page', function(){
        let textAlign = $(loginPage.alert).getCssProperty('text-align');
        assert.equal(textAlign.value, exd.errorCss["text-align"], 'Button has incorrect text-align');
    });
});

describe('Correct credentials', function () {
    it('Log into the system', function(){
        browser.url('/');
        browser.waitForVisible(loginPage.email);
        browser.setValue(loginPage.email, user.email);
        browser.setValue(loginPage.pass, user.pass);
        browser.click(loginPage.loginBtn);
        assert.isTrue(browser.waitForVisible(bugList.newBug));
    });
});

describe('Registration page exists', function () {
    it('Registration button Clickable and redirects to the right page', function(){
        browser.url('/');
        browser.waitForVisible(loginPage.registrationBtn, 3000);
        browser.click(loginPage.registrationBtn);
        assert.equal(browser.waitForVisible(registration.buttonIds.Back, 1500), true, 'Button Registration is not clicked');
    })
});
