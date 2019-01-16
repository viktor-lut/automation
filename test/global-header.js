
const assert = require('assert');

describe('General', function () {

    it('Global Header', function(){
        browser.url('/Bug-Tracker');
        assert.equal($('.custom-header').isVisible(), true);
    })


});

//describe('Design', function () {

  //  it('', function(){
    //    browser.url('/Bug-Tracker');
      //  assert.equal($('.custom-header').isDisplayed(), true);
    //})


//});

