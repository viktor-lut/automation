const { assert } = require('chai');
const exp = require("./../test-data/expected").loginPageDesign;
const { loginPageDesign } = require("./../test-data/selectors");
const { verificationCssValue, verificationMaxLength, verificationHorizontalAligned,
    verificationPlaceholder, verificationEmptyField, verificationText} = require("./../helpers/test-helpers");

// describe('General', function () {
//
//     it('Email text field is displayed', function(){
//         browser.url('/');
//         let result = browser.waitForVisible(loginPageDesign.fields.Email, 5000);
//         assert.isTrue(result, 'Email text field is not visible');
//     });
//
//     it('Password field is displayed', function(){
//         let result = browser.waitForVisible(loginPageDesign.fields.Password, 5000);
//         assert.isTrue(result, 'Password text field is not visible');
//     });
//
//     it('“* Required field” text is displayed', function(){
//         let result = browser.waitForVisible(loginPageDesign.RequiredField, 5000);
//         assert.isTrue(result, '“* Required field” text is not visible');
//     });
//
//     it('Login button is displayed', function(){
//         let result = browser.waitForVisible(loginPageDesign.buttonIds.Login, 5000);
//         assert.isTrue(result, 'Login button is not visible');
//     });
//
//     it('Registration button is displayed', function(){
//         let result = browser.waitForVisible(loginPageDesign.buttonIds.Registration, 5000);
//         assert.isTrue(result, 'Registration button is not visible');
//     });
// });

describe('General', function () {

    Object.keys(exp.texts).map(el =>

        it(`text '${exp.texts[el]}' is visible`, function() {
            browser.url('/');
            browser.waitForVisible(loginPageDesign.textSel[el], 5000);
            assert.isTrue($(loginPageDesign.textSel[el]).isVisible(), `${exp.texts[el]} text is not visible`);
        })
    );

    Object.keys(exp.inputsPlaceholders).map(el =>

        it(`${el} field is visible`, function() {
            assert.isTrue($(loginPageDesign.fields[el]).isVisible(), `${el} field is not visible`);
        })
    );

    Object.keys(exp.btnsNames).map(el =>

        it(`button ${el} is visible`, function() {
            assert.isTrue($(loginPageDesign.buttonIds[el]).isVisible(), `${el} button is not visible`);
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
Object.keys(exp.texts).map(el =>

    describe(`'${exp.texts[el]}' text`, function () {
        verificationText(loginPageDesign.textSel[el], exp.texts[el]);
        verificationCssValue(loginPageDesign.textSel[el], exp.txtCssProp[el]);
        verificationHorizontalAligned(loginPageDesign.textSel[el], loginPageDesign.page, exp.txtAligned[el]);
    })
);

Object.keys(exp.btnsNames).map(el =>

    describe(`${el} button` , function () {

        verificationText(loginPageDesign.buttonIds[el], exp.btnsNames[el]);
        verificationCssValue(loginPageDesign.buttonIds[el], exp.btnCssProp[el]);
        verificationHorizontalAligned(loginPageDesign.buttonIds[el], loginPageDesign.page, exp.btnAligned[el]);
    })
);