const { assert } = require('chai');
const exd = require('./../test-data/expected').globalFooter;
const sel = require('./../test-data/selectors').globalFooter;
const selCl = require('./../test-data/selectors').client;

describe('General', function () {

    it('Global Footer exists', function () {
        browser.url('/');
        assert.isTrue($(selCl.footer).isVisible());//весь
    });

    it('Footer only has text as designed', function(){
        assert.equal($(sel.mainFooter).getText(), exd.mainFooterText, "The Main footer text is not correct");
    });

    it('Small footer text has text as designed', function(){
        assert.equal($(sel.smallFooter).getText(), exd.smallFooterText, "The Small footer text is not correct" );
    })
//
    it('Footer have small footer text below the main footer text', function(){
        let smallFooterLocation = $(sel.smallFooter).getLocation('y');
        let mainFooterLocation = $(sel.mainFooter).getLocation('y');
        let mainFooterSize =  $(sel.mainFooter).getElementSize('height');
        assert.equal(smallFooterLocation >= (mainFooterLocation + mainFooterSize)? exd.smallTextlocat : 'not correct', exd.smallTextlocat);
    });

});

describe('Design Main Footer text', function () {

    it('The font-size is 16px', function(){
        browser.url('/');
        //console.log($(sel.mainFooter).getCssProperty(exd.mainFootCssProp["font-size"]));?посему null
        assert.equal($(sel.mainFooter).getCssProperty("font-size").value, '16px', 'The font-size is not 16px');
    });

    it('The font-family in Footer is segoe ui', function(){
        let mainFooterFam = $(sel.mainFooter).getCssProperty('font-family').value;
        assert.equal(mainFooterFam, 'segoe ui', 'The font-family is not segoe');
    });

    it('The font weight is 400', function() {
        let mainFooterWeight = $(sel.mainFooter).getCssProperty('font-weight').value;
        assert.equal(mainFooterWeight, '400', 'The font is not 400');
    });

    it('The color is #212529', function(){
        let mainFooterColor = $(sel.mainFooter).getCssProperty('color').parsed.hex;
        assert.equal(mainFooterColor, '#212529', 'The color is not #212529');
    });

    it('The text align is center', function(){
        let mainFooterAlign = $(sel.mainFooter).getCssProperty('text-align').value;
        assert.equal(mainFooterAlign, 'center', 'The text align is center');
    });

    it('The background color is rgba(0,0,0,0.125)', function(){
        let mainFooterBG = $(selCl.footer).getCssProperty('background-color').value;
        assert.equal(mainFooterBG, 'rgba(0,0,0,0.125)', 'The background color is not rgba(0,0,0,0.125)');
    });

});

describe('Design Small Footer text', function () {

    it('The Small Footer text-align is center', function(){
        browser.url('/');
        let smallFooterAlign = $(sel.smallFooter).getCssProperty('text-align').value;
        assert.equal(smallFooterAlign, 'center', 'The Small Footer text-align is not center');
    });

    it('The Small Footer font-size is 12px', function(){
        let smallFooterSize = $(sel.smallFooter).getCssProperty('font-size').value;
        assert.equal(smallFooterSize, '12px', 'The Small Footer text-align is not 12px');
    });

    it('The Small Footer font-family is segoe ui', function(){
        let smallFooterFam = $(sel.smallFooter).getCssProperty('font-family').value;
        assert.equal(smallFooterFam, 'segoe ui', 'The Small Footer font-family is not  segoe ui');
    });

    it('The Small Footer font weight is 400', function(){
        let smallFooterWeight = $(sel.smallFooter).getCssProperty('font-weight').value;
        assert.equal(smallFooterWeight, '400', 'The Small Footer font is not 400');
    });

    it('The Small Footer color is #212529', function(){
        let smallFooterColor = $(sel.smallFooter).getCssProperty('color').parsed.hex;
        assert.equal(smallFooterColor, '#212529', 'The Small Footer color is not #212529');
    });
});