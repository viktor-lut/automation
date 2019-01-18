const assert = require('assert');
const buttonsSel = '.input-group-append button';
const inputsSel = '.input-group input';
const textSel = '.text-center p';
const expBtnNames = ['< Back', 'Register'];
const expPlaceholders = ['First Name *', 'Last Name *', 'Email *', 'Confirm Email *', 'Password *', 'Confirm Password *'];
const expText = ['* Required field'];
const expMaxLength = [20, 45];
const inputCssProp = {'font-size': '16px', 'font-weight': '400',
    'font-family': 'segoe ui', 'color': '#495057',
    'focus': {'box-shadow': 'rgba(0,123,255,0.25)0px0px0px3.2px'}};
const btnCssProp = {'font-size': '16px', 'font-weight': '400',
    'font-family': 'segoe ui', 'color': '#ffffff',
    'background-color': '#17a2b8', 'hover': {'background-color': '#138496'}};
const txtCssProp = {'font-size': '16px', 'font-weight': '400',
    'font-family': 'segoe ui', 'color': '#212529'};
let btnNames = [];
let placeholders = [];
let text = [];

function verificationCssValue(selector, cssProp) {
    const keys = Object.keys(cssProp);
    let state = '';
    let value;
    for (let key of keys) {
        it(state + key, function(){
            switch (key) {
                case 'hover':
                    state = key + ' ';
                    browser.moveToObject(selector);
                    browser.pause(200);
                    cssProp = cssProp[key];
                    key = Object.keys(cssProp)[0];
                    break;
                case 'focus':
                    browser.click(selector);
                    browser.pause(200);
                    cssProp = cssProp[key];
                    key = Object.keys(cssProp)[0];
                    break;
            }
            value = $(selector).getCssProperty(key);
            value = key.includes('color') ? value['parsed']['hex'] : value['value'];
            assert.equal(value, cssProp[key], 'expected ' + state + key + ' is ' + cssProp[key] + ', got ' + value);
        })
    }
}

function verificationMaxLength(selector, expMaxLength) {
    it('max length', function(){
        const actualMaxLength = $(selector).getAttribute('maxlength');
        assert.equal(actualMaxLength, expMaxLength, 'expected ' + expMaxLength + ', got ' + actualMaxLength);
    })
}

function verificationPlaceholder(selector, expPlaceholder) {
    it('placeholder', function(){
        const actuaPlaceholder = $(selector).getAttribute('placeholder');
        assert.equal(actuaPlaceholder, expPlaceholder, 'expected ' + expPlaceholder + ', got ' + actuaPlaceholder);
    })
}

describe('Registration page components', function () {

    it('page opening', function(){
        browser.url('/');
        browser.waitForVisible('#registration', 10000);
        browser.click('#registration');
        const registrationPageExist = browser.waitForVisible('button=< Back', 10000);
        btnNames = $$(buttonsSel).map(function (el) {return el.getText(); });
        placeholders = $$(inputsSel).map(function (el) {return el.getAttribute('placeholder'); });
        text = $$(textSel).map(function (el) {return el.getText(); });
        assert.equal(registrationPageExist, true, 'Registration page not found');
    });

    for (let i = 0; i < expBtnNames.length; i ++) {
        it('button ' + expBtnNames[i], function() {
            assert.equal(btnNames.includes(expBtnNames[i]), true, expBtnNames[i] + ' button not found, got ' + btnNames[i]);
        })
    }

    for (let i = 0; i < expPlaceholders.length; i ++) {
        it('text field with placeholder ' + expPlaceholders[i], function() {
            assert.equal(placeholders.includes(expPlaceholders[i]), true, expPlaceholders[i] + ' placeholder not found, got ' + placeholders[i]);
        })
    }

    for (let i = 0; i < expText.length; i ++) {
        it('text ' + expText[i], function() {
            assert.equal(text.includes(expText[i]), true, expText[i] + ' text not found, got ' + text[i]);
        })
    }

});

describe('First name field', function () {

    const id = '#fname';
    verificationMaxLength(id, expMaxLength[0]);
    verificationCssValue(id, inputCssProp);

});

describe('Last name field', function () {

    const id = '#lname';
    verificationMaxLength(id, expMaxLength[0]);
    verificationCssValue(id, inputCssProp);

});

describe('Email field', function () {

    const id = '#email';
    verificationMaxLength(id, expMaxLength[1]);
    verificationCssValue(id, inputCssProp);

});

describe('Confirm Email field', function () {

    const id = '#email_confirm';
    verificationMaxLength(id, expMaxLength[1]);
    verificationCssValue(id, inputCssProp);

});

describe('Password field', function () {

    const id = '#pass';
    verificationMaxLength(id, expMaxLength[1]);
    verificationCssValue(id, inputCssProp);

});

describe('Confirm Password field', function () {

    const id = '#pass_confirm';
    verificationMaxLength(id, expMaxLength[1]);
    verificationCssValue(id, inputCssProp);

});

describe('Back button', function () {

    const id = 'button=< Back';
    verificationCssValue(id, btnCssProp);

});

describe('Register button', function () {

    const id = 'button=Register';
    verificationCssValue(id, btnCssProp);

});

describe('"' + expText[0] + '" text', function () {

    const id = 'p=* Required field';
    verificationCssValue(id, txtCssProp);

});

