const { assert } = require("chai");
const { registration, loginFunctionality } = require("./../test-data/selectors");
const exp = require("./../test-data/expected").registration;
const users = require("./../test-data/users");
const { verificationInputLength, verificationCssValue} = require("./../helpers/test-helpers");
const fillInputs = require("../helpers/fillInputs");
const getErrorWhenEmptyField = require("./../helpers/getErrorWhenEmptyField");
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

describe(  "Error message verification", function () {

    Object.keys(exp.inputsPlaceholders).map(el => {

        const elLowerCase = el.toLowerCase();
        if (!(elLowerCase.includes("conf"))) {
            let name = el;
            let s = '';
            let emptyFieldSelArr = [registration.inputIds[el]];
            let isConfirm = elLowerCase.includes("email") || elLowerCase.includes("pass");
            if (isConfirm) {
                name += " and Confirm" + el;
                s = 's';
                emptyFieldSelArr.push(registration.inputIds[el] + "_confirm");
            }

            it(`text of the error message when ${name} field${s} is empty`, function () {
                browser.click(registration.buttonIds.Back);
                browser.waitForVisible(loginFunctionality.loginBtn, 3000);
                browser.click(loginFunctionality.registrationBtn);
                browser.waitForVisible(registration.buttonIds.Back, 3000);
                fillInputs(Object.values(registration.inputIds), ["Test", "Test", users.email, users.email, users.pass, users.pass]);
                getErrorWhenEmptyField(emptyFieldSelArr, registration.buttonIds.Register, registration.error);
                const errorText = browser.getText(registration.error);
                assert.equal(errorText, exp.errorText);
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






