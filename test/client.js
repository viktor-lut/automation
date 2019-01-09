const assert = require('assert');

describe('client', function () {

  it('Page level title', function(){
    browser.url('/');
    assert.equal(browser.getTitle(), 'Bug Tracker');
  })

  it('Global header exists', function(){
    assert.equal($(".custom-header").isVisible(), true);
  })



});