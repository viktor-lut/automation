const { assert } = require("chai");
const exp = require("./../test-data/expected").registrationDesign;
const sel = require("./../test-data/selectors").registrationDesign;
const selLoginPage = require("./../test-data/selectors").loginFunctionality;
const verificationCssValue = require("./../helpers/verificationCssValue");
const verificationMaxLength = require("./../helpers/verificationMaxLength");
const verificationHorizontalAligned = require("./../helpers/verificationHorizontalAligned");
const verificationPlaceholder = require("./../helpers/verificationPlaceholder");
const verificationEmptyField = require("./../helpers/verificationEmptyField");
const verificationText = require("./../helpers/verificationText");


describe("Registration page components", function () {

    it("page opening", function(){
        browser.url("/");
        browser.waitForVisible(selLoginPage.registrationBtn, 10000);
        browser.click(selLoginPage.registrationBtn);
        const registrationPageExist = browser.waitForVisible(sel.buttonIds[0], 10000);
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

    for (let i = 0; i < exp.btnNames.length; i ++) {

        it("button '" + exp.btnNames[i] + "' is visible", function() {
            assert.isTrue($(sel.buttonIds[i]).isVisible(), `${exp.btnNames[i]} button is not visible`);
        });

    }

    for (let i = 0; i < exp.placeholders.length; i ++) {

        it(exp.inputs[i] + " field is visible", function() {
            assert.isTrue($(sel.inputIds[exp.inputs[i]]).isVisible(), `${exp.inputs[i]} field is not visible`);
        });

    }

    for (let i = 0; i < exp.texts.length; i ++) {

        it("text '" + exp.texts[i] + "' is visible", function() {
            assert.isTrue($(sel.textSel[i]).isVisible(), `${exp.texts[i]} text is not visible`);
        });

    }

});

let expectedMaxLength = 0;
for (let i = 0; i < exp.inputs.length; i ++) {

    describe(exp.inputs[i] + " field", function () {
        expectedMaxLength = exp.inputs[i].includes("Name") ? exp.maxLength[0] : exp.maxLength[1];
        verificationEmptyField(sel.inputIds[exp.inputs[i]], exp.inputs[i]);
        verificationPlaceholder(sel.inputIds[exp.inputs[i]], exp.placeholders[i]);
        verificationMaxLength(sel.inputIds[exp.inputs[i]], expectedMaxLength);
        verificationCssValue(sel.inputIds[exp.inputs[i]], exp.inputCssProp);

    });

}

for (let i = 0; i < exp.btnNames.length; i ++) {

    describe("'" + exp.btnNames[i] + "' button", function () {

        verificationText(sel.buttonIds[i], exp.btnNames[i]);
        verificationCssValue(sel.buttonIds[i], exp.btnCssProp);
        verificationHorizontalAligned(sel.buttonIds[i], sel.page, exp.btnAligned[i]);

    });

}

for (let i = 0; i < exp.texts.length; i ++) {

    describe(  "'" + exp.texts[i] + "' text", function () {

        verificationText(sel.textSel[i], exp.texts[i]);
        verificationCssValue(sel.textSel[i], exp.txtCssProp);

    });

}


