module.exports =
    function (buttonSelector, textSelector) {
        browser.click(buttonSelector);
        browser.waitForVisible(textSelector, 1000);
        return browser.getText(textSelector);
    };