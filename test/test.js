const assert = require('assert');

describe('Page opening', function () {
  it('get title', function(){
    browser.url('/');
    let title = browser.getTitle();
    assert.equal(title, 'Bug Tracker', 'Title is incorrect');
  })
});