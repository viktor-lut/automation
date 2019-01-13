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

    it('all text fields are exist and their design matches spec', function(){
        let allInputs = $$('.input-group input')
        let PlholdersAndMaxL = allInputs.map(function(el) { return [el.getAttribute('placeholder'), el.getAttribute('maxlength')]; });
        const selectors = ['#fname', '#lname', '#email', '#email_confirm', '#pass', '#pass_confirm'];
        const expCssProp = [['font-size', '16px'], ['font-weight', '400'],
                            ['font-family', 'segoe ui'], ['color', '#495057']];
        const expPlholdersAndMaxL = [['First Name *', '20'], ['Last Name *', '20'],
                                ['Email *', '45'], ['Confirm Email *', '45'],
                                ['Password *', '45'], ['Confirm Password *', '45']];
        let cssPropVal = '';
        for (let i = 0; i < selectors.length; i++) {
            assert.equal(PlholdersAndMaxL[i][0], expPlholdersAndMaxL[i][0], expPlholdersAndMaxL[i][0] + 'placeholder is incorrect');
            assert.equal(PlholdersAndMaxL[i][1], expPlholdersAndMaxL[i][1], 'max length of ' + expPlholdersAndMaxL[i][0] + ' field is incorrect');
            for (let j = 0; j < expCssProp.length; j++) {
                cssPropVal = $(selectors[i]).getCssProperty(expCssProp[j][0]);
                cssPropVal = expCssProp[j][0] === 'color'? cssPropVal['parsed']['hex'] : cssPropVal['value'];
                assert.equal(cssPropVal, expCssProp[j][1], expCssProp[j][0] + ' is incorrect');
            }
        }
    });

    it('“* Required field” text exist', function(){
        let text = browser.getText('p=* Required field');
        assert.equal(text, '* Required field', 'Text does not exist');
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
