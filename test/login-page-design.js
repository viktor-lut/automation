const { assert } = require('chai');
const exp = require("./../test-data/expected").loginPageDesign;
const { loginPageDesign } = require("./../test-data/selectors");
const { verificationCssValue, verificationMaxLength, verificationHorizontalAligned,
    verificationPlaceholder, verificationEmptyField, verificationText} = require("./../helpers/test-helpers");

describe('General', function () {

    it('Email text field is displayed', function(){
        browser.url('/');
        let result = browser.waitForVisible(loginPageDesign.fields.Email, 5000);
        assert.isTrue(result, 'Email text field is not visible');
    });

    it('Password field is displayed', function(){
        let result = browser.waitForVisible(loginPageDesign.fields.Password, 5000);
        assert.isTrue(result, 'Password text field is not visible');
    });

    it('“* Required field” text is displayed', function(){
        let result = browser.waitForVisible(loginPageDesign.RequireField, 5000);
        assert.isTrue(result, '“* Required field” text is not visible');
    });

    it('Login button is displayed', function(){
        let result = browser.waitForVisible(loginPageDesign.buttonIds.Login, 5000);
        assert.isTrue(result, 'Login button is not visible');
    });

    it('Registration button is displayed', function(){
        let result = browser.waitForVisible(loginPageDesign.buttonIds.Registration, 5000);
        assert.isTrue(result, 'Registration button is not visible');
    });

});



    describe('Email field design', function () {

    Object.keys(exp.inputsPlaceholders).map(el =>

        it(`${el} field is visible`, function() {
            assert.isTrue($(loginPageDesign.fields[el]).isVisible(), `${el} field is not visible`);
        })
    );
});

    Object.keys(exp.inputsPlaceholders).map(el =>

    describe(`${el} field`, function () {

        verificationEmptyField(loginPageDesign.fields[el], el);
        verificationPlaceholder(loginPageDesign.fields[el], exp.inputsPlaceholders[el]);
        verificationMaxLength(loginPageDesign.fields[el], exp.maxLength[el]);
        verificationCssValue(loginPageDesign.fields[el], exp.inputCssProp);
    })
);

Object.keys(exp.RequireField).map(el =>

    describe(`'${exp.RequireField[el]}' text`, function () {

        verificationText(loginPageDesign.RequireField[el], exp.RequireField[el]);
        verificationCssValue(loginPageDesign.RequireField[el], exp.txtCssProp);
    })
);

Object.keys(exp.btnsNames).map(el =>

    describe(`${el} button` , function () {

        verificationText(loginPageDesign.buttonIds[el], exp.btnsNames[el]);
        verificationCssValue(loginPageDesign.buttonIds[el], ((exp.btnsNames === 'Login') ?  exp.loginBtnCssProp : exp.RegBtnCssProp));
        // verificationHorizontalAligned(loginPageDesign.buttonIds[el], registration.page, exp.btnAligned[el]);

    })

);