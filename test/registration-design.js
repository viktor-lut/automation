const assert = require('assert');

describe('Registration page components', function () {

    it('click registration button', function(){
        browser.url('/');
        browser.click('#registration');
        //let title = browser.getTitle();
        let isRegistrationPage = browser.waitForVisible('button=Register', 5000);
        assert.equal(isRegistrationPage, true, 'Registration button does non work');
    })

});