const { assert } = require('chai');
const exd = require('./../test-data/expected').globalFooter;
const sel = require('./../test-data/selectors').globalFooter;
const selCl = require('./../test-data/selectors').client;
const footer = require('./global/footer');

describe(exd.suite[0], function () {
    footer()
});

describe(exd.suite[1], function () {

    it('Global Footer exists', function () {
        browser.url('/');
        assert.isTrue($(selCl.footer).isVisible());
    });

    it('Footer only has text as designed', function(){
        assert.equal($(sel.mainFooter).getText(), exd.mainFooterText, "The Main footer text is not correct");
    });

    it('Small footer text has text as designed', function(){
        assert.equal($(sel.smallFooter).getText(), exd.smallFooterText, "The Small footer text is not correct" );
    });

    it('Footer have small footer text below the main footer text', function(){
        let smallFooterLocation = $(sel.smallFooter).getLocation('y');
        let mainFooterLocation = $(sel.mainFooter).getLocation('y');
        let mainFooterSize =  $(sel.mainFooter).getElementSize('height');
        assert.equal(smallFooterLocation >= (mainFooterLocation + mainFooterSize)? exd.smallTextLocat : 'not correct', exd.smallTextLocat);
    });

    it('The background Global Footer color is rgba(0,0,0,0.125)', function(){
        let globFooterBG = $(selCl.footer).getCssProperty('background-color').value;
        assert.equal(globFooterBG, exd.mainFootCssProp["background-color"], 'The background color is not rgba(0,0,0,0.125)');
    });

});

describe(exd.suite[2], function () {

    it('The font-size is 16px', function(){
        browser.url('/');
        assert.equal($(sel.mainFooter).getCssProperty("font-size").value, exd.mainFootCssProp["font-size"], 'The font-size is not 16px');
    });

    it('The font-family is segoe ui', function(){
        let mainFooterFam = $(sel.mainFooter).getCssProperty('font-family').value;
        assert.equal(mainFooterFam, exd.mainFootCssProp["font-family"], 'The font-family is not segoe');
    });

    it('The font weight is 400', function() {
        let mainFooterWeight = $(sel.mainFooter).getCssProperty('font-weight').value;
        assert.equal(mainFooterWeight, exd.mainFootCssProp["font-weight"], 'The font is not 400');
    });

    it('The color is #212529', function(){
        let mainFooterColor = $(sel.mainFooter).getCssProperty('color').parsed.hex;
        assert.equal(mainFooterColor, exd.mainFootCssProp.color, 'The color is not #212529');
    });

    it('The text align is center', function(){
        let mainFooterAlign = $(sel.mainFooter).getCssProperty('text-align').value;
        assert.equal(mainFooterAlign, exd.mainFootCssProp["text-align"], 'The text align is center');
    });

});

describe(exd.suite[3], function () {

    it('The text-align is center', function(){
        browser.url('/');
        let smallFooterAlign = $(sel.smallFooter).getCssProperty('text-align').value;
        assert.equal(smallFooterAlign, exd.smallFootCssProp["text-align"], 'The Small Footer text-align is not center');
    });

    it('The font-size is 12px', function(){
        let smallFooterSize = $(sel.smallFooter).getCssProperty('font-size').value;
        assert.equal(smallFooterSize, exd.smallFootCssProp["font-size"], 'The Small Footer text-align is not 12px');
    });

    it('The font-family is segoe ui', function(){
        let smallFooterFam = $(sel.smallFooter).getCssProperty('font-family').value;
        assert.equal(smallFooterFam, exd.smallFootCssProp["font-family"], 'The Small Footer font-family is not  segoe ui');
    });

    it('The font weight is 400', function(){
        let smallFooterWeight = $(sel.smallFooter).getCssProperty('font-weight').value;
        assert.equal(smallFooterWeight, exd.smallFootCssProp["font-weight"], 'The Small Footer font is not 400');
    });

    it('The color is #212529', function(){
        let smallFooterColor = $(sel.smallFooter).getCssProperty('color').parsed.hex;
        assert.equal(smallFooterColor, exd.smallFootCssProp.color, 'The Small Footer color is not #212529');
    });
});