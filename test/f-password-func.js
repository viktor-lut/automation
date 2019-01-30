const { assert } = require('chai');
const selUsers = require('./../test-data/users');
const sel = require('./../test-data/selectors').fPasswordFunc;
const exd = require('./../test-data/expected').fPasswordFunc;


describe('General', function () {

    it('Remind Password', function(){
        browser.url('/');
        browser.waitForVisible(sel.forgot, 10000);

        $(sel.forgot).click();
        browser.waitForVisible(sel.email, 5000);

        $(sel.email).setValue(['\uE01A', '\uE003']);
        $(sel.remind).click();

        browser.waitForVisible(sel.emptyField, 5000);
        const danger = $(sel.errorMessage).getText();
        assert.equal(danger, exd.remindPass);
    });

    it('email is not registered in the system', function(){

        $(sel.email).setValue('theMailIsNotExist@mail.com');
        $(sel.remind).click();
        browser.waitForVisible(sel.incorrectMail, 5000);
        const danger = $(sel.errorMessage).getText();
        assert.equal(danger, exd.userIsNotR);
    });


    it('correct email', function(){
        $(sel.backButton).click();
        browser.waitForVisible(sel.forgot, 5000);
        $(sel.forgot).click();
        browser.waitForVisible(sel.email, 5000);
        $(sel.email).setValue(selUsers.email);
        $(sel.remind).click();
        browser.waitForVisible(sel.correctMail, 5000);
        const danger = $(sel.errorMessage).getText();
        assert.equal(danger, exd.correctEmail);
    });

    it('Verify that after the message disappears, the user is redirected to the login page.', function(){
        $(sel.backButton).click();
        browser.waitForVisible(sel.forgot, 5000);
        $(sel.forgot).click();
        browser.waitForVisible(sel.email, 5000);
        $(sel.email).setValue(selUsers.email);
        $(sel.remind).click();
        const mainPage = browser.waitForVisible(sel.forgot, 10000);
        assert.equal(mainPage, true,'Can not return main page');
    })

});

describe('Messages design', function () {

    it('Verify Background color', function(){
        $(sel.forgot).click();
        browser.waitForVisible(sel.email, 5000);
        $(sel.email).setValue(['\uE01A', '\uE003']);
        $(sel.remind).click();

        let backColor = $(sel.errorMessage).getCssProperty('background-color').value;
        assert.equal(backColor,exd.messagesDesignCssProp["background-color"], 'Background color is incorrect');
    });

    it('Verify border color', function(){
        let borderColor = $(sel.errorMessage).getCssProperty('border-top-color').value;
        assert.equal(borderColor,exd.messagesDesignCssProp["border-color"], 'Border color is incorrect');
    });

    it('Verify Font family', function(){
        let fontFamily = $(sel.errorMessage).getCssProperty('font-family').value;
        assert.equal(fontFamily,exd.messagesDesignCssProp["font-family"], 'Font family is incorrect');
    });

    it('Verify font size', function(){
        let fontSize = $(sel.errorMessage).getCssProperty('font-size').value;
        assert.equal(fontSize,exd.messagesDesignCssProp["font-size"], 'Font size is incorrect');
    });

    it('Verify font weight', function(){
        let fontWeight = $(sel.errorMessage).getCssProperty('font-weight').value;
        assert.equal(fontWeight,exd.messagesDesignCssProp["font-weight"], 'Font weight is incorrect');
    });

    it('Verify font color', function(){
        let fontColor = $(sel.errorMessage).getCssProperty('color').value;
        assert.equal(fontColor,exd.messagesDesignCssProp["font-color"], 'Font color is incorrect');
    });

    it('Verify Text is center aligned.', function(){
        let textAlign = $(sel.errorMessage).getCssProperty('text-align').value;
        assert.equal(textAlign,exd.messagesDesignCssProp["text-align"], 'Text align is incorrect');
    });
});
///// test