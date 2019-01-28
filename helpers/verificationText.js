const { assert } = require("chai");

module.exports =
    function (selector, expectedText) {
        it("text", function() {
            const actualText = $(selector).getText();
            assert.equal(actualText, expectedText, "expected " + expectedText + ", got " + actualText);
        })
    };