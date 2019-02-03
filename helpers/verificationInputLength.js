const { assert } = require("chai");


module.exports =
    function (selector, maxLength, strGenerator) {   // strGenerator is a function!!!
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
    };
