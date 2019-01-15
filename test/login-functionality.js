const assert = require('assert');

describe('LoginFunctionality', function () {

  it('error design css properties', function(){
    browser.url('/');
    browser.waitForVisible('#login', 5000);
    browser.click('#login');
    browser.waitForVisible('.alert-local', 5000);
    let elem = $('.alert-local');
    let font_family = elem.getCssProperty('font-family')['value'];
    assert.equal(font_family, 'segoe ui', 'Button has incorrect font-family');
    let background_color = elem.getCssProperty('background-color')['parsed']['hex'];
    assert.equal(background_color, '#f8d7da', 'Button has incorrect background color');
    let borderColorProperties = elem.getCssProperty('border');
    let borderValue = borderColorProperties.value;
    let border_color = borderValue.substring(borderValue.indexOf('('));
    assert.equal(border_color, '(245, 198, 203)', 'Button has incorrect border color');
    let fontSize = elem.getCssProperty('font-size');
    assert.equal(fontSize.value, '16px', 'Button has incorrect font-size');
    let fontWeight = elem.getCssProperty('font-weight');
    assert.equal(fontWeight.value, '400', 'Button has incorrect font-weight');
    let elem2 = $('.alert-danger');
    let color = elem.getCssProperty('color');
    assert.equal(color.parsed.hex, '#721c24', 'Button has incorrect color');
    let textAlign = elem.getCssProperty('text-align');
    assert.equal(textAlign.value, 'center', 'Button has incorrect text-align');
  })

 it('click registration button', function(){
    browser.url('/');
    browser.pause(5000);
    browser.click('#registration');
    let result = browser.waitForVisible('button=< Back', 5000);
    assert.equal(result, true, 'Button Registration is not clicked');
  })

});