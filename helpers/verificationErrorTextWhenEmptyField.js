const { assert } = require("chai");

module.exports =
    function (emptyField, inputSel, buttonSel, errorSel, expErrorText) {
        let name = emptyField;
        let s = '';
        let isConfirm = inputSel.includes("email") || inputSel.includes("pass");
        if (isConfirm) {
            name += " and Confirm" + emptyField;
            s = 's';
        }

        it(`text of error message when ${name} field${s} is empty`, function() {
            let inputText = $(inputSel).getValue();

            browser.clearElement(inputSel);
            if (isConfirm) browser.clearElement(inputSel + "_confirm");
            browser.click(buttonSel);
            let errorText = browser.getText(errorSel);
            browser.setValue(inputSel, inputText);
            if (isConfirm) browser.setValue(inputSel + "_confirm", inputText);
            assert.equal(errorText, expErrorText, `expected '${expErrorText}', got ${errorText}`);
        });

    };