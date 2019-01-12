const assert = require('assert');

describe('Page opening', function () {
  it('get title', function(){
    browser.url('/');
    let title = browser.getTitle();
    assert.equal(title, 'Bug Tracker', 'Title is incorrect');
  })

  it('Global Header is present', function(){
    browser.url('/');
    assert.equal($(".custom-header").isVisible(),true);
  })

  it('Global Footer is present', function(){
    browser.url('/');
    assert.equal($(".custom-footer").isVisible(),true);
  })



});