const { assert } = require("chai");

module.exports =
    function (selector, expPlaceholder) {
        it("placeholder", function () {
            const actualPlaceholder = $(selector).getAttribute("placeholder");
            assert.equal(actualPlaceholder, expPlaceholder, `expected ${expPlaceholder}, got ${actualPlaceholder}`);
        })
    };