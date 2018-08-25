const assert = require('assert');

describe('Page opening', function () {
  it('get title', function(){
    browser.url('/Bug-Tracker'); //open baseUrl + string passed in .url() function
    let title = browser.getTitle(); //get page title and assign it to the "title" variable
    browser.pause(5000); //just pause to visually see that something is happening on the page
    console.log(title); //log "title" variable
    assert.equal(title, 'Bug Tracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
  })
});