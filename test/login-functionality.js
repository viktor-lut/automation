const assert = require('assert');

describe('LoginFunctionality', function () {

  it('error design font-family login-page', function(){
    browser.url('/');
    browser.waitForVisible('#login', 5000);
    browser.click('#login');
    browser.waitForVisible('.alert-local', 5000);
    let elem = $('.alert-local');
    let font = elem.getCssProperty('font-family');
    assert.equal(font.value, 'segoe ui', 'Button has incorrect font-family');
  })

  it('error design background-color login-page', function(){
    let elem = $('.alert-local');
    let background = elem.getCssProperty('background-color');
    assert.equal(background.parsed.hex, '#f8d7da', 'Button has incorrect background color');
  })

  it('error design border color login-page', function (start, end){
    let elem = $('.alert-local');
    let borderColor = elem.getCssProperty('border');
    let borderValue = borderColor.value;
    let result = borderValue.substring(borderValue.indexOf('('));
    assert.equal(result, '(245, 198, 203)', 'Button has incorrect border color');
  })

  it('error design font-size login-page', function(){
    let elem = $('.alert-local');
    let fontSize = elem.getCssProperty('font-size');
    assert.equal(fontSize.value, '16px', 'Button has incorrect font-size');
  })

  it('error design font-weight login-page', function(){
    let elem = $('.alert-local');
    let fontWeight = elem.getCssProperty('font-weight');
    assert.equal(fontWeight.value, '400', 'Button has incorrect font-weight');
  })

  it('error design color login-page', function(){
    let elem = $('.alert-danger');
    let color = elem.getCssProperty('color');
    assert.equal(color.parsed.hex, '#721c24', 'Button has incorrect color');
  })

  it('error design text-align login-page', function(){
    let elem = $('.alert-danger');
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