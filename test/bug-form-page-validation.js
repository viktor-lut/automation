const assert = require('assert');

describe('Bug-form-page-validation', function () {

    it('Text: “Please fill all the required fields”', function(){
        browser.url('/');
        browser.waitForVisible('#email');
        browser.setValue('#email', '6940563@gmail.com');
        browser.setValue('#pass', '123');
        browser.click('#login');
        browser.waitForVisible('//*[@id="root"]/div/div[2]/div/div[2]/table/tbody/tr[1]/th/span');
        browser.click('//*[@id="root"]/div/div[2]/div/div[2]/table/tbody/tr[1]/th/span');
        //  assert.equal(title, 'Bug Tracker', 'Title is incorrect');

    })
    it('Verify that  Border color: #f5c6cb', function(){
        browser.pause(3000);
        let MessageLocator = '#root > div > div.site-content > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(21) > div';
        let border = $(MessageLocator).getCssProperty('border-bottom-color');
        //  assert.equal(title, 'Bug Tracker', 'Title is incorrect');

    })

});