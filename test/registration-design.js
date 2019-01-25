const { assert } = require("chai");
const expd = require("./../test-data/expected").registrationDesign;
const sel = require("./../test-data/selectors").registrationDesign;
const selLoginPage = require("./../test-data/selectors").loginFunctionality;
const verificationCssValue = require("./../helpers/verificationCssValue");
const verificationMaxLength = require("./../helpers/verificationMaxLength");
const verificationHorizontalAligned = require("./../helpers/verificationHorizontalAligned");
const verificationPlaceholder = require("./../helpers/verificationPlaceholder");
const verificationEmptyField = require("./../helpers/verificationEmptyField");
const verificationText = require("./../helpers/verificationText");
let btnNames = [];
let placeholders = [];
let text = [];
let inputId = [];
let inputTypes = [];
let btnIds = [];



describe("Registration page components", function () {

    it("page opening", function(){
        browser.url("/");
        browser.waitForVisible(selLoginPage.registrationBtn, 10000);
        browser.click(selLoginPage.registrationBtn);
        const registrationPageExist = browser.waitForVisible(sel.btnBack, 10000);
        btnNames = $$(sel.buttonsSel).map(function (el) {return el.getText(); });
        btnIds = $$(sel.buttonsSel).map(function (el) {return el.getAttribute("id"); });
        //placeholders = $$(sel.inputsSel).map(function (el) {return el.getAttribute("placeholder"); });
        //inputId = $$(sel.inputsSel).map(function (el) {return el.getAttribute("id"); });
        //inputTypes = $$(sel.inputsSel).map(function (el) {return el.getAttribute("aria-label"); });
        text = $$(sel.textSel).map(function (el) {return el.getText(); });
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

    for (let i = 0; i < expd.expBtnNames.length; i ++) {
        /*it("button " + expd.expBtnNames[i], function() {
            assert.isTrue(btnNames.includes(expd.expBtnNames[i]), expd.expBtnNames[i] + " button not found, got " + btnNames[i]);
        });*/

        it("button '" + expd.expBtnNames[i] + "' is visible", function() {
            assert.isTrue($('#' + btnIds[i]).isVisible(), expd.expBtnNames[i] + " button is not visible");
        });

    }

    for (let i = 0; i < expd.expPlaceholders.length; i ++) {
        it(expd.expInputs[i] + " field is visible", function() {
            assert.isTrue($(sel.inputIds[i]).isVisible(), inputTypes[i] + " field is not visible");
        });

        /*it(expd.expInputs[i] + " field is empty", function() {
            assert.equal($(sel.inputId[i]).getValue(), '', inputTypes[i] + " field is not empty");
        });*/
        /*it("text field with placeholder " + expd.expPlaceholders[i], function() {
            assert.isTrue(placeholders.includes(expd.expPlaceholders[i]), expd.expPlaceholders[i] + " placeholder not found, got " + placeholders[i]);
        })*/

    }



    for (let i = 0; i < expd.expText.length; i ++) {
        it("text '" + expd.expText[i] + "' is visible", function() {
            assert.isTrue($(sel.textSel[i]).isVisible(), expd.expText[i] + " text is not visible");
        });

        /*it("text " + expd.expText[i], function() {
            assert.isTrue(text.includes(expd.expText[i]), expd.expText[i] + " text not found, got " + text[i]);
        })*/
    }

});

let expectedMaxLength = 0;
for (let i = 0; i < expd.expInputs.length; i ++) {

    describe(expd.expInputs[i] + " field", function () {
        expectedMaxLength = expd.expInputs[i].includes("Name") ? expd.expMaxLength[0] : expd.expMaxLength[1];
        verificationEmptyField(sel.inputIds[i], expd.expInputs[i]);
        verificationPlaceholder(sel.inputIds[i], expd.expPlaceholders[i]);
        verificationMaxLength(sel.inputIds[i], expectedMaxLength);
        verificationCssValue(sel.inputIds[i], expd.inputCssProp);

    });
}



/*describe("First name field", function () {

    verificationPlaceholder(sel.firstName, );
    verificationMaxLength(sel.firstName, expd.expMaxLength[0]);
    verificationCssValue(sel.firstName, expd.inputCssProp);

});

describe("Last name field", function () {

    verificationMaxLength(sel.lastName, expd.expMaxLength[0]);
    verificationCssValue(sel.lastName, expd.inputCssProp);

});

describe("Email field", function () {

    verificationMaxLength(sel.email, expd.expMaxLength[1]);
    verificationCssValue(sel.email, expd.inputCssProp);

});

describe("Confirm Email field", function () {

    verificationMaxLength(sel.confEmail, expd.expMaxLength[1]);
    verificationCssValue(sel.confEmail, expd.inputCssProp);

});

describe("Password field", function () {

    verificationMaxLength(sel.pass, expd.expMaxLength[1]);
    verificationCssValue(sel.pass, expd.inputCssProp);

});

describe("Confirm Password field", function () {

    verificationMaxLength(sel.confPass, expd.expMaxLength[1]);
    verificationCssValue(sel.confPass, expd.inputCssProp);

});*/

for (let i = 0; i < expd.expBtnNames.length; i ++) {
    describe(expd.expBtnNames[i] + " button", function () {

        verificationText(sel.buttonIds[i], expd.expBtnNames[i]);
        verificationCssValue(sel.buttonIds[i], expd.btnCssProp);
        verificationHorizontalAligned(sel.buttonIds[i], sel.page, expd.btnAligned[i]);

    });
}
/*describe("Back button", function () {

    verificationText(sel.btnBack, expd.expBtnNames)
    verificationCssValue(sel.btnBack, expd.btnCssProp);
    verificationHorizontalAligned(sel.btnBack, sel.page, expd.btnBackAligned);


});

describe("Register button", function () {

    verificationCssValue(sel.btnRegister, expd.btnCssProp);
    verificationHorizontalAligned(sel.btnRegister, sel.page, expd.btnRegisterAligned);

});*/

describe(  expd.expText[0] + " text", function () {

    verificationText(sel.txtRequired, expd.expText[0]);
    verificationCssValue(sel.txtRequired, expd.txtCssProp);

});

