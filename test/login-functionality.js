const assert = require('assert');

describe('LoginFunctionality', function () {
  //
  //  it('click registration button', function(){
  //   browser.url('/');
  //   browser.pause(5000);
  //   browser.click('#registration');
  //   let result = browser.waitForVisible('button=< Back', 5000);
  //   assert.equal(result, true, 'Button Registration is not clicked');
  // })

  it('error design login-page', function(){
    browser.url('/');
    browser.pause(5000);
    browser.click('#login');
    let elem = $('.alert-local');
    browser.pause(3000);
    let font = elem.getCssProperty('font-family');
    console.log(font);
    assert.equal(font, 'Segoe UI,sans-serif!important', 'Button has incorrect font-family');
  })


});