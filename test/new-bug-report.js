const assert = require('assert');

let userName = 'test';
let password = 'test';

describe('General', function () {

    it('click new bug button', function(){
        browser.url('/');
        browser.waitForVisible('#login');

        browser.setValue('#email', userName);
        browser.pause(2000);
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
        let fontFam = $('.input-group mb-2').getCssProperty('font-family');
        console.log(fontFam);
        assert.equal(fontFam,'Segoe UI", sans-serif', 'Font family is incorrect');
    })

    it('Verify font size', function(){
        let fontSize = $('.input-group mb-2').getCssProperty('font-size');
        console.log(fontSize);
        assert.equal(fontSize,'16px', 'Font size is incorrect');
    })

    it('Verify font weight', function(){
        let fontWeight = $('.input-group mb-2').getCssProperty('font-weight');
        console.log(fontWeight);
        assert.equal(fontWeight,'400', 'Font weight is incorrect');
    })

    it('Verify color', function(){
        let fontColor = $('.form-control').getCssProperty('color');
        console.log(fontColor);
        assert.equal(fontColor,'rgba(73,80,87,1)', 'Font color is incorrect');
    })

    it('Verify text align: left', function(){
        let txtAlign = $('.form-control').getCssProperty('text-align');
        console.log(txtAlign);
        assert.equal(txtAlign,'start', 'Text align is incorrect');
    })

    it('Verify placeholder font color', function(){
        let plFontColor = $('.form-control').getCssProperty('font color');
        console.log(plFontColor);
        assert.equal(plFontColor,'#left', 'Text align is incorrect');
    })

})

// it('Verify font size', function(){
//     let title = browser.getTitle();
//     assert.equal(title, 'Bug Tracker', 'Title is incorrect');
// })
//
// it('Verify font weight', function(){
//     let title = browser.getText('.custom-header span');
//     assert.equal(title, 'BugTracker', 'Title is incorrect');
// })
//
// it('Verify color', function(){
//     let title = browser.getText('.custom-header span');
//     assert.equal(title, 'BugTracker', 'Title is incorrect');
// })
//
// it('Verify that text align: center', function(){
//     let title = browser.getText('.custom-header span');
//     assert.equal(title, 'BugTracker', 'Title is incorrect');
// })

// describe('Submit button', function () {
//
//     it('verify background color', function(){
//         let elem = $('#todo_cancel');
//         let bColor = elem.getCssProperty('.btn-info:not(:disabled):not(.disabled).active, .btn-info:not(:disabled):not(.disabled):active, .show>.btn-info.dropdown-toggle');
//         console.log(bColor);
//         assert.equal(bColor, '#17a2b8', 'Background color is incorrect');
//     })
//
//     it('verify hover background color', function(){
//         let elem = $('#todo_cancel');
//         let hBColor = elem.getCssProperty('.btn-info:hover');
//         console.log(hBColor);
//         assert.equal(hBColor, '#138496', 'Hover background color is incorrect');
//     })
//
//     describe('Clear form button', function () {
//
//         it('verify hover background color', function(){
//             browser.url('/Bug-Tracker');
//             // let elem = $('#root > div > div.site-content > div > div > table > tbody > tr > td.text-sm-left.mt-3.border-top-0');
//             let font = $('#root > div > div.card-footer.text-center.custom-header').getCssProperty('background-color');
//             console.log(font);
//             assert.equal(font,'rgba(0,0,0,0.125)', 'Hover background color is incorrect');
//         })
//
//     });
//
// describe('Clear form button', function () {
//
//     it('verify background color', function(){
//         let elem = $('#todo_cancel');
//         let bColor = elem.getCssProperty('.btn-info:not(:disabled):not(.disabled).active, .btn-info:not(:disabled):not(.disabled):active, .show>.btn-info.dropdown-toggle');
//         console.log(bColor);
//         assert.equal(bColor, '#17a2b8', 'Background color is incorrect');
//     })
//
//     it('verify hover background color', function(){
//         let elem = $('#todo_cancel');
//         let hBColor = elem.getCssProperty('.btn-info:hover');
//         console.log(hBColor);
//         assert.equal(hBColor, '#138496', 'Hover background color is incorrect');
//     })
//
//     it('verify hover background color', function(){
//         browser.url('/Bug-Tracker');
//         // let elem = $('#root > div > div.site-content > div > div > table > tbody > tr > td.text-sm-left.mt-3.border-top-0');
//         let font = $('#root > div > div.card-footer.text-center.custom-header').getCssProperty('background-color');
//         console.log(font);
//         assert.equal(font,'rgba(0,0,0,0.125)', 'Hover background color is incorrect');
//     })
//
// });