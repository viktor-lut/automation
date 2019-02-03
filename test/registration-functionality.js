const { assert } = require("chai");
const exp = require("./../test-data/expected").registrationDesign;
const sel = require("./../test-data/selectors").registrationDesign;
const users = require("./../test-data/users");
const selLoginPage = require("./../test-data/selectors").loginFunctionality;
const verificationInputLength = require("../helpers/verificationInputLength");
const fillInputs = require("../helpers/fillInputs");
const verificationCssValue = require("./../helpers/verificationCssValue");
const getErrorWhenEmptyField = require("./../helpers/getErrorWhenEmptyField");
const randomString = require("./../helpers/randomString");



describe("Page opening", function () {

    it("page opening", function () {
        browser.url("/");
        browser.waitForVisible(selLoginPage.registrationBtn, 5000);
        browser.click(selLoginPage.registrationBtn);
        const registrationPageExist = browser.waitForVisible(sel.buttonIds.Register, 5000);
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

});

describe(  "Error message verification", function () {

    Object.keys(exp.inputsPlaceholders).map(el => {

        const elLowerCase = el.toLowerCase();
        if (!(elLowerCase.includes("conf"))) {
            let name = el;
            let s = '';
            let emptyFieldSelArr = [sel.inputIds[el]];
            let isConfirm = elLowerCase.includes("email") || elLowerCase.includes("pass");
            if (isConfirm) {
                name += " and Confirm" + el;
                s = 's';
                emptyFieldSelArr.push(sel.inputIds[el] + "_confirm");
            }

            it(`text of the error message when ${name} field${s} is empty`, function () {
                browser.click(sel.buttonIds.Back);
                browser.waitForVisible(selLoginPage.loginBtn, 3000);
                browser.click(selLoginPage.registrationBtn);
                browser.waitForVisible(sel.buttonIds.Back, 3000);
                fillInputs(Object.values(sel.inputIds), ["Test", "Test", users.email, users.email, users.pass, users.pass]);
                getErrorWhenEmptyField(emptyFieldSelArr, sel.buttonIds.Register, sel.error);
                const errorText = browser.getText(sel.error);
                assert.equal(errorText, exp.errorText);
            });

        }

    });

    verificationCssValue(sel.error, exp.errorCssProp);

});


Object.keys(exp.inputsPlaceholders).map(el => {

    describe(el + " field", function () {

        verificationInputLength(sel.inputIds[el], exp.maxLength[el], randomString);

        if (el.toLowerCase().includes("pass")) {

            it('entered symbols are replaced by bullets', function () {
                let result = $(sel.inputIds[el]).getCssProperty('-webkit-text-security').value;
                assert.equal(result, exp.bullet, `expected ${exp.bullet}, got ${result}`);
            });

        }

    })

});






