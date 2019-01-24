const { assert } = require('chai');

describe('Bug-form-page-validation', function () {

    it('Text: “Please fill all the required fields”', function(){
        browser.url('/');
        browser.waitForVisible('#email');
        browser.setValue('#email', '6940563@gmail.com');
        browser.setValue('#pass', '123');
        browser.click('#login');
        browser.waitForVisible('//*[@id="root"]/div/div[2]/div/div[2]/table/tbody/tr[1]/th/span');
        browser.click('//*[@id="root"]/div/div[2]/div/div[2]/table/tbody/tr[1]/th/span');
        browser.waitForVisible('#root > div > div.site-content > div > div:nth-child(2) > div:nth-child(1) > table > tbody > tr > td:nth-child(2) > button');
        browser.click('#root > div > div.site-content > div > div:nth-child(2) > div:nth-child(1) > table > tbody > tr > td:nth-child(2) > button');
        browser.waitForVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/input[1]');
        let id='#root > div > div.site-content > div > div:nth-child(2) > div:nth-child(2) > input:nth-child(4)';
        $(id).setValue([' ', '\uE003']);

        browser.pause(2000);
        browser.click('#root > div > div.site-content > div > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)');
        let error='//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/div';
        browser.waitForVisible(error);
        var title=$(error).getText();
        assert.equal(title, 'Please fill all the required fields');

    })
    browser.waitForVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/div');
    const MessageLocator = '//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/div';
    it('Verify that  Border color: #f5c6cb', function(){
        let border = $(MessageLocator).getCssProperty('border-bottom-color');
        assert.equal(border.parsed.hex, '#f5c6cb');
    })
    it('Verify that  Font family: Segoe UI', function(){
        let prop = $(MessageLocator).getCssProperty('font-family');
        assert.equal(prop.value, 'segoe ui');
    })
    it('VVerify that  Font size: 16px', function(){
        let prop = $(MessageLocator).getCssProperty('font-size');
        assert.equal(prop.value, '16px');
    })
    it('Verify that  Font weight: 400', function(){
        let prop = $(MessageLocator).getCssProperty('font-weight');
        assert.equal(prop.value, '400');
    })
    it('Verify that  Font color: #721c24', function(){
        let prop = $(MessageLocator).getCssProperty('color');
        assert.equal(prop.parsed.hex, '#721c24');
    })
    it('Verify that  Text is center aligned.', function(){
        let prop = $(MessageLocator).getCssProperty('text-align');
        assert.equal(prop.value, 'center');
    })

    function random(n) {
        const digitsLetters = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
            'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        let res = '';
        while (n > 0) {
            res += digitsLetters[Math.floor(Math.random() * 35)];
            n--;
        }
        return res;
    };

});