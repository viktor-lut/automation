const assert = require('assert');

describe('Registration page components', function () {

    it('registration button is clicked, registration page has register button and back button', function(){
        browser.url('/');
        let registrationButtonExists = browser.waitForVisible('#registration', 7000);
        assert.equal(registrationButtonExists, true, 'Registration button is not found');
        browser.click('#registration');
        let registerButtonExists = browser.waitForVisible('button=Register', 3000);
        assert.equal(registerButtonExists, true, 'Registration page does not contain Register button');
        let backButtonExists = browser.isVisible('button=< Back');
        assert.equal(backButtonExists, true, 'Back button is not found');
    });

    it('text fields (first name, last name, email, confirm email, password, confirm password) exist', function(){
        let allInputs = $$('.input-group input')
        let allInputsArr = allInputs.map(function(el) { return el.getAttribute('aria-label'); })
        assert.equal(allInputsArr.join(', '), 'First name, Last name, Email, Confirm Email, Password, Confirm Password', 'At least one text field does not exist');
    });

    it('“* Required field” text exist', function(){
        let text = browser.getText('p=* Required field');
        assert.equal(text, '* Required field', 'Text does not exist');
    })

});

describe('First Name field', function () {

    it('placeholder name and input design', function(){
        const sel = '#fname';
        const elem = $(sel);
        let placeholder = browser.getAttribute(sel, 'placeholder');
        assert.equal(placeholder, 'First Name *', 'placeholder name is incorrect');
        let size = elem.getCssProperty('font-size')['value'];
        assert.equal(size, '16px', 'font-size is incorrect');
        let weight = elem.getCssProperty('font-weight')['value'];
        assert.equal(weight, '400', 'font-weight is incorrect');
        let font_family = elem.getCssProperty('font-family')['value'];
        assert.equal(font_family, 'segoe ui', 'font-family is incorrect');
        let maxlength = browser.getAttribute(sel, 'maxlength');
        assert.equal(maxlength, '20', 'maxlength is incorrect');
        //let placeholder_color = elem.getCssProperty('::placeholder'); //['style'];
        //console.log(placeholder_color);
        //assert.equal(placeholder_color, '#6c757d', 'placeholder color is incorrect');
    })

});

describe('Last Name field', function () {

    it('placeholder name and input design', function(){
        const sel = '#lname';
        const elem = $(sel);
        let placeholder = browser.getAttribute(sel, 'placeholder');
        assert.equal(placeholder, 'Last Name *', 'placeholder name is incorrect');
        let size = elem.getCssProperty('font-size')['value'];
        assert.equal(size, '16px', 'font-size is incorrect');
        let weight = elem.getCssProperty('font-weight')['value'];
        assert.equal(weight, '400', 'font-weight is incorrect');
        let font_family = elem.getCssProperty('font-family')['value'];
        assert.equal(font_family, 'segoe ui', 'font-family is incorrect');
        let maxlength = browser.getAttribute(sel, 'maxlength');
        assert.equal(maxlength, '20', 'maxlength is incorrect');
    })

});

describe('Email field', function () {

    it('placeholder name and input design', function(){
        const sel = '#email';
        const elem = $(sel);
        let placeholder = browser.getAttribute(sel, 'placeholder');
        assert.equal(placeholder, 'Email *', 'placeholder name is incorrect');
        let size = elem.getCssProperty('font-size')['value'];
        assert.equal(size, '16px', 'font-size is incorrect');
        let weight = elem.getCssProperty('font-weight')['value'];
        assert.equal(weight, '400', 'font-weight is incorrect');
        let font_family = elem.getCssProperty('font-family')['value'];
        assert.equal(font_family, 'segoe ui', 'font-family is incorrect');
        let maxlength = browser.getAttribute(sel, 'maxlength');
        assert.equal(maxlength, '45', 'maxlength is incorrect');
    })

});

describe('Password field', function () {

    it('placeholder name and input design', function(){
        const sel = '#pass';
        const elem = $(sel);
        let placeholder = browser.getAttribute(sel, 'placeholder');
        assert.equal(placeholder, 'Password *', 'placeholder name is incorrect');
        let size = elem.getCssProperty('font-size')['value'];
        assert.equal(size, '16px', 'font-size is incorrect');
        let weight = elem.getCssProperty('font-weight')['value'];
        assert.equal(weight, '400', 'font-weight is incorrect');
        let font_family = elem.getCssProperty('font-family')['value'];
        assert.equal(font_family, 'segoe ui', 'font-family is incorrect');
        let maxlength = browser.getAttribute(sel, 'maxlength');
        assert.equal(maxlength, '45', 'maxlength is incorrect');
    })

});

describe('Design of the text: * Required field', function () {

    it('Design of the text: * Required field', function(){
        const sel = 'p=* Required field';
        const elem = $(sel);
        let size = elem.getCssProperty('font-size')['value'];
        assert.equal(size, '16px', 'font-size is incorrect');
        let weight = elem.getCssProperty('font-weight')['value'];
        assert.equal(weight, '400', 'font-weight is incorrect');
        let font_family = elem.getCssProperty('font-family')['value'];
        assert.equal(font_family, 'segoe ui', 'font-family is incorrect');
        let font_color = elem.getCssProperty('color')['parsed']['hex'];
        assert.equal(font_color, '#212529', 'font-color is incorrect');
    })

});
