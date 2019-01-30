const assert = require('assert');

let userName = 'test';
let password = 'test';

describe('General', function () {

    it('click new bug button', function(){
        browser.url('/');
        browser.waitForVisible('#login');

        browser.setValue('#email', userName);
        // browser.pause(2000);
        browser.setValue('#pass', password);
        browser.click('#login');

        browser.waitForVisible('#new_bug');
        browser.click('#new_bug');
        let result = browser.waitForVisible('.mt-2', 5000);
        assert.equal(result, true, 'Button is not clicked');
    })

});

describe('Design', function () {

    it('Verify that "* Required" is visible', function(){
        let result = browser.waitForVisible('.text-sm-left', 5000);
        assert.equal(result, true, '"* Required" is not visible');
    })

    it('Verify that Submit button is visible', function(){
        let result = browser.waitForVisible('#todo_add', 5000);
        assert.equal(result, true, 'Submit button is not visible');
    })

    it('Verify that Clear Form button is visible', function(){
        let result = browser.waitForVisible('#todo_cancel', 5000);
        assert.equal(result, true, 'Clear Form button is not visible');
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
        let fontFam = $('#todo_add').getCssProperty('font-family');
        // console.log(fontFam);
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $('#todo_add').getCssProperty('font-size');
        // console.log(fontSize);
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('#todo_add').getCssProperty('font-weight');
        // console.log(fontWeight);
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $('#todo_add').getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value,'rgba(255,255,255,1)', 'Font color is incorrect');
    })

    it('Verify text align: center', function(){
        let txtAlign = $('#todo_add').getCssProperty('text-align');
        // console.log(txtAlign);
        assert.equal(txtAlign.value,'center', 'Text align is incorrect');
    })

    it('verify background color', function(){
        let elem = $('#todo_add');
        let bColor = elem.getCssProperty('background-color');
        // console.log(bColor);
        assert.equal(bColor.value, 'rgba(0,123,255,1)', 'Background color is incorrect');
    })

    // it('verify hover background color', function(){
    //     let elem = $('.btn-primary:hover');
    //     let hBColor = elem.getCssProperty('background-color');
    //     console.log(hBColor);
    //     assert.equal(hBColor.value, '#0069d9', 'Hover background color is incorrect');
    // })

})

describe('Clear Form button', function () {

    it('Verify font family', function(){
        let fontFam = $('#todo_cancel').getCssProperty('font-family');
        // console.log(fontFam);
        assert.equal(fontFam.value,'segoe ui', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $('#todo_cancel').getCssProperty('font-size');
        // console.log(fontSize);
        assert.equal(fontSize.value,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('#todo_cancel').getCssProperty('font-weight');
        // console.log(fontWeight);
        assert.equal(fontWeight.value,400, 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $('#todo_cancel').getCssProperty('color');
        // console.log(fontColor);
        assert.equal(fontColor.value,'rgba(255,255,255,1)', 'Font color is incorrect');
    })

    it('Verify text align: center', function(){
        let txtAlign = $('#todo_cancel').getCssProperty('text-align');
        // console.log(txtAlign);
        assert.equal(txtAlign.value,'center', 'Text align is incorrect');
    })

    it('verify background color', function(){
        let elem = $('#todo_cancel');
        let bColor = elem.getCssProperty('background-color');
        // console.log(bColor);
        assert.equal(bColor.value, 'rgba(23,162,184,1)', 'Background color is incorrect');
    })

    // it('verify hover background color', function(){
    //     let elem = $('#todo_cancel');
    //     let hBColor = elem.getCssProperty('.btn-info:hover');
    //     // console.log(hBColor);
    //     assert.equal(hBColor.value, '#138496', 'Hover background color is incorrect');
    // })

})