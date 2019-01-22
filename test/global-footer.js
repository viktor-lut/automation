const { assert } = require('chai');

describe('General', function () {

    it('Global Footer component is always displayed on the bottom of a page.', function(){
        browser.url('/');
        assert.isTrue($(".custom-footer").isVisible());
    })

});