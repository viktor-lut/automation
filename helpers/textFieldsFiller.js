module.exports =
    function (fieldSelectors, texts) {
        for (let i = 0; i < fieldSelectors.length; i++) {
            browser.setValue(fieldSelectors[i], texts[i]);
        }
    };

// function works just inside it('', function(){})