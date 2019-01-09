const assert = require('assert');

describe('Client', function () {


  it('Page level title', function(){
    browser.url('/Bug-Tracker');
    assert.equal(browser.getTitle(), 'Bug Tracker');
  })

  it('Global Header exists', function(){
    assert.equal($('.custom-header').isVisible(), true);
  })

});