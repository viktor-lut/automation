function getCssPropValue(cssProp, selector) {
    let value = '';
    for (let i = 0; i < cssProp.length; i++) {
        value = $(selector).getCssProperty(cssProp[i][0]);
        console.log(value);
        value = cssProp[i][0].includes('color') ? value['parsed']['hex'] : value['value'];
        assert.equal(value, cssProp[i][1], 'expected ' + cssProp[i][0] + ' is ' + cssProp[i][1] + ', got ' + value);
    }
}

const assert = require('assert');

describe('Registration page components', function () {

    it('all required buttons are exist and their design matches spec', function(){
        browser.url('/');
        browser.waitForVisible('#registration', 10000);
        browser.click('#registration');
        /*let registerButtonExists = browser.waitForVisible('button=Register', 10000);
        assert.equal(registerButtonExists, true, 'Registration page does not contain Register button');
        let backButtonExists = browser.isVisible('button=< Back');
        assert.equal(backButtonExists, true, 'Back button is not found');
        browser.waitForVisible('button=Register', 10000);*/
        let allButtons = $$('.input-group-append button');
        const btnNames = allButtons.map(function(el) { return el.getText(); });
        const expBtnNames = ['< Back', 'Register'];
        const cssProp = [['font-size', '16px'], ['font-weight', '400'],
                            ['font-family', 'segoe ui'], ['color', '#ffffff'], ['background-color', '#17a2b8']];
        for (let i = 0; i < btnNames.length; i++) {
            assert.equal(btnNames[i], expBtnNames[i], 'expected button name is ' + expBtnNames[i] + ', got ' + btnNames[i]);
            getCssPropValue(cssProp, 'button=' + btnNames[i]);
        }
    });

    it('all required text fields are exist and their design matches spec', function(){
        const allFields = $$('.input-group input');
        const fieldSelectors = allFields.map(function(el) { return '#' + el.getAttribute('id'); });
        const plholderProp = allFields.map(function(el) { return [el.getAttribute('placeholder'), el.getAttribute('maxlength')]; });
        const cssProp = [['font-size', '16px'], ['font-weight', '400'],
                            ['font-family', 'segoe ui'], ['color', '#495057']];
        const expPlholderProp = [['First Name *', '20'], ['Last Name *', '20'],
                                ['Email *', '45'], ['Confirm Email *', '45'],
                                ['Password *', '45'], ['Confirm Password *', '45']];
        for (let i = 0; i < fieldSelectors.length; i++) {
            assert.equal(plholderProp[i][0], expPlholderProp[i][0], expPlholderProp[i][0] + 'placeholder is incorrect');
            assert.equal(plholderProp[i][1], expPlholderProp[i][1], 'expected max length of ' + expPlholderProp[i][0] +
                                                                    'field is ' + expPlholderProp[i][1] +
                                                                    ', got ' + plholderProp[i][1]);
            getCssPropValue(cssProp, fieldSelectors[i]);
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
