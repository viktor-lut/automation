const assert = require('assert');

describe('Page opening', function () {
  it('get title', function(){
    browser.url('/Bug-Tracker/');
    let title = browser.getTitle();
    browser.pause(5000);
    assert.equal(title, 'Bug Tracker', 'Title is incorrect');
  })
});