module.exports =
    function (emptyFieldSelArr, buttonSel, errorSel) {

        let valueArr = [];
        emptyFieldSelArr.map(el => {
                valueArr.push($(el).getValue());
                $(el).setValue(['a', '\uE003']);
        });
        browser.click(buttonSel);
        browser.waitForVisible(errorSel, 3000);
        for (let i = 0; i < emptyFieldSelArr.length; i++) {
                browser.setValue(emptyFieldSelArr[i], valueArr[i]);
        }

    }