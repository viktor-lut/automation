const { assert } = require('chai');
const exd = require('./../test-data/expected').newBugReport;
const sel = require('./../test-data/selectors').newBugReport;
const sel1 = require('./../test-data/selectors').loginFunctionality;
const user = require('./../test-data/users');

describe('General', function () {

    it('click new bug button', function(){
        browser.url('/');
        browser.waitForVisible(sel1.loginBtn);

        browser.setValue(sel1.email, user.email);
        // browser.pause(2000);
        browser.setValue(sel1.pass, user.pass);
        browser.click(sel1.loginBtn);

        browser.waitForVisible('#new_bug');
        browser.click('#new_bug');
        let result = browser.waitForVisible('.mt-2', 5000);
        assert.equal(result, true, 'Button is not clicked');
    })

});

describe('Design', function () {

    it('Verify that "* Required" is visible', function(){
        let result = browser.waitForVisible('.text-sm-left', 5000);
        assert.isTrue(result, '"* Required" is not visible');
    })

    it('Verify that Submit button is visible', function(){
        let result = browser.waitForVisible(sel.submitBtn, 5000);
        assert.isTrue(result, 'Submit button is not visible');
    })

    it('Verify that Clear Form button is visible', function(){
        let result = browser.waitForVisible(sel.clearFormBtn, 5000);
        assert.isTrue(result, 'Clear Form button is not visible');
    })

});

describe('Text Field Requirements', function () {

    it('Verify font family', function(){
        let fontFam = $('.form-control').getCssProperty('font-family');
        // console.log(fontFam);
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $('.form-control').getCssProperty('font-size');
        // console.log(fontSize);
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('.form-control').getCssProperty('font-weight');
        // console.log(fontWeight);
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $('.form-control').getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value,'rgba(73,80,87,1)', 'Font color is incorrect');
    })

    it('Verify text align: left', function(){
        let txtAlign = $('.form-control').getCssProperty('text-align');
        // console.log(txtAlign);
        assert.equal(txtAlign.value,'start', 'Text align is incorrect');
    })

})

describe('Drop-down lists requirements', function () {

    it('Verify font family', function(){
        let fontFam = $('.Dropdown-placeholder').getCssProperty('font-family');
        // console.log(fontFam);
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $('.Dropdown-placeholder').getCssProperty('font-size');
        // console.log(fontSize);
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('.Dropdown-placeholder').getCssProperty('font-weight');
        // console.log(fontWeight);
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $('.Dropdown-placeholder').getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value,'rgba(51,51,51,1)', 'Font color is incorrect');
    })

    it('Verify text align: left', function(){
        let txtAlign = $('.form-control').getCssProperty('text-align');
        // console.log(txtAlign);
        assert.equal(txtAlign.value,'start', 'Text align is incorrect');
    })

})

describe('* Required field text requirements', function () {

    it('Verify font family', function(){
        let fontFam = $('.text-sm-left').getCssProperty('font-family');
        // console.log(fontFam);
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $('.text-sm-left').getCssProperty('font-size');
        // console.log(fontSize);
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('.text-sm-left').getCssProperty('font-weight');
        // console.log(fontWeight);
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $('.text-sm-left').getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value,'rgba(33,37,41,1)', 'Font color is incorrect');
    })

    it('Verify text align: left', function(){
        let txtAlign = $('.text-sm-left').getCssProperty('text-align');
        // console.log(txtAlign);
        assert.equal(txtAlign.value,'left', 'Text align is incorrect');
    })

})

describe('Submit button', function () {

    it('Verify font family', function(){
        let fontFam = $(sel.submitBtn).getCssProperty('font-family');
        // console.log(fontFam);
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $(sel.submitBtn).getCssProperty('font-size');
        // console.log(fontSize);
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $(sel.submitBtn).getCssProperty('font-weight');
        // console.log(fontWeight);
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $(sel.submitBtn).getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value,'rgba(255,255,255,1)', 'Font color is incorrect');
    })

    it('Verify text align: center', function(){
        let txtAlign = $(sel.submitBtn).getCssProperty('text-align');
        // console.log(txtAlign);
        assert.equal(txtAlign.value,'center', 'Text align is incorrect');
    })

    it('verify background color', function(){
        let elem = $(sel.submitBtn);
        let bColor = elem.getCssProperty('background-color');
        // console.log(bColor);
        assert.equal(bColor.value, 'rgba(0,123,255,1)', 'Background color is incorrect');
    })

    it('verify hover background color', function(){
        browser.moveToObject(sel.submitBtn);
        browser.pause(1000);
        let elem = $(sel.submitBtn);
        let hBColor = elem.getCssProperty('background-color');
        // console.log(hBColor);
        assert.equal(hBColor.value, 'rgba(0,105,217,1)', 'Hover background color is incorrect');
    })

})

describe('Clear Form button', function () {

    it('Verify font family', function(){
        let fontFam = $(sel.clearFormBtn).getCssProperty('font-family');
        // console.log(fontFam);
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $(sel.clearFormBtn).getCssProperty('font-size');
        // console.log(fontSize);
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $(sel.clearFormBtn).getCssProperty('font-weight');
        // console.log(fontWeight);
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $(sel.clearFormBtn).getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value,'rgba(255,255,255,1)', 'Font color is incorrect');
    })

    it('Verify text align: center', function(){
        let txtAlign = $(sel.clearFormBtn).getCssProperty('text-align');
        // console.log(txtAlign);
        assert.equal(txtAlign.value,'center', 'Text align is incorrect');
    })

    it('verify background color', function(){
        let elem = $(sel.clearFormBtn);
        let bColor = elem.getCssProperty('background-color');
        // console.log(bColor);
        assert.equal(bColor.value, 'rgba(23,162,184,1)', 'Background color is incorrect');
    })

    it('verify hover background color', function(){
        browser.moveToObject(sel.clearFormBtn);
        browser.pause(1000);
        let elem = $(sel.clearFormBtn);
        let hBColor = elem.getCssProperty('background-color');
        // console.log(hBColor);
        assert.equal(hBColor.value, 'rgba(19,132,150,1)', 'Hover background color is incorrect');
    })

})