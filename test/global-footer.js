const assert = require('assert');

describe('General', function () {

    it('Global Footer component is always displayed on the bottom of a page.', function(){
        browser.url('/');
        assert.equal($(".custom-footer").isVisible(), true);
    })

});