const { assert } = require("chai");
const exp = require("./../test-data/expected").registrationDesign;
const sel = require("./../test-data/selectors").registrationDesign;
const selLoginPage = require("./../test-data/selectors").loginFunctionality;
const verificationAnySymbolsAcception = require("./../helpers/verificationAnySymbolsAcception");


describe("Page opening", function () {

    it("page opening", function () {
        browser.url("/");
        browser.waitForVisible(selLoginPage.registrationBtn, 10000);
        browser.click(selLoginPage.registrationBtn);
        const registrationPageExist = browser.waitForVisible(sel.buttonIds[0], 10000);
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

});

let expectedMaxLength;
for (let i = 0; i < exp.inputs.length; i ++) {

    describe(exp.inputs[i] + " field", function () {
        expectedMaxLength = exp.inputs[i].includes("Name") ? exp.maxLength[0] : exp.maxLength[1];
        verificationAnySymbolsAcception(sel.inputIds[exp.inputs[i]], exp.inputs[i], expectedMaxLength);
    });

}