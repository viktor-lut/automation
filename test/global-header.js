
const assert = require('assert');

describe('General', function () {


    it('Global Header', function(){
        browser.url('/Bug-Tracker');
        assert.equal($(.custom-header).isDisplayed(), true);
    })


});

