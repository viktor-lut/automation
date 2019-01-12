const assert = require('assert');

describe('Bug-form-page-validation', function () {

    it('Text: “Please fill all the required fields”', function(){
        browser.url('/');
        browser.pause(500);
        browser.setValue('#email', '6940563@gmail.com');
        browser.setValue('#pass', '123');
        browser.click('#login');
        browser.click('//*[@id="root"]/div/div[2]/div/div[2]/table/tbody/tr[1]/th/span');



      //  assert.equal(title, 'Bug Tracker', 'Title is incorrect');

    })

});