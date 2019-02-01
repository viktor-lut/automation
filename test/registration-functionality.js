const { assert } = require("chai");
const exp = require("./../test-data/expected").registrationDesign;
const sel = require("./../test-data/selectors").registrationDesign;
const users = require("./../test-data/users");
const selLoginPage = require("./../test-data/selectors").loginFunctionality;
const verificationAnySymbolsAcception = require("./../helpers/verificationAnySymbolsAcception");
const textFieldsFiller = require("./../helpers/textFieldsFiller");
const verificationErrorTextWhenEmptyField = require("../helpers/verificationErrorTextWhenEmptyField");
const verificationCssValue = require("./../helpers/verificationCssValue");



describe("Page opening", function () {

    it("page opening", function () {
        browser.url("/");
        browser.waitForVisible(selLoginPage.registrationBtn, 10000);
        browser.click(selLoginPage.registrationBtn);
        const registrationPageExist = browser.waitForVisible(sel.buttonIds[0], 10000);
        console.log(sel.inputIds);
        textFieldsFiller(sel.inputIds, ["Test", "Test", users.email, users.email, users.pass, users.pass]);
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

});

describe(  "Error message verification", function () {

    exp.inputs.map(el => {if (!el.includes("Confirm"))
        verificationErrorTextWhenEmptyField(el, sel.inputIds[el], sel.buttonIds[1], sel.error, exp.errorText)});
    verificationCssValue(sel.error, exp.errorCssProp);

});

let expectedMaxLength;
let inputTexts = [];

exp.inputs.map(el => describe(el + " field", function () {

    expectedMaxLength = el.includes("Name") ? exp.maxLength[0] : exp.maxLength[1];
    verificationAnySymbolsAcception(sel.inputIds[el], expectedMaxLength);

    if (el.includes("Pass")) {

        it('entered symbols are replaced by bullets', function () {
            let result = $(sel.inputIds[el]).getCssProperty('-webkit-text-security').value;
            assert.equal(result, exp.bullet, `expected ${exp.bullet}, got ${result}`);
        });

    }

}));




