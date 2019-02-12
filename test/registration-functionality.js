const { assert } = require("chai");
const { registration, loginFunctionality } = require("./../test-data/selectors");
const exp = require("./../test-data/expected").registration;
const users = require("./../test-data/users");
const { verificationInputLength, verificationCssValue } = require("./../helpers/test-helpers");
const fillInputs = require("./../helpers/fillInputs");
const clearInputs = require("./../helpers/clearInputs");
const clickAndGetText = require("./../helpers/clickAndGetText");
const randomString = require("./../helpers/randomString");



describe("Page opening", function () {

    it("page opening", function () {
        browser.url("/");
        browser.waitForVisible(loginFunctionality.registrationBtn, 10000);
        browser.click(loginFunctionality.registrationBtn);
        const registrationPageExist = browser.waitForVisible(registration.buttonIds.Register, 10000);
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

});

describe(  "Error message", function () {

    it('text if email is already registered', function () {
        fillInputs(Object.values(registration.inputIds), ["Test", "Test", users.email, users.email, users.pass, users.pass]);
        const errorText = clickAndGetText(registration.buttonIds.Register, registration.error);
        assert.equal(errorText, exp.errorText.emailRegistered);
    });

    Object.keys(exp.inputsPlaceholders).map(el => {

        const elLowerCase = el.toLowerCase();
        if (!(elLowerCase.includes("conf"))) {
            let name = el;
            let s = '';
            let inputSelectors = [registration.inputIds[el]];
            const isEmailConfirm = elLowerCase.includes("email");
            const isPassConfirm = elLowerCase.includes("pass");
            if (isEmailConfirm || isPassConfirm) {
                name += " and Confirm" + el;
                s = 's';
                inputSelectors.push(registration.inputIds[el] + "_confirm");
                let inputValues = ["Test", "Test", users.email, 'a' + users.email, users.pass, users.pass];
                let expErrorText = exp.errorText.emailsNotMatched;
                if (isPassConfirm) {
                    inputValues = ["Test", "Test", users.email, users.email, users.pass, 'a' + users.pass];
                    expErrorText = exp.errorText.passNotMatched;
                }

                it(`text if ${name} field${s} do not match`, function () {
                    fillInputs(Object.values(registration.inputIds), inputValues);
                    const errorText = clickAndGetText(registration.buttonIds.Register, registration.error);
                    assert.equal(errorText, expErrorText);
                });

            }

            it(`text if ${name} field${s} is empty`, function () {
                const inputValues = clearInputs(inputSelectors);
                const errorText = clickAndGetText(registration.buttonIds.Register, registration.error);
                fillInputs(inputSelectors, inputValues);
                assert.equal(errorText, exp.errorText.emptyField);
            });


        }

    });

    verificationCssValue(registration.error, exp.errorCssProp);

});


Object.keys(exp.inputsPlaceholders).map(el => {

    describe(el + " field", function () {

        verificationInputLength(registration.inputIds[el], exp.maxLength[el], randomString);

        if (el.toLowerCase().includes("pass")) {

            it('entered symbols are replaced by bullets', function () {
                let result = $(registration.inputIds[el]).getCssProperty('-webkit-text-security').value;
                assert.equal(result, exp.bullet, `expected ${exp.bullet}, got ${result}`);
            });

        }

    })

});






