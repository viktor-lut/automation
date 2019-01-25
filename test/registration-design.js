const { assert } = require("chai");
const exd = require("./../test-data/expected").registrationDesign;
const sel = require("./../test-data/selectors").registrationDesign;
const selLoginPage = require("./../test-data/selectors").loginFunctionality;
const verificationCssValue = require("./../helpers/verificationCssValue");
const verificationMaxLength = require("./../helpers/verificationMaxLength");
const verificationHorizontalAligned = require("./../helpers/verificationHorizontalAligned");
let btnNames = [];
let placeholders = [];
let text = [];

/*function verificationCssValue(selector, cssProp) {
    const keys = Object.keys(cssProp);
    let state = "";
    let value;
    for (let key of keys) {
        it(key, function(){
            switch (key) {
                case "hover":
                    state = key + " ";
                    browser.moveToObject(selector);
                    browser.pause(200);
                    cssProp = cssProp[key];
                    key = Object.keys(cssProp)[0];
                    break;
                case "focus":
                    browser.click(selector);
                    browser.pause(200);
                    cssProp = cssProp[key];
                    key = Object.keys(cssProp)[0];
                    break;
            }
            value = $(selector).getCssProperty(key);
            value = key.includes("color") ? value["parsed"]["hex"] : value["value"];
            assert.equal(value, cssProp[key], "expected " + state + key + " is " + cssProp[key] + ", got " + value);
        })
    }
}*/

/*function verificationMaxLength(selector, expMaxLen) {
    it("max length", function(){
        const actualMaxLength = $(selector).getAttribute("maxlength");
        assert.equal(actualMaxLength, expMaxLen, "expected " + expMaxLen + ", got " + actualMaxLength);
    })
}*/

/*function verificationPlaceholder(selector, expPlaceholder) {
    it("placeholder", function(){
        const actualPlaceholder = $(selector).getAttribute("placeholder");
        assert.equal(actualPlaceholder, expPlaceholder, "expected " + expPlaceholder + ", got " + actualPlaceholder);
    })
}*/

/*function verificationHorizontalAligned(elementSel, wholePageSel, expAligned) {
    it("aligned", function(){
        const pageWidth = browser.getElementSize(wholePageSel,"width");
        const elementWidth = browser.getElementSize(elementSel,"width");
        const leftMargin = browser.getLocation(elementSel, "x");
        const rightMargin = pageWidth - elementWidth - leftMargin;
        const aligned = leftMargin === rightMargin? "middle" : leftMargin < rightMargin? "left" : "right";
        assert.equal(aligned, expAligned, "expected " + expAligned + "-aligned, got " + aligned + "-aligned;"
            + " left margin = " + leftMargin + " right margin = " + rightMargin);
    });
}*/

describe("Registration page components", function () {

    it("page opening", function(){
        browser.url("/");
        browser.waitForVisible(selLoginPage.registrationBtn, 10000);
        browser.click(selLoginPage.registrationBtn);
        const registrationPageExist = browser.waitForVisible(sel.btnBack, 10000);
        btnNames = $$(sel.buttonsSel).map(function (el) {return el.getText(); });
        placeholders = $$(sel.inputsSel).map(function (el) {return el.getAttribute("placeholder"); });
        text = $$(sel.textSel).map(function (el) {return el.getText(); });
        assert.isTrue(registrationPageExist, "Registration page not found");
    });

    for (let i = 0; i < exd.expBtnNames.length; i ++) {
        it("button " + exd.expBtnNames[i], function() {
            assert.isTrue(btnNames.includes(exd.expBtnNames[i]), exd.expBtnNames[i] + " button not found, got " + btnNames[i]);
        })
    }

    for (let i = 0; i < exd.expPlaceholders.length; i ++) {
        it("text field with placeholder " + exd.expPlaceholders[i], function() {
            assert.isTrue(placeholders.includes(exd.expPlaceholders[i]), exd.expPlaceholders[i] + " placeholder not found, got " + placeholders[i]);
        })
    }

    for (let i = 0; i < exd.expText.length; i ++) {
        it("text " + exd.expText[i], function() {
            assert.isTrue(text.includes(exd.expText[i]), exd.expText[i] + " text not found, got " + text[i]);
        })
    }

});

describe("First name field", function () {

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

});

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

