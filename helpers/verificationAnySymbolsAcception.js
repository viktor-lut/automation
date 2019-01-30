const { assert } = require("chai");
const randomString = require("./randomString");

module.exports =
    function (selector, maxLength) {
        let arrOfLengths = [1, ~~(maxLength / 2), maxLength, maxLength + 1];
        let verb;
        let expLength;
        let testLength;
        let s;
        for (let i = 0; i < arrOfLengths.length; i ++) {
            testLength = arrOfLengths[i];
            verb = testLength > maxLength ? "doesn't accept": "accepts";
            s = testLength === 1 ? "" : "s";

            it(`${verb} ${testLength} symbol${s}`, function(){
                expLength = testLength > maxLength ? maxLength: testLength;
                $(selector).setValue(randomString(testLength));
                let result = $(selector).getValue().length;
                browser.clearElement(selector);
                assert.equal(result, expLength, `expected number of symbols is ${expLength}, actual is ${result}`);
            });

        }
    };
