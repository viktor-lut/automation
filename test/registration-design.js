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
        const registrationPageExist = browser.waitForVisible(sel.buttonIds.Register, 10000);
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

    Object.keys(exp.btnsNames).map(el =>

        it(`button ${el} is visible`, function() {
            assert.isTrue($(sel.buttonIds[el]).isVisible(), `${el} button is not visible`);
        })

    );

    Object.keys(exp.inputsPlaceholders).map(el =>

        it(`${el} field is visible`, function() {
            assert.isTrue($(sel.inputIds[el]).isVisible(), `${el} field is not visible`);
        })

    );

    Object.keys(exp.texts).map(el =>

        it(`text '${exp.texts[el]}' is visible`, function() {
            assert.isTrue($(sel.textSel[el]).isVisible(), `${exp.texts[el]} text is not visible`);
        })

    )

});

let expectedMaxLength = 0;
Object.keys(exp.inputsPlaceholders).map(el =>

    describe(`${el} field`, function () {
        expectedMaxLength = el.includes("Name") ? exp.maxLength[0] : exp.maxLength[1];
        verificationEmptyField(sel.inputIds[el], el);
        verificationPlaceholder(sel.inputIds[el], exp.inputsPlaceholders[el]);
        verificationMaxLength(sel.inputIds[el], expectedMaxLength);
        verificationCssValue(sel.inputIds[el], exp.inputCssProp);

    })

);

Object.keys(exp.btnsNames).map(el =>

    describe(`${el} button` , function () {

        verificationText(sel.buttonIds[el], exp.btnsNames[el]);
        verificationCssValue(sel.buttonIds[el], exp.btnCssProp);
        verificationHorizontalAligned(sel.buttonIds[el], sel.page, exp.btnAligned[el]);

    })

);

Object.keys(exp.texts).map(el =>

    describe(  `'${exp.texts[el]}' text`, function () {

        verificationText(sel.textSel[el], exp.texts[el]);
        verificationCssValue(sel.textSel[el], exp.txtCssProp);

    })

);