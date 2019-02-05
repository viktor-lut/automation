module.exports =
    function (fieldSelectorArr, textArr) {
        for (let i = 0; i < fieldSelectorArr.length; i++) {
            browser.setValue(fieldSelectorArr[i], textArr[i]);
            //browser.pause();
        }
    };

// function works just inside it('', function(){})