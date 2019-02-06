const { assert } = require("chai");
const exp = require("./../test-data/expected").registration;
const { registration, loginFunctionality } = require("./../test-data/selectors");
const { verificationCssValue, verificationMaxLength, verificationHorizontalAligned,
    verificationPlaceholder, verificationEmptyField, verificationText} = require("./../helpers/test-helpers");




describe("Registration page components", function () {

    it("page opening", function(){
        browser.url("/");
        browser.waitForVisible(loginFunctionality.registrationBtn, 10000);
        browser.click(loginFunctionality.registrationBtn);
        const registrationPageExist = browser.waitForVisible(registration.buttonIds.Register, 10000);
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

    Object.keys(exp.btnsNames).map(el =>

        it(`button ${el} is visible`, function() {
            assert.isTrue($(registration.buttonIds[el]).isVisible(), `${el} button is not visible`);
        })

    );

    Object.keys(exp.inputsPlaceholders).map(el =>

        it(`${el} field is visible`, function() {
            assert.isTrue($(registration.inputIds[el]).isVisible(), `${el} field is not visible`);
        })

    );

    Object.keys(exp.texts).map(el =>

        it(`text '${exp.texts[el]}' is visible`, function() {
            assert.isTrue($(registration.textSel[el]).isVisible(), `${exp.texts[el]} text is not visible`);
        })

    )

});

Object.keys(exp.inputsPlaceholders).map(el =>

    describe(`${el} field`, function () {

        verificationEmptyField(registration.inputIds[el], el);
        verificationPlaceholder(registration.inputIds[el], exp.inputsPlaceholders[el]);
        verificationMaxLength(registration.inputIds[el], exp.maxLength[el]);
        verificationCssValue(registration.inputIds[el], exp.inputCssProp);

    })

);

Object.keys(exp.btnsNames).map(el =>

    describe(`${el} button` , function () {

        verificationText(registration.buttonIds[el], exp.btnsNames[el]);
        verificationCssValue(registration.buttonIds[el], exp.btnCssProp);
        verificationHorizontalAligned(registration.buttonIds[el], registration.page, exp.btnAligned[el]);

    })

);

Object.keys(exp.texts).map(el =>

    describe(  `'${exp.texts[el]}' text`, function () {

        verificationText(registration.textSel[el], exp.texts[el]);
        verificationCssValue(registration.textSel[el], exp.txtCssProp);

    })

);