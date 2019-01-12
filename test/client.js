const assert = require('assert');


describe('Client', function () {

  it('Page level title', function(){
    browser.url('/');
    assert.equal(browser.getTitle(), 'Bug Tracker');
  })

  it('Global header exists', function(){
    assert.equal($(".custom-header").isVisible(), true);
  })


  it('Global Header exists', function(){
    assert.equal($(".custom-header").isVisible(), true);
  })

});