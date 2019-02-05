const { assert } = require("chai");

module.exports = {

    // All functions below contain the it("title", function () {})!
    // Use their inside describe("title", function () {})!


    // cssProp must be the Object
    verificationCssValue: function (selector, cssProp) {
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
                assert.equal(value, cssProp[key], `expected ${state} ${key} is ${cssProp[key]}, got ${value}`);
            })
        }
    },


    verificationMaxLength: function (selector, expMaxLen) {
        it("max length", function(){
            const actualMaxLength = $(selector).getAttribute("maxlength");
            assert.equal(actualMaxLength, expMaxLen, `expected ${expMaxLen}, got ${actualMaxLength}`);
        })
    },


    // expAligned must be "middle" or "left" or "right"
    verificationHorizontalAligned: function (elementSel, wholePageSel, expAligned) {
        it("aligned", function(){
            const pageWidth = browser.getElementSize(wholePageSel,"width");
            const elementWidth = browser.getElementSize(elementSel,"width");
            const leftMargin = browser.getLocation(elementSel, "x");
            const rightMargin = pageWidth - elementWidth - leftMargin;
            const aligned = leftMargin === rightMargin? "middle" : leftMargin < rightMargin? "left" : "right";
            assert.equal(aligned, expAligned, `expected ${expAligned}-aligned, got ${aligned}-aligned; left margin = ${leftMargin}, right margin = ${rightMargin}`);
        })
    },


    verificationPlaceholder: function (selector, expPlaceholder) {
        it("placeholder", function () {
            const actualPlaceholder = $(selector).getAttribute("placeholder");
            assert.equal(actualPlaceholder, expPlaceholder, `expected ${expPlaceholder}, got ${actualPlaceholder}`);
        })
    },


    verificationEmptyField: function (selector, expInput) {
        it( "field is empty", function() {
            assert.equal($(selector).getValue(), '', `${expInput} field is not empty`);
        })
    },


    verificationText: function (selector, expectedText) {
        it("text", function() {
            const actualText = $(selector).getText();
            assert.equal(actualText, expectedText, `expected ${expectedText}, got ${actualText}`);
        })
    },


    // strGenerator must be a function!!!
    verificationInputLength: function (selector, maxLength, strGenerator) {
        let arrOfLengths = [1, ~~(maxLength / 2), maxLength, maxLength + 1];
        let verb;
        let expLength;
        let s;
        for (let testLength of arrOfLengths) {
            verb = testLength > maxLength ? "doesn't accept": "accepts";
            s = testLength === 1 ? "" : "s";

            it(`${verb} ${testLength} symbol${s}`, function(){
                expLength = testLength > maxLength ? maxLength: testLength;
                $(selector).setValue(strGenerator(testLength));
                let result = $(selector).getValue().length;
                assert.equal(result, expLength, `expected number of symbols is ${expLength}, actual is ${result}`);
            });

        }
    }

};