const assert = require('assert');

describe('Registration page components', function () {

    it('registration button is clicked, register button and back button exist', function(){
        browser.url('/');
        let registrationButtonExists = browser.waitForVisible('#registration', 3000);
        assert.equal(registrationButtonExists, true, 'Registration button is not found');
        browser.click('#registration');
        let registerButtonExists = browser.waitForVisible('button=Register', 1000);
        assert.equal(registerButtonExists, true, 'Registration page does not contain Register button');
        let backButtonExists = browser.isVisible('button=< Back');
        assert.equal(backButtonExists, true, 'Back button is not found');
    })

    it('text fields (first name, last name, email, confirm email, password, confirm password) exist', function(){
        let allInputs = $$('.input-group input')
        let allInputsList = allInputs.map(function(el) { return el.getAttribute('aria-label'); })
        console.log(allInputsList.join(','));
        assert.equal(allInputsList.join(', '), 'First name, Last name, Email, Confirm Email, Password, Confirm Password', 'At least one text field does not exist');
    })




});