const { assert } = require("chai");

module.exports =
    function (selector, expMaxLen) {
        it("max length", function(){
            const actualMaxLength = $(selector).getAttribute("maxlength");
            assert.equal(actualMaxLength, expMaxLen, `expected ${expMaxLen}, got ${actualMaxLength}`);
        })
    };
