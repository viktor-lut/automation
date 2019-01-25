const { assert } = require("chai");
const exd = require("./../test-data/expected").registrationDesign;
const sel = require("./../test-data/selectors").registrationDesign;
const selLoginPage = require("./../test-data/selectors").loginFunctionality;
const verificationCssValue = require("./../helpers/verificationCssValue");
const verificationMaxLength = require("./../helpers/verificationMaxLength");
const verificationHorizontalAligned = require("./../helpers/verificationHorizontalAligned");
const verificationPlaceholder = require("./../helpers/verificationPlaceholder");
let btnNames = [];
let placeholders = [];
let text = [];
let inputId = [];
let inputTypes = [];

/*function verificationPlaceholder(selector, expPlaceholder) {
    it("placeholder", function(){
        const actualPlaceholder = $(selector).getAttribute("placeholder");
        assert.equal(actualPlaceholder, expPlaceholder, "expected " + expPlaceholder + ", got " + actualPlaceholder);
    })
}*/

describe("Registration page components", function () {

    it("page opening", function(){
        browser.url("/");
        browser.waitForVisible(selLoginPage.registrationBtn, 10000);
        browser.click(selLoginPage.registrationBtn);
        const registrationPageExist = browser.waitForVisible(sel.btnBack, 10000);
        btnNames = $$(sel.buttonsSel).map(function (el) {return el.getText(); });
        //placeholders = $$(sel.inputsSel).map(function (el) {return el.getAttribute("placeholder"); });
        //inputId = $$(sel.inputsSel).map(function (el) {return el.getAttribute("id"); });
        //inputTypes = $$(sel.inputsSel).map(function (el) {return el.getAttribute("aria-label"); });
        text = $$(sel.textSel).map(function (el) {return el.getText(); });
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

    for (let i = 0; i < exd.expBtnNames.length; i ++) {
        /*it("button " + exd.expBtnNames[i], function() {
            assert.isTrue(btnNames.includes(exd.expBtnNames[i]), exd.expBtnNames[i] + " button not found, got " + btnNames[i]);
        });*/

        it("button " + exd.expBtnNames[i] + " is visible", function() {
            assert.isTrue($('button=' + exd.expBtnNames[i]).isVisible(), exd.expBtnNames[i] + " button is not visible");
        });

    }

    for (let i = 0; i < exd.expPlaceholders.length; i ++) {
        it(exd.expInputs[i] + " field is visible", function() {
            assert.isTrue($(sel.inputId[i]).isVisible(), inputTypes[i] + " text field is not visible");
        });

        /*it("text field with placeholder " + exd.expPlaceholders[i], function() {
            assert.isTrue(placeholders.includes(exd.expPlaceholders[i]), exd.expPlaceholders[i] + " placeholder not found, got " + placeholders[i]);
        })*/

    }

    for (let i = 0; i < exd.expText.length; i ++) {
        it("text " + exd.expText[i], function() {
            assert.isTrue(text.includes(exd.expText[i]), exd.expText[i] + " text not found, got " + text[i]);
        })
    }

});

let expectedMaxLength = 0;
for (let i = 0; i < exd.expInputs.length; i ++) {

    describe(exd.expInputs[i] + " field", function () {
        expectedMaxLength = exd.expInputs[i].includes("Name") ? exd.expMaxLength[0] : exd.expMaxLength[1];
        verificationPlaceholder(sel.inputId[i], exd.expPlaceholders[i]);
        verificationMaxLength(sel.inputId[i], expectedMaxLength);
        verificationCssValue(sel.inputId[i], exd.inputCssProp);

    });
}



/*describe("First name field", function () {

    verificationPlaceholder(sel.firstName, );
    verificationMaxLength(sel.firstName, exd.expMaxLength[0]);
    verificationCssValue(sel.firstName, exd.inputCssProp);

});

describe("Last name field", function () {

    verificationMaxLength(sel.lastName, exd.expMaxLength[0]);
    verificationCssValue(sel.lastName, exd.inputCssProp);

});

describe("Email field", function () {

    verificationMaxLength(sel.email, exd.expMaxLength[1]);
    verificationCssValue(sel.email, exd.inputCssProp);

});

describe("Confirm Email field", function () {

    verificationMaxLength(sel.confEmail, exd.expMaxLength[1]);
    verificationCssValue(sel.confEmail, exd.inputCssProp);

});

describe("Password field", function () {

    verificationMaxLength(sel.pass, exd.expMaxLength[1]);
    verificationCssValue(sel.pass, exd.inputCssProp);

});

describe("Confirm Password field", function () {

    verificationMaxLength(sel.confPass, exd.expMaxLength[1]);
    verificationCssValue(sel.confPass, exd.inputCssProp);

});*/

describe("Back button", function () {

    verificationCssValue(sel.btnBack, exd.btnCssProp);
    verificationHorizontalAligned(sel.btnBack, sel.page, exd.btnBackAligned);

});

describe("Register button", function () {

    verificationCssValue(sel.btnRegister, exd.btnCssProp);
    verificationHorizontalAligned(sel.btnRegister, sel.page, exd.btnRegisterAligned);

});

describe(  exd.expText[0] + " text", function () {

    verificationCssValue(sel.txtRequired, exd.txtCssProp);

});

