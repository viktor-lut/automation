const { assert } = require('chai');

describe('General', function () {

    it('Global Footer exists', function () {
        browser.url('/');
        assert.isTrue($(".custom-footer").isVisible());
    })

    it('Footer only has text as designed', function(){
        let mainFooter = ($('.custom-footer div').getText());
        assert.equal(mainFooter, '© 2019 Bug Tracker by React Web Development');
    })

    it('Small footer text has text as designed', function(){
        let smallFooter = $('.small-text').getText();
        assert.equal(smallFooter, 'Version: 0.2');
    })

    it('Footer have small footer text below the main footer text', function(){
        let smallFooterLocation = $('.small-text').getLocation('y');
        let mainFooterLocation = $('.custom-footer div').getLocation('y');
        let mainFooterSize =  $('.custom-footer div').getElementSize('height');
        assert.equal(smallFooterLocation >= (mainFooterLocation + mainFooterSize) ? 'below': 'above', 'below', 'not correct');
    });

});

describe('Design Main Footer text', function () {

    it('The font-size in Footer is 16px', function(){
        browser.url('/');
        let mainFooterSize = $('.custom-footer div').getCssProperty('font-size').value;
        assert.equal(mainFooterSize, '16px', 'The font-size is not 16px');
    });

    it('The font-family in Footer is segoe ui', function(){
        let mainFooterFam = $('.custom-footer div').getCssProperty('font-family').value;
        assert.equal(mainFooterFam, 'segoe ui', 'The font-family is not segoe');
    });

    it('The font weight is 400', function() {
        let mainFooterWeight = $('.custom-footer div').getCssProperty('font-weight').value;
        assert.equal(mainFooterWeight, '400', 'The font is not 400');
    });

    it('The color is #212529', function(){
        let mainFooterColor = $('.custom-footer div').getCssProperty('color').parsed.hex;
        assert.equal(mainFooterColor, '#212529', 'The color is not #212529');
    });

    it('The text align is center', function(){
        let mainFooterAlign = $('.custom-footer div').getCssProperty('text-align').value;
        assert.equal(mainFooterAlign, 'center', 'The text align is center');
    });

    it('The background color is rgba(0,0,0,0.125)', function(){
        let mainFooterBG = $('.custom-footer').getCssProperty('background-color').value;
        assert.equal(mainFooterBG, 'rgba(0,0,0,0.125)', 'The background color is rgba(0,0,0,0.125)');
    });

});

describe('Design Small Footer text', function () {

    it('The Small Footer text-align is center', function(){
        browser.url('/');
        let smallFooterAlign = $('.small-text').getCssProperty('text-align').value;
        assert.equal(smallFooterAlign, 'center', 'The Small Footer text-align is not center');
    });

    it('The Small Footer font-size is 12px', function(){
        let smallFooterSize = $('.small-text').getCssProperty('font-size').value;
        assert.equal(smallFooterSize, '12px', 'The Small Footer text-align is not 12px');
    });

    it('The Small Footer font-family is segoe ui', function(){
        let smallFooterFam = $('.small-text').getCssProperty('font-family').value;
        assert.equal(smallFooterFam, 'segoe ui', 'The Small Footer font-family is not  segoe ui');
    });

    it('The Small Footer font weight is 400', function(){
        let smallFooterWeight = $('.small-text').getCssProperty('font-weight').value;
        assert.equal(smallFooterWeight, '400', 'The Small Footer font is not 400');
    });

    it('The Small Footer color is #212529', function(){
        let smallFooterColor = $('.small-text').getCssProperty('color').parsed.hex;
        assert.equal(smallFooterColor, '#212529', 'The Small Footer color is not #212529');
    });
});