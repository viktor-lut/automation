const { assert } = require("chai");

module.exports =
    function (selector, expInput) {
        it( "field is empty", function() {
            assert.equal($(selector).getValue(), '', `${expInput} field is not empty`);
        })
    };